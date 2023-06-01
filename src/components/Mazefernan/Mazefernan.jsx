import React from 'react'
import PropTypes from 'prop-types'

import { Entity } from '@components'
import fernangame from '@assets/fernanflo_game.png'
import fernan3 from '@assets/fernanflo3.png'
import fernan2 from '@assets/fernanflo2.png'
import fernan1 from '@assets/fernanflo1.png'
import fernanfin from '@assets/fernanflo_fin.png'
import { styles } from './Mazefernan.module.css'

const Mazefernan = ({ json, w, h }) => {
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
            return <Entity key={key} letter="p" Imageurl={fernangame} />
          case 'g':
            return <Entity key={key} letter="g" Imageurl={fernanfin} />
          case '-':
            return <Entity key={key} letter="-" Imageurl={fernan1} />
          case '|':
            return <Entity key={key} letter="|" Imageurl={fernan1} />
          case '+':
            return <Entity key={key} letter="+" Imageurl={fernan2} />
          case ' ':
            return <Entity key={key} letter=" " Imageurl={fernan3} />
        }
        return null
      }))}
    </div>
  )
}

Mazefernan.propTypes = {
  json: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  w: PropTypes.number,
  h: PropTypes.number,
  theme: PropTypes.number
}

export default Mazefernan
