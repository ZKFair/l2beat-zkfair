import React, { SVGAttributes } from 'react'

import { Icon } from '../Icon'

export function UserIcon(props: SVGAttributes<SVGElement>) {
  return (
    <Icon
      width="16"
      height="16"
      viewBox="0 0 16 16"
      aria-label="User icon"
      {...props}
    >
      <path d="M8 1.4375C7.63066 1.4375 7.26493 1.51025 6.9237 1.65159C6.58247 1.79293 6.27243 2.0001 6.01126 2.26126C5.7501 2.52243 5.54293 2.83247 5.40159 3.1737C5.26025 3.51493 5.1875 3.88066 5.1875 4.25C5.1875 4.61934 5.26025 4.98507 5.40159 5.3263C5.54293 5.66753 5.7501 5.97757 6.01126 6.23874C6.27243 6.4999 6.58247 6.70707 6.9237 6.84841C7.26493 6.98975 7.63066 7.0625 8 7.0625C8.36934 7.0625 8.73507 6.98975 9.0763 6.84841C9.41753 6.70707 9.72757 6.4999 9.98874 6.23874C10.2499 5.97757 10.4571 5.66753 10.5984 5.3263C10.7398 4.98507 10.8125 4.61934 10.8125 4.25C10.8125 3.88066 10.7398 3.51493 10.5984 3.1737C10.4571 2.83247 10.2499 2.52243 9.98874 2.26126C9.72757 2.0001 9.41753 1.79293 9.0763 1.65159C8.73507 1.51025 8.36934 1.4375 8 1.4375ZM10.8125 8.9375H5.1875C3.63406 8.9375 2.375 10.1966 2.375 11.75V14.5625H13.625V11.75C13.625 10.1966 12.3659 8.9375 10.8125 8.9375Z" />
    </Icon>
  )
}