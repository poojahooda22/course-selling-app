import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import SingleCourseUpdate from "./SingleCourseUpdate";
import axios from 'axios';
import CourseMini from "./CourseMini";
import { courseState } from "./store/atoms/course";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import { courseTitle, coursePrice, isCourseLoading, courseImage } from "./store/selectors/course";

const CourseCard = () => {
    let { courseId } = useParams();
    const setCourse = useSetRecoilState(courseState);
    const courseLoading = useRecoilValue(isCourseLoading);

    const title = useRecoilValue(courseTitle);
    useEffect(() => {
        axios.get('http://localhost:3000/admin/course/' + courseId, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token"),
            }
        }).then(res => {
            setCourse({isLoading: false, course: res.data.course});
        })
    }, []);


    if(courseLoading) {
    return <div>
        <h3>Loading....</h3>
    </div>
    }
    

    return (
        <div className="mt-6">
            <div className="w-full h-[14vw] bg-zinc-800 text-white -mb-[9vw] flex items-center justify-center text-[2vw] font-semibold">
                    <h2>{title}</h2>
            </div>
            <div className="flex items-center justify-end px-[4vw]">
                <CourseMini  />
            </div>
            <div className="flex items-start pl-[4vw]">
                <SingleCourseUpdate  />
            </div>   
        </div>
    )
}



export default CourseCard
