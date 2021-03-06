import React from 'react'
import { DropDown, GU, _DateRange as DateRange } from '@aragon/ui'

const TransfersFilters = ({
  compactMode,
  opened,
  dateRangeFilter,
  onDateRangeChange,
  onTokenChange,
  symbols,
  tokenFilter,
  transferTypes,
  transferTypeFilter,
  onTransferTypeChange,
}) => {
  return (
    <div
      css={`
        margin-bottom: ${1 * GU}px;
        display: inline-grid;
        grid-gap: ${1.5 * GU}px;
        grid-template-columns: auto auto auto;
      `}
    >
      <DropDown
        placeholder="Type"
        header="Type"
        items={transferTypes}
        selected={transferTypeFilter}
        onChange={onTransferTypeChange}
        width="128px"
      />
      <DropDown
        placeholder="Token"
        header="Token"
        items={symbols}
        selected={tokenFilter}
        onChange={onTokenChange}
        width="128px"
      />
      <DateRange
        startDate={dateRangeFilter.start}
        endDate={dateRangeFilter.end}
        onChange={onDateRangeChange}
      />
    </div>
  )
}

export default TransfersFilters
