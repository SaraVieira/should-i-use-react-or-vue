import React from "react"
import Route from "react-router-dom/Route"
import Switch from "react-router-dom/Switch"
import Home from "./Pages/Home"
import Question from "./Pages/Question"
import Done from "./Pages/Done"
import "./styles.st.css"

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/app" component={Question} />
    <Route path="/done" component={Done} />
  </Switch>
)

export default App
