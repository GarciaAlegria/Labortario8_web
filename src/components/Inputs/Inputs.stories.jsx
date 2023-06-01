import React from 'react'

import Inputs from './Inputs'

export default {
  title: 'Menus/textos',
  component: Inputs,
  args: {
    backgroundColor: 'white'
  }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <div style={{ padding: '20px' }}>
    <Inputs {...args} />
  </div>
)

export const Numeros = Template.bind({})
Numeros.args = {
  type: 'number',
  value: 6,
  placeholder: 'Numero de prueba'
}

export const Longitud = Template.bind({})
Longitud.args = {
  type: 'text',
  value: 'Esto es una prueba del string siuuuuuuuuuuuuuuuuuu',
  placeholder: 'string de prueba'
}

export const Marcadorhint = Template.bind({})
Marcadorhint.args = {
  type: 'text',
  value: '',
  placeholder: 'Escribaalgoaquixd,esunejemploosaludos :)'
}
