import React from 'react'

// import clsx from 'clsx'
import { container } from './style.css'
import { ExampleProps } from './types'

export const Example = ({ example }: ExampleProps) => {
  return <div className={container}>{example}</div>
}
