import React from 'react'

import Tiempo from './Tiempo'

export default {
  title: 'Game/Tiempo',
  component: Tiempo,
  args: {
    backgroundColor: 'white'
  }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <div style={{ padding: '20px' }}>
    <Tiempo {...args} />
  </div>
)

export const mediominuto = Template.bind({})
mediominuto.args = {
  timen: 0.5
}

export const unminuto = Template.bind({})
unminuto.args = {
  timen: 1
}
