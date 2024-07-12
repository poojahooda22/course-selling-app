import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import SingleCourseUpdate from "./SingleCourseUpdate";
import axios from 'axios';
import { Card, CardContent, Typography, } from "@mui/material";
import CourseMini from "./CourseMini";

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
        <div className="mt-6">
            <div className="w-full h-[14vw] bg-zinc-800 text-white -mb-[9vw] flex items-center justify-center text-[2vw] font-semibold">
                    <h2>{course.title}</h2>
            </div>
            <div className="flex items-center justify-end px-[4vw]">
                <CourseMini course={course} />
            </div>
            <div className="flex items-start pl-[4vw]">
                <SingleCourseUpdate course={course} setCourse={setCourse} />
            </div>   
        </div>
    )
}



export default CourseCard
