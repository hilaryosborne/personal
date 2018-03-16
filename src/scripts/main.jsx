import React from 'react'
import ReactDOM from 'react-dom'
import { RootPaths } from 'containers'
import { branding, colors } from './styles'

ReactDOM.render(<RootPaths />, document.getElementById('root'))

document.body.style.backgroundColor = branding.primary
document.body.style.color = colors.white
