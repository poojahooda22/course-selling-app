import { useParams } from "react-router-dom";
// import Course from "./Course"
import { useEffect, useState } from 'react';
import AddCourse from "./AddCourse";

import axios from 'axios';

const CourseCard = () => {
    let { courseId } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/admin/course/' + courseId, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token"),
            }
        }).then(res => {
            setCourse(res.data.course);       
        })
    }, []);


     if(!course) {
        return <div>
            <h3>Loading....</h3>
        </div>
     }
    

    return (
        <div>
            <AddCourse courses={course} />
            <h1>{course.title}</h1>
            <UpdateCard course={course} />
        </div>
    )
}

function UpdateCard(props) {
    return (
        <div>
            <h3>Update Card</h3>
           
        </div>
    )
}

export default CourseCard
