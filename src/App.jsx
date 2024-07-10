import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Appbar from './Appbar';
import Signup from './Signup';
import Signin from './Signin';
import AddCourse from './AddCourse';
import Courses from './Courses';



function App() {
  return (
    <div style={{width: "100vw", height:"100vh", backgroundColor: "#111", color: '#fff' }}>
      <Router>
      <Appbar />
        <Routes>
        
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Signin/>} />
          <Route path="/addcourse" element={<AddCourse/>} />
          <Route path="/courses" element={<Courses/>} />
        </Routes>
      </Router>
    </div> 
  )
}

export default App;
