// @flow

import * as React from "react"
import style from "./button.st.css"

type Props = {
  children: React.Node,
  secondary?: boolean,
  tertiary?: boolean
}

export default (props: Props) => (
  <button
    // $FlowFixMe
    {...style(
      "root",
      { secondary: props.secondary, tertiary: props.tertiary },
      props
    )}
    {...props}
  >
    <span className={style.text}>{props.children}</span>
  </button>
)
