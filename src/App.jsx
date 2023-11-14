import './App.scss'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Home, Contact, About, Courses, Layout, Advertising } from 'pages'

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
            <Route path='/advertising' element={<Advertising />} />
            <Route path='/courses' element={<Courses />} />
          </Route>
        }
      </Routes>
    </>
  )
}

export default App
