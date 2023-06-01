import { createRouter } from '@storeon/router'

export default createRouter([
  ['/', () => ({ page: 'inicio' })],
  ['/juego', () => ({ page: 'juego' })],
  ['/ganaste', () => ({ page: 'ganaste' })],
  ['/perdiste', () => ({ page: 'perdiste' })]
])
