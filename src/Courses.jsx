import { useEffect, useState } from "react";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {

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
    </div>
  )
}  

export default Courses;
