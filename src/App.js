import { Helmet } from 'react-helmet'

import './App.css'
import Logo from './images/react-logo.png'

function App () {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>App</title>
      </Helmet>
      <img src={Logo} alt='' />
      <h1>Hello world!!</h1>
      <p>Edit app.js file on /src</p>
    </>
  )
}

export default App
