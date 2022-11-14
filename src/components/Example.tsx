import React from 'react'

import clsx from 'clsx'
import { colors, container } from './style.css'
import { ExampleProps } from './types'

export const Example = ({ example }: ExampleProps) => {
  return <p className={clsx(colors, container)}>{example}</p>
}
