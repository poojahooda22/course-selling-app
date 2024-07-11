import Course from "./Course"
import { useEffect, useState } from 'react';


const CourseCard = () => {
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
        <div>
            <h1>Course card</h1>
        
        </div>
    )
}

export default CourseCard
