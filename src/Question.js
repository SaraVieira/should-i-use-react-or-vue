import React from 'react'
import style from './Home.st.css'
import Button from './Components/Button'
import { Redirect } from 'react-router-dom'

class Question extends React.Component {
  state = {
    questions: [
      'Is it a big application?',
      'Does it need state management?',
      "Will it interact with API's?",
      'Will it have complicated styling?',
      'Does it have forms?'
    ],
    question: null,
    called: 0
  }

  componentDidMount() {
    this.getQuestion()
  }

  getQuestion() {
    const random = Math.floor(Math.random() * this.state.questions.length)
    console.log(random)
    this.setState(({ questions, called }) => ({
      question: questions[random],
      called: called + 1
    }))
  }

  render() {
    return (
      <div {...style('root', {}, this.props)}>
        {this.state.called}
        <div className={style.main}>
          <h2 className={style.title}>{this.state.question}</h2>
          <div className={style.buttonGroup}>
            <Button onClick={() => this.getQuestion()}>Yes</Button>
            <Button secondary onClick={() => this.getQuestion()}>
              No
            </Button>
          </div>
        </div>
        {this.state.called === 5 ? (
          <Redirect
            to={{
              pathname: '/done'
            }}
          />
        ) : null}
      </div>
    )
  }
}

export default Question
