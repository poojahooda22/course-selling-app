import { useParams } from "react-router-dom";
// import Course from "./Course"
import { useEffect, useState } from 'react';

import AddCourse from "./AddCourse";

import axios from 'axios';

const CourseCard = () => {
    let { courseId } = useParams();
    const [course, setCourse] = useState([]);

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


     if(!courses) {
        return <div>
            <h3>Loading....</h3>
        </div>
     }
    

    return (
        <div>
            <AddCourse courses={courses} />
            <UpdateCard courses={courses} />
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
