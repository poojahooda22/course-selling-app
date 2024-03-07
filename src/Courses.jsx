import { useEffect, useState } from "react";

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

  return <div>
   {courses.map(course => (
    <Course course={course} key={course.id} />
   ))}


    
  </div>
}  

function Course(props) {
   return <div>
    {props.course.title}
   </div>
}




export default Courses;
