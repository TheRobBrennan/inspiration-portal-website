import { Routes, Route } from 'react-router-dom'
import ButtonGradient from "./assets/svg/ButtonGradient"

// Pages
import MainPage from "./pages/MainPage"
import DemoPage from './pages/DemoPage'

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/demo" element={<DemoPage />} />

          {/* Catch-all route */}
          <Route path="*" element={<MainPage />} />
        </Routes>
      </div>
      <ButtonGradient />
    </>
  )
}

export default App
