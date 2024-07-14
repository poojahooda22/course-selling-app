import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Appbar from './Appbar';
import Signup from './Signup';
import Signin from './Signin';
import AddCourse from './AddCourse';
import Courses from './Courses';
import CourseCard from './CourseCard';
import LandingPage from './LandingPage';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from './config';

function App() {
  const [userEmail, setUserEmail] = useState(null)

  const init= async() => {
    const response = await axios.get(`${BASE_URL}/admin/me`, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    })
    if(response.data.username) {
        setUserEmail(response.data.username)
    }
}

  useEffect(() => {
      init();
  }, [])
  return (
    <div style={{width: "100vw", height:"100vh", backgroundColor: '#eeeeee' }}>
      <Router>
        <Appbar userEmail={userEmail} setUserEmail={setUserEmail} />
        <Routes>
          <Route path="/" element={<LandingPage/>}></Route>
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
