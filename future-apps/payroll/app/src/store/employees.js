import app from './app'
import { employee, tokenAllocation } from './marshalling'
import { getIdentity } from '../services/idm'

export function getEmployeeById (id) {
  return app.call('getEmployee', id)
    .first()
    .map(data => {
      return employee({ id, ...data })
    })
    .flatMap(async employee => {
      const [{ name, role }] = await getIdentity(employee.domain)

      return { ...employee, name, role }
    })
    .toPromise()
}

export function getEmployeeByAddress (address) {
  return app.call('getEmployeeByA', getEmployeeByAddress)
    .first()
    .map(data => {
      return employee(data)
    })
    .flatMap(async employee => {
      const [{ name, role }] = await getIdentity(employee.domain)

      return { ...employee, name, role }
    })
    .toPromise()
}

export async function getSalaryAllocation (accountAddress, tokens) {
  const salaryAllocation = await Promise.all(
    tokens.map(token =>
      app.call('getAllocation', token.address, { from: accountAddress })
        .first()
        .map(allocation => tokenAllocation({ ...token, allocation }))
        .toPromise()
    )
  )

  return salaryAllocation.filter(({ allocation }) => allocation)
}
