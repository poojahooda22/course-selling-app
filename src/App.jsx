
import './App.css'
import Signup from './Signup';
import Appbar from './Appbar';
import Signin from './Signin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddCourse from './AddCourse';
import Courses from './Courses';
import CourseUpdate from './CourseUpdate';

function App() {
  return (
    <div style={{width: "100vw", height:"100vh", backgroundColor: "#eeeeee" }}>
      <Appbar />
      <Router>
        <Routes>
          <Route path="/addcourse" element={<AddCourse />} />
          <Route path="/course/:courseId" element={<CourseUpdate />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
    </Router>
    </div> 
  )
}

export default App;
