import { useParams } from "react-router-dom";
// import Course from "./Course"
import { useEffect, useState } from 'react';

import AddCourse from "./AddCourse";
import Course from "./Course";


const CourseCard = () => {
    let { courseId } = useParams();
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        function callback2(data){
            setCourses(data.courses);
        }
        function callback1(res) {
            res.json().then(callback2)
        }
        fetch('http://localhost:3000/admin/course/' + courseId, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }).then(callback1)
    }, []);


     if(!courses) {
        return <div>
            <h3>Loading....</h3>
        </div>
     }
    

    return (
        <div>
            
            <AddCourse courses={courses} />
        </div>
    )
}

export default CourseCard
