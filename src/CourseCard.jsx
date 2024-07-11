import { useParams } from "react-router-dom";
// import Course from "./Course"
import { useEffect, useState } from 'react';


const CourseCard = () => {
    let {courseId} = useParams();
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        function callback2(data){
        setCourses(data.courses);
        }
        function callback1(res) {
        res.json().then(callback2)
        }
        fetch('http://localhost:3000/admin/course/:courseId', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer" + localStorage.getItem("token")
            }
        }).then(callback1)
    })

    

    return (
        <div>
            
            <h1>Course card</h1>
            {courseId}
            
            {courses.courseId}
        
        </div>
    )
}

export default CourseCard
