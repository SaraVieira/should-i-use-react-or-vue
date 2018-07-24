import * as React from 'react'
import style from './button.st.css'

export default props => (
  <button {...style('root', { secondary: props.secondary }, props)} {...props}>
    <span className={style.text}>{props.children}</span>
  </button>
)
