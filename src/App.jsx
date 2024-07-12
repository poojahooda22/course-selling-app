import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Appbar from './Appbar';
import Signup from './Signup';
import Signin from './Signin';
import AddCourse from './AddCourse';
import Courses from './Courses';
import CourseCard from './CourseCard';



function App() {
  return (
    <div style={{width: "100vw", height:"100vh", }}>
      <Router>
      <Appbar />
        <Routes>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Signin/>} />
          <Route path="/addcourse" element={<AddCourse/>} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/course/:courseId" element={<CourseCard />} />
        </Routes>
      </Router>
    </div> 
  )
}

export default App;
