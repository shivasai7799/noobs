import React from 'react'
import ReactDom from 'react-dom'

function Greeting() {
return <h4>Here is my First React Project</h4>
}

ReactDom.render(<Greeting/>, document.getElementById('root'));