
import './App.css'
import Header from './components/Header'
import ErrorBoundary from './components/ErrorBoundary'
import Hero from './components/Hero'
import Test from './components/Test'
import Footer from './components/Footer'

function App() {
  return (
    <ErrorBoundary>
      <body className='style="overflow: hidden; height: 100%; width: 100%; visibility: visible; display: block; inset: 0px auto auto 0px; margin: 0px; opacity: 1 !important;'>
      <Header/>
      <Hero/>
     
      </body>
      <Test/>
   <Footer/>
    </ErrorBoundary>
  
  )
}

export default App
