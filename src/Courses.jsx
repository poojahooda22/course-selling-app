import { useEffect, useState } from "react";
import Course from "./Course";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

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

  return <Grid container spacing={2}>
    <Grid items xs={8}>
      {courses.map(course => (
      <Course course={course} key={course.id} />
    ))} 
    </Grid>
  </Grid>
}  

export default Courses;
