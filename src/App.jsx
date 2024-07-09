import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Appbar from './Appbar';
import Signup from './Signup';
import Signin from './Signin';



function App() {
  return (
    <div style={{width: "100vw", height:"100vh", backgroundColor: "#eeeeee" }}>
      <Appbar />
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Signin/>} />
        </Routes>
      </Router>
    </div> 
  )
}

export default App;
