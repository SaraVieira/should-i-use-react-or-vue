//@flow

import * as React from "react"
import style from "./title.st.css"

type Props = {
  children: React.Node,
  secondary?: boolean
}

export default (props: Props) => (
  // $FlowFixMe
  <h2 {...style("root", { secondary: props.secondary }, props)} {...props}>
    {props.children}
  </h2>
)
