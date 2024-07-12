import { useParams } from "react-router-dom";
// import Course from "./Course"
import { useEffect, useState } from 'react';
import AddCourse from "./AddCourse";

import axios from 'axios';
import { Card, CardActions, CardContent, Typography, Button } from "@mui/material";

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

function UpdateCard({course}) {
    return (
        <div>
            <Card sx={{ minWidth: 345 }}>
            <div className='w-[16vw] h-[6vw]'>
                <img src={course.imageLink} className='w-full h-full object-cover'/>
            </div>
            <CardContent>
                <Typography gutterBottom variant="h5" color="text.secondary">
                  {course.title}
                </Typography>
                <Typography variant="body">
                  {course.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button 
                    variant="contained" 
                    margin="normal"
                    size="large"
                    style={{
                        marginTop: '16px',        
                    }}
                    onClick={() => {}}
                >
                    Update
                </Button>  
            </CardActions>
        </Card>
           
        </div>
    )
}

export default CourseCard
