import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from '@store'

import { Buttons } from '@components'
import { styles } from './Perdiste.module.css'


const Perdiste = () => {
  const handleChangeClick = () => {
    navigate('/')
  }

  return (
    <div className={styles}>
      <h1>Has perdido, no te rindas intentalo de nuevo</h1>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3CxySdT5AQFt96tXVJOqGn0ZwrUAsrPCVTA&usqp=CAU' alt="imagen de perder" />
      <Buttons type={'button'} onclick={handleChangeClick} name={'Regresar al menu'} />
    </div>
  )
}

Perdiste.propTypes = {
  letter: PropTypes.string
}

export default Perdiste
