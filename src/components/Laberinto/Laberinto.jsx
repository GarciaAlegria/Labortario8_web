import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useStoreon } from 'storeon/react'

import { Mazefernan, Mazepvz2 } from '@components'
import { styles, mazeSection } from './Laberinto.module.css'

const Laberinto = ({ tem }) => {
  const [selection, setSelection] = useState({
    selected1: true,
    selected2: false
  })
  const { dispatch, thema } = useStoreon('thema')
  const [dat, setDat] = useState(
    {
      tema: thema.tema
    }
  )
  const [showpvz2, setShowpvz2] = useState(true)
  const [showfernan, setShowfernan] = useState(false)
  const jason = [['+', '-', '-', '+', '-', '-', '+'], ['|', 'p', ' ', '|', ' ', ' ', '|'], ['+', ' ', ' ', '+', ' ', ' ', '+'], ['|', ' ', ' ', ' ', ' ', 'g', '|'], ['+', '-', '-', '+', '-', '-', '+']]

  useEffect(() => {
    dispatch('update/tema', dat)
  }, [dat])

  const changeTema = (value) => {
    setDat(valors => {
      return { ...valors, tema: value }
    })
  }

  const onClick1 = () => {
    setShowpvz2(true)
    setShowfernan(false)
    changeTema(1)
    if (!selection.selected1) {
      setSelection({ selected1: true })
    }
    setSelection({ selected2: false })
    console.log('entro', thema.tema)
  }

  const onClick2 = () => {
    setShowpvz2(false)
    setShowfernan(true)
    changeTema(2)
    if (!selection.selected2) {
      setSelection({ selected2: true })
    }
    setSelection({ selected1: false })
    console.log('entro', thema.tema)
  }

  return (
    <div className={styles}>
      <ul>
        <button onClick={onClick1}>Plantas VS Zombies 2</button>
        <button onClick={onClick2}>Fernanfloo</button>
      </ul>
      <div className={mazeSection}>
        {
          showpvz2 ? <Mazepvz2 w={parseInt(2)} h={parseInt(2)} json={jason} /> : null
        }
        {
          showfernan ? <Mazefernan w={parseInt(2)} h={parseInt(2)} json={jason} /> : null
        }
      </div>
    </div>
  )
}

Laberinto.propTypes = {
  tem: PropTypes.number
}

export default Laberinto
