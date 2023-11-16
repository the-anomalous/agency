import './App.scss'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Home, Contact, About, Courses, Layout, Advertising, Marketing, Election } from 'pages'

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
            <Route path='/digital-marketing' element={<Marketing />} />
            <Route path='/election-campaign' element={<Election />} />
          </Route>
        }
      </Routes>
    </>
  )
}

export default App
