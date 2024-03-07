import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Course from './Course';

function CourseUpdate() {
    let { courseId} = useParams();
    const[courses, setCourses] = useState([]);

    useEffect(() => {
        function callback2(data) {
          setCourses(data.courses);
        }
        function callback1(res) {
          res.json().then(callback2);
        }
    
        fetch("http://localhost:3000/admin/courses/", {
          method: "GET",
          headers: {
            "Authorization": "Bearer " + localStorage.getItem("token"),
          }
        }).then(callback1)
    }, []);

    let course = null;
    for(let i = 0; i< courses.length; i++) {
        if(courses[i].id == courseId) [
            course = courses[i]
        ]
    }

    return (
        <div>
            <Course course={course} />
        </div>
    )
}

export default CourseUpdate;