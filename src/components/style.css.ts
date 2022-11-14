import { style, createVar } from '@vanilla-extract/css'

export const exampleVar = createVar()

export const colors = style({
  vars: {
    [exampleVar]: 'pink'
  }
})

export const container = style({
  color: exampleVar,

  selectors: {
    '&:hover, &:focus': {
      color: 'green'
    }
  }
})
