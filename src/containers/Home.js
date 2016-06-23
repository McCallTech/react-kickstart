import React, {Component, PropTypes} from 'react'
import Counter from '../components/Counter'
import * as counterActions from '../actions/counter'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import style from './Home.css'

class Home extends Component {

  getVersion () {
    return version
  }

  render () {
    const {counter, increment} = this.props

    return (
      <section className={style.section}>
        <div>
          <Counter
            count={counter}
            onIncrement={increment}
          />
        </div>
      </section>
    )
  }
}

Home.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired
}

function mapStateToProps ({counter}) {
  return {counter}
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(counterActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
