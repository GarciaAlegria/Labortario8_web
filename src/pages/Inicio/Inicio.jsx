import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useStoreon } from 'storeon/react'

import { navigate } from '@store'
import { Laberinto, Inputs, Buttons } from '@components'
import { styles, form, centerTitle, lab_group, lab_titulo, lab_input } from './Inicio.module.css'

const Inicio = () => {
  const { dispatch, datos } = useStoreon('datos')
  const [data, setData] = useState(
    {
      alto: datos.alto,
      ancho: datos.ancho,
      selected: datos.selected,
      tiempo: datos.tiempo
    }
  )
  let ignore = false

  useEffect(() => {
    if (!ignore) {
      dispatch('borrar')
      ignore = true
    }
  }, [])

  useEffect(() => {
    dispatch('update', data)
  }, [data])

  const handleChangeAlto = (valor) => {
    const nuevo = valor.target.value
    setData(valors => {
      return { ...valors, alto: nuevo }
    })
  }

  const handleChangeAncho = (valor) => {
    const nuevo = valor.target.value
    setData(valors => {
      return { ...valors, ancho: nuevo }
    })
  }

  const handleChangeTiempo = (valor) => {
    const nuevo = valor.target.value
    setData(valors => {
      return { ...valors, tiempo: nuevo }
    })
  }

  const handleChecked = () => {
    if (data.selected === false) {
      setData(valors => {
        return { ...valors, selected: true }
      })
    } else {
      setData(valors => {
        return { ...valors, selected: false }
      })
    }
  }

  const handleClick = async () => {
    if (data.alto >= 4 && data.alto <= 100) {
      if (data.ancho >= 4 && data.ancho <= 100) {
        if (data.selected === true) {
          if (data.tiempo !== null) {
            dispatch('update', data)
            navigate('/juego')
          } else {
            alert('ERROR: Porfavor añade la cantidad de tiempo para iniciar')
          }
        } else {
          dispatch('update', data)
          navigate('/juego')
        }
      } else {
        alert('ERROR: El ancho debe estar en el rango 4 < r < 100')
      }
    } else {
      alert('ERROR: El alto debe estar en el rango 4 < r < 100')
    }
  }

  return (
    <div className={styles}>
      <div className={centerTitle}>
        <h1>Bienvenidos al laboratorio 8 </h1>
        <h2>Selecciona el tema del Laberinto </h2>
      </div>
      <Laberinto />
      <div className={form}>
        <h1>Ajustes del Juego</h1>
        <div className={lab_group}>
          <h3 className={lab_titulo}>Alto del Laberinto</h3>
          <Inputs type={'number'} value={data.alto} onchange={handleChangeAlto} placeholder={'Ingrese el alto'} className={lab_input} />
        </div>
        <div className={lab_group}>
          <h3 className={lab_titulo}>Ancho del Laberinto</h3>
          <Inputs type={'number'} value={data.ancho} onchange={handleChangeAncho} placeholder={'Ingrese el ancho'} className={lab_input} />
        </div>
        <h3>Desea agregar tiempo?</h3>
        <Inputs type={'checkbox'} value={data.selected} onchange={handleChecked} />
        {
          data.selected === true ? 
          <div className={lab_group}>
            <h3 className={lab_titulo}>Tiempo del Laberinto</h3>
            <Inputs type={'number'} value={data.tiempo} onchange={handleChangeTiempo} placeholder={'Ingrese el tiempo (Ejemplo 1 = 1 minuto)'} className={lab_input} />
          </div> : null
        }
        <Buttons type={'button'} onclick={handleClick} name={'Empezar a jugar!'} />
      </div>
    </div>
  )
}

Inicio.propTypes = {
  letter: PropTypes.string
}

export default Inicio
