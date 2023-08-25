import cx from 'classnames'
import React, { ReactNode } from 'react'

interface TogglableDropdownProps {
  className?: string
  button: ReactNode
  role: string
  children: ReactNode
}

export function TogglableDropdown(props: TogglableDropdownProps) {
  return (
    <div className="Dropdown">
      <div
        className={cx(
          'rounded-lg bg-gray-200 px-1 py-1 dark:bg-gray-750',
          props.className,
        )}
      >
        {props.button}
      </div>
      <TogglableDropdownContent dataRole={props.role}>
        {props.children}
      </TogglableDropdownContent>
    </div>
  )
}

interface TogglableDropdownContentProps {
  children: ReactNode
  dataRole: string
}

function TogglableDropdownContent(props: TogglableDropdownContentProps) {
  return (
    <div
      className="Dropdown-Transparent-Item pointer-events-none absolute z-60 opacity-0 transition-opacity duration-300"
      data-role={props.dataRole}
      data-centered="true"
    >
      <hr className="h-1.5 border-t-0" />
      <div className="rounded-lg bg-gray-200 p-6 dark:bg-gray-750">
        {props.children}
      </div>
    </div>
  )
}