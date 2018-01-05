import React from 'react'
import { render } from 'react-dom'

const wrapper = document.getElementById('app')

const App = () => <h1>Setting up React with Parcel bundler</h1>

wrapper ? render(<App />, wrapper) : false
