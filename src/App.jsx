import { Layouts } from './components/Layouts'
import { Routes, Route } from 'react-router-dom'
import { Login } from './page/Login.jsx'
import { Dashbord } from './page/Dashbord'

function App() {

  return (
    <Layouts>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='dashbord' element={<Dashbord />} />
      </Routes>
    </Layouts>
  )
}

export default App
