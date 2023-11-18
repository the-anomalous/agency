import { useEffect, lazy, Suspense } from 'react'
import './App.scss'
import { Route, Routes, Navigate, useLocation } from 'react-router-dom'
import Layout from 'pages/layout/layout.page'
import { ErrorBoundary } from 'components'

const Home = lazy(() => import('pages/home.page'))
const Contact = lazy(() => import('pages/contact/contact.page'))
const AboutUs = lazy(() => import('pages/about/about.page'))
const Courses = lazy(() => import('pages/courses/courses.page'))
const Advertising = lazy(() => import('pages/advertising/advertising.page'))
const Marketing = lazy(() => import('pages/marketing/marketing.page'))
const Election = lazy(() => import('pages/election/election.page'))

const LazyLoad = ({ page }) => {
  return <Suspense fallback={<ErrorBoundary />}>{page}</Suspense>
}

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {
          <Route element={<Layout />}>
            <Route path='/' element={<LazyLoad page={<Home />} />} />
            <Route path='/home' element={<Navigate to='/' replace />} />
            <Route path='/contact' element={<LazyLoad page={<Contact />} />} />
            <Route path='/about-us' element={<LazyLoad page={<AboutUs />} />} />
            <Route
              path='/advertising'
              element={<LazyLoad page={<Advertising />} />}
            />
            <Route path='/courses' element={<LazyLoad page={<Courses />} />} />
            <Route
              path='/digital-marketing'
              element={<LazyLoad page={<Marketing />} />}
            />
            <Route
              path='/election-campaign'
              element={<LazyLoad page={<Election />} />}
            />
          </Route>
        }
      </Routes>
    </>
  )
}

export default App
