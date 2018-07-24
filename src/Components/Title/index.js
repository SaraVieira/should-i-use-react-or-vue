import * as React from "react"
import style from "./title.st.css"

export default props => (
  <h2 {...style("root", { secondary: props.secondary }, props)} {...props}>
    {props.children}
  </h2>
)
