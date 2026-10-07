import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Landing from './views/Landing.jsx'
import Learn from './views/Learn.jsx'
import Quiz from './views/Quiz.jsx'
import NotFound from './views/NotFound.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/quiz" element={<Quiz />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
