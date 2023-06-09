import React from 'react'

import Mazefernan from './Mazefernan'

export default {
  title: 'Game/Mazefernan',
  component: Mazefernan
}

const Template = (args) => (
  <div style={{ padding: '20px' }}>
    <Mazefernan {...args} />
  </div>
)

export const maze4x3 = Template.bind({})
maze4x3.args = {
  json: [["+", "-", "-", "+", "-", "-", "+", "-", "-", "+", "-", "-", "+"], ["|", "p", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "|"], ["+", " ", " ", "+", "-", "-", "+", "-", "-", "+", "-", "-", "+"], ["|", " ", " ", "|", " ", " ", " ", " ", " ", "|", " ", " ", "|"], ["+", " ", " ", "+", " ", " ", "+", " ", " ", "+", " ", " ", "+"], ["|", " ", " ", " ", " ", " ", "|", " ", " ", " ", " ", "g", "|"], ["+", "-", "-", "+", "-", "-", "+", "-", "-", "+", "-", "-", "+"]],
  w: 4,
  h: 3
}

export const maze2x4 = Template.bind({})
maze2x4.args = {
  json: [["+", "-", "-", "+", "-", "-", "+"], ["|", "p", " ", " ", " ", " ", "|"], ["+", " ", " ", "+", "-", "-", "+"], ["|", " ", " ", "|", " ", " ", "|"], ["+", " ", " ", "+", " ", " ", "+"], ["|", " ", " ", " ", " ", " ", "|"], ["+", " ", " ", "+", "-", "-", "+"], ["|", " ", " ", " ", " ", "g", "|"], ["+", "-", "-", "+", "-", "-", "+"]],
  w: 2,
  h: 4
}
