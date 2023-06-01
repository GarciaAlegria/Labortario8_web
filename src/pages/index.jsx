import React from 'react'
import Juego from './Juego'
import Inicio from './Inicio'
import Ganaste from './Ganaste'
import Perdiste from './Perdiste'

import { useStoreon } from 'storeon/react'
import { routerKey } from '@storeon/router'

const Page = () => {
  const { [routerKey]: route } = useStoreon(routerKey)

  let Component = null
  switch (route.match.page) {
    case 'inicio':
      Component = <Inicio />
      break
    case 'juego':
      Component = <Juego />
      break
    case 'ganaste':
      Component = <Ganaste />
      break
    case 'perdiste':
      Component = <Perdiste />
      break
    default:
      Component = <h1>404</h1>
  }

  return (
    <main>
      {Component}
    </main>
  )
}

export default Page
