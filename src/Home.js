import React from 'react'
import style from './Home.st.css'
import Button from './Components/Button'
import { withRouter } from 'react-router-dom'

class Home extends React.Component {
  render() {
    return (
      <div {...style('root', {}, this.props)}>
        <div className={style.main}>
          <h1 className={style.title}>
            Should I use <span className={style.blue}>React</span> or{' '}
            <span className={style.yellow}>Vue</span>?
          </h1>
          <h2 className={style.title}>Play to find out</h2>
          <Button onClick={() => this.props.history.push('/app')}>Start</Button>
        </div>
      </div>
    )
  }
}

export default withRouter(Home)
