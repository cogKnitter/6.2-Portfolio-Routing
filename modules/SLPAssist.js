import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
      <h2>{this.props.params.projectName}</h2>
      <p>Short description of SLPAssist</p>
      <a href="http://slpassist.com/dashboard">SLPAssist.com</a>
      </div>
    )
  }
})
