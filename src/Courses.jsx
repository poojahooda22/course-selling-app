import { useEffect, useState } from 'react';
import Course from './Course';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    function callback2(data){
      setCourses(data.courses);
    }
    function callback1(res) {
      res.json().then(callback2)
    }
    fetch('http://localhost:3000/admin/courses', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    }).then(callback1)
  })

  return (
    <div className='flex items-center justify-center gap-6 flex-wrap'>
      {courses.map((course, index) => {
        return (
          <Course key={index} course={course} />
        )
      })}
    </div>
  )
}

export default Courses
