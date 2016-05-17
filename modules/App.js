import React from 'react'
import { Link } from 'react-router'


export default React.createClass({
  render() {
    return (
      <div>
        <h1>Mariah Tree's portfolio</h1>
        <h2>San Antonio, Texas</h2>
        <p>Insert short bio here</p>
          <ul role="nav">
             <li><Link to="/blogs">Blog</Link></li>
             <li><Link to="/projects">Projects</Link></li>
             <li><a href="https://github.com/cogKnitter">Github</a></li>
           </ul>
           {this.props.children}

       </div>
    )
  }
})
