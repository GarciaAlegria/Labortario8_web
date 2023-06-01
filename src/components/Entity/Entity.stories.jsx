import React from 'react'

import Entity from './Entity'

export default {
  title: 'Sprites/Imagenes',
  component: Entity,
  args: {
    backgroundColor: 'white'
  }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <div style={{ padding: '20px' }}>
    <Entity {...args} />
  </div>
)

export const Imglargo = Template.bind({})
Imglargo.args = {
  Imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3CxySdT5AQFt96tXVJOqGn0ZwrUAsrPCVTA&usqp=CAU'
}

export const Imgancho = Template.bind({})
Imgancho.args = {
  Imageurl: 'https://static.wixstatic.com/media/dece73_9e55d51994214ff29b088dc94c4d9dac~mv2.png/v1/fill/w_460,h_295,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/descarga_1_png_793492074.png'
}
