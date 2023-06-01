import React from 'react'
import PropTypes from 'prop-types'
import { Entity } from '@components'
import pvzjugador from '@assets/pvz2_game.png'
import pvzPilar from '@assets/pvz2_pilar.png'
import pvzwall from '@assets/pvz2_muro.png'
import pvzfinal from '@assets/pvz2_fin.jpg'

import { styles } from './Mazepvz2.module.css'

const Mazepvz2 = ({ json, w, h }) => {
  return (
    <div
      className={styles}
      style={{
        gridTemplateColumns: `repeat(${w * 2 + w + 1}, 50px)`,
        gridTemplateRows: `repeat(${h + h + 1}, 50px)`,
        width: `${((w * 2) + w + 1) * 50}px`,
        height: `${(h + h + 1) * 50}px`
      }}
    >
      {json.map((row, ri) => row.map((col, ci) => {
        const key = `${ri}-${ci}`
        switch (col) {
          case 'p':
            return <Entity key={key} letter="p" Imageurl={pvzjugador} />
          case 'g':
            return <Entity key={key} letter="g" Imageurl={pvzfinal} />
          case '-':
            return <Entity key={key} letter="-" Imageurl={pvzwall} />
          case '|':
            return <Entity key={key} letter="|" Imageurl={pvzwall} />
          case '+':
            return <Entity key={key} letter="+" Imageurl={pvzwall} />
          case ' ':
            return <Entity key={key} letter=" " Imageurl={pvzPilar} />
        }
        return null
      }))}
    </div>
  )
}

Mazepvz2.propTypes = {
  json: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  w: PropTypes.number,
  h: PropTypes.number,
  theme: PropTypes.number
}

export default Mazepvz2
