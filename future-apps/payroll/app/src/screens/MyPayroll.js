import React from 'react'

import Section from '../components/Layout/Section'
import SalaryAllocation from './components/SalaryAllocation'
import PreviousSalary from './components/PreviousSalary'

const MyPayroll = () => (
  <Section data-testid='my-payroll-section'>
    <Section.Left>
      <PreviousSalary />
    </Section.Left>
    <Section.Right>
      <SalaryAllocation />
    </Section.Right>
  </Section>
)

export default MyPayroll
