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
    called: []
  }

  componentDidMount() {
    this.getQuestion()
  }

  getQuestion() {
    const findRandomNumber = () => {
      const result = Math.floor(Math.random() * this.state.questions.length)
      if (this.state.called.includes(result)) return findRandomNumber()
      return result
    }
    const random = findRandomNumber()
    this.setState(({ questions, called }) => ({
      question: questions[random],
      called: [...called, random]
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
