import './App.scss'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Home, Contact, About, Services, Courses, Layout } from 'pages'

function App() {
  return (
    <>
      <Routes>
        {
          <Route element={<Layout />}>
            <Route path='/home' element={<Navigate to='/' replace />} />
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about-us' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/courses' element={<Courses />} />
          </Route>
        }
      </Routes>
    </>
  )
}

export default App
