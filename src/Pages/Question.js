// @flow

import React, { Fragment } from "react"
import { Redirect } from "react-router-dom"
import style from "./Main.st.css"
import Button from "../Components/Button"
import Title from "../Components/Title"
import questions from "../questions"

type State = {
  questions: string[],
  question: ?string,
  called: number[]
}

type Props = {}

const findRandomNumber = (state: State): number => {
  const result = Math.floor(Math.random() * state.questions.length)
  if (state.called.includes(result)) return findRandomNumber(state)
  return result
}

class Question extends React.Component<Props, State> {
  state = {
    questions,
    question: null,
    called: []
  }

  componentDidMount() {
    this.getQuestion()
  }

  getQuestion() {
    const random = findRandomNumber(this.state)

    this.setState(({ questions, called }) => ({
      question: questions[random],
      called: [...called, random]
    }))
  }

  render() {
    return (
      // $FlowFixMe
      <main {...style("root", {}, this.props)}>
        <Fragment>
          <Title>{this.state.question}</Title>
          <section className={style.buttonGroup}>
            <Button tertiary onClick={() => this.getQuestion()}>
              Yes
            </Button>
            <Button secondary onClick={() => this.getQuestion()}>
              No
            </Button>
          </section>
        </Fragment>
        {this.state.called.length === 5 ? (
          <Redirect
            to={{
              pathname: "/done"
            }}
          />
        ) : null}
      </main>
    )
  }
}

export default Question
