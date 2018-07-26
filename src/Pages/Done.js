import React, { Fragment } from "react"
import { Twitter } from "react-social-sharing"
import style from "./Main.st.css"
import Title from "../Components/Title"
import Button from "../Components/Button"

const Done = props => (
  <main {...style("root", {}, props)}>
    <Fragment>
      <Title>
        No one cares if you use <span className={style.blue}>React</span> or{" "}
        <span className={style.yellow}>Vue</span>.
      </Title>
      <Title>They are both fucking awesome!</Title>
      <div>
        <Twitter
          message="Find out if you should use react or vue"
          link="https://should-i-use-react-or-vue.now.sh"
        />
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/SaraVieira/should-i-use-react-or-vue"
        >
          Repo
        </a>
      </div>
      <div>
        <a href="/">
          <Button tertiary>Play again?!</Button>
        </a>
      </div>
    </Fragment>
  </main>
)

export default Done
