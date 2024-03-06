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
     {JSON.stringify(courses)}
    </div>
  )
}  

function Course(props) {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

export default Courses;
