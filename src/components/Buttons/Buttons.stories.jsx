import React from 'react'

import Buttons from './Buttons'

export default {
  title: 'Menus/Botones',
  component: Buttons,
  args: {
    backgroundColor: 'white'
  }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <div style={{ padding: '20px' }}>
    <Buttons {...args} />
  </div>
)

export const longitudtext = Template.bind({})
longitudtext.args = {
  type: 'button',
  name: 'Hola como estannnnnnnnnn siuuuuuuuuuuuuuuuuuuuuuuuu'
}
