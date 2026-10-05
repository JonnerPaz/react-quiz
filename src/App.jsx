import { Routes, Route } from 'react-router-dom'
// Placeholders for the views
import Landing from './views/Landing.jsx'
import Learn from './views/Learn.jsx'
import Quiz from './views/Quiz.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/learn" element={<Learn />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="*" element={<div>404 - Not Found</div>} />
    </Routes>
  )
}

export default App
