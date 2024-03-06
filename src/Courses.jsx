import { useEffect, useState } from "react";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    function callback2(data) {
      setCourses(data);
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

  return (
    <div>
      Courses
      {courses.map(course => {
        return <Course key={course} course={course} /> 
      })}
    </div>
  );
}  

function Course(props) {
  return <div>
    {props.course.title}
  </div>
}


export default Courses;
