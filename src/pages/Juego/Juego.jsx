import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useStoreon } from 'storeon/react'

import { Mazepvz2, Mazefernan, Tiempo } from '@components'
import { styles } from './Juego.module.css'
import { navigate } from '@store'

const Juego = () => {
  const [mazeLayout, setMazeLayout] = useState(null)
  const [show, setShow] = useState(true)
  const { datos } = useStoreon('datos')
  const { thema } = useStoreon('thema')
  let ignore = false

  const getMaze = async (w, h) => {
    const response = await fetch(`https://maze.uvgenios.online/?type=json&w=${w}&h=${h}`)
    return await response.json()
  }

  const setMaze = async () => {
    setMazeLayout(await getMaze(datos.ancho, datos.alto))
  }

  useEffect(() => {
    if (!ignore) {
      setMaze()
      ignore = true
    }
  }, [])

  useEffect(() => {
    console.log('current: ', mazeLayout)
    window.addEventListener('keydown', detectKeyDown)
  }, [mazeLayout])

  const search = () => {
    const val = 'p'
    for (const row in mazeLayout) {
      for (const col in mazeLayout[row]) {
        if (mazeLayout[row][col] === val) {
          const index = [row, col]
          return index
        }
      }
    }
  }

  const searchSpecific = (row, col, val) => {
    if (mazeLayout[row][col] === val) {
      console.log('val: ' + mazeLayout[row][col])
      console.log('posicion: ', row, col, val)
      return true
    } else {
      return false
    }
  }

  const pressD = (index, val) => {
    const row = index[0]
    const col = parseInt(index[1]) + 1
    if (searchSpecific(row, col, ' ')) {
      const newLayout = mazeLayout
      newLayout[index[0]][index[1]] = ' '
      newLayout[row][col] = val
      setMazeLayout(newLayout)
    } else if (searchSpecific(row, col, 'g')) {
      window.removeEventListener('keydown', detectKeyDown)
      navigate('/ganaste')
    }
  }

  const pressW = (index, val) => {
    const row = parseInt(index[0]) - 1
    const col = index[1]
    if (searchSpecific(row, col, ' ')) {
      const newLayout = mazeLayout
      newLayout[index[0]][index[1]] = ' '
      newLayout[row][col] = val
      setMazeLayout(newLayout)
    } else if (searchSpecific(row, col, 'g')) {
      window.removeEventListener('keydown', detectKeyDown)
      navigate('/ganaste')
    }
  }

  const pressA = (index, val) => {
    const row = index[0]
    const col = parseInt(index[1]) - 1
    if (searchSpecific(row, col, ' ')) {
      const newLayout = mazeLayout
      newLayout[index[0]][index[1]] = ' '
      newLayout[row][col] = val
      setMazeLayout(newLayout)
    } else if (searchSpecific(row, col, 'g')) {
      window.removeEventListener('keydown', detectKeyDown)
      navigate('/ganaste')
    }
  }

  const pressS = (index, val) => {
    const row = parseInt(index[0]) + 1
    const col = index[1]
    if (searchSpecific(row, col, ' ')) {
      const newLayout = mazeLayout
      newLayout[index[0]][index[1]] = ' '
      newLayout[row][col] = val
      setMazeLayout(newLayout)
    } else if (searchSpecific(row, col, 'g')) {
      window.removeEventListener('keydown', detectKeyDown)
      navigate('/ganaste')
    }
  }

  const detectKeyDown = (e) => {
    console.log('Clicked key: ', e.key)
    setShow(false)
    if (mazeLayout) {
      const val = 'p'
      const index = search()

      if (e.key === 'w') {
        pressW(index, val)
      } else if (e.key === 'a') {
        pressA(index, val)
      } else if (e.key === 'd') {
        pressD(index, val)
      } else if (e.key === 's') {
        pressS(index, val)
      }
      setShow(true)
    } else {
      console.log('no esta')
    }
  }

  if (!mazeLayout) {
    return 'Loading...'
  }

  return (
    <div className={styles}>
      {
        datos.selected ? <div><h3>Tiempo Restantes:</h3><Tiempo timen={datos.tiempo} /><br /></div> : null
      }
      {
        show && thema.tema === 1 ? <Mazepvz2 w={parseInt(datos.ancho)} h={parseInt(datos.alto)} json={mazeLayout} /> : null
      }
      {
        show && thema.tema === 2 ? <Mazefernan w={parseInt(datos.ancho)} h={parseInt(datos.alto)} json={mazeLayout} /> : null
      }
    </div>
  )
}

Juego.propTypes = {
  letter: PropTypes.string
}

export default Juego
