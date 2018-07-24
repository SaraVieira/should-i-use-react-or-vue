import React, { Fragment } from "react"
import { Redirect } from "react-router-dom"
import style from "./Main.st.css"
import Button from "../Components/Button"
import Title from "../Components/Title"
import questions from "../questions"

class Question extends React.Component {
  state = {
    questions,
    question: null,
    called: 0
  }

  componentDidMount() {
    this.getQuestion()
  }

  getQuestion() {
    const random = Math.floor(Math.random() * this.state.questions.length)
    this.setState(({ questions, called }) => ({
      question: questions[random],
      called: called + 1
    }))
  }

  render() {
    return (
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
        {this.state.called === 5 ? (
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
