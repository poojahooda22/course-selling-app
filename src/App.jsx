import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Appbar from './Appbar';
import Signup from './Signup';
import Signin from './Signin';
import AddCourse from './AddCourse';
import Courses from './Courses';
import CourseCard from './CourseCard';
import LandingPage from './LandingPage';
import axios from 'axios';
import { BASE_URL } from './config';
import { RecoilRoot, useSetRecoilState } from 'recoil';
import { userState } from './store/atoms/user';



function App() {
  
  return (
    <RecoilRoot>
      <div style={{width: "100vw", height:"100vh", backgroundColor: '#eeeeee' }}>
        <Router>
          <Appbar/>
          <InitUser/>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/signup" element={<Signup />}  />
            <Route path="/login" element={<Signin />} />
            <Route path="/addcourse" element={<AddCourse/>} />
            <Route path="/courses" element={<Courses/>} />
            <Route path="/course/:courseId" element={<CourseCard />} />
          </Routes>
        </Router>
      </div> 
    </RecoilRoot>
    
  )
}

function InitUser() {
  const setUser = useSetRecoilState(userState)

  const init = async() => {
    try {
      const response = await axios.get(`${BASE_URL}/admin/me`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      })
      if(response.data.username) {
        setUser({
            isLoading: false,
            userEmail: response.data.username
        })
      } else {
        setUser({
            isLoading: false,
            userEmail: null
        })
      }
    } catch (e) {
      setUser({
        isLoading: false,
        userEmail: null
      })
    }
  }
  return (
    <div></div>
  )
}

export default App;
