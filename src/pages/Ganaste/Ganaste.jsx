import React from 'react'
import PropTypes from 'prop-types'

import { styles } from './Ganaste.module.css'
import { Buttons } from '@components'
import { navigate } from '@store'

const Ganaste = () => {
  const onClickEvent = () => {
    navigate('/')
  }

  console.log('Ganaste')
  return (
    <div className={styles}>
      <h1>Has ganado felicidades sigue asi!!!</h1>
      <img src='https://static.wixstatic.com/media/dece73_9e55d51994214ff29b088dc94c4d9dac~mv2.png/v1/fill/w_460,h_295,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/descarga_1_png_793492074.png' alt="imagen de ganar" />
      <Buttons type={'button'} onclick={onClickEvent} name={'regresar al inicio'} />
    </div>
  )
}

Ganaste.propTypes = {
  letter: PropTypes.string
}

export default Ganaste
