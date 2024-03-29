import { useEffect, useState } from "react";
import Course from "./Course";


function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    function callback2(data) {
      setCourses(data.courses);
    }
    function callback1(res) {
      res.json().then(callback2);
    }

    fetch("http://localhost:3000/admin/courses", {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token"),
      }
    }).then(callback1)
  }, []);

  return <div style={{display: 'flex', flexWrap: 'wrap', justifyCenter: 'center'}}>
    {courses.map(course => (
      <Course course={course} key={course.id} />
    ))} 
  </div>
   
}  

export default Courses;
