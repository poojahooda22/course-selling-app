import { useParams } from "react-router-dom";
// import Course from "./Course"
import { useEffect, useState } from 'react';
import AddCourse from "./AddCourse";

import axios from 'axios';
import { Card, CardActions, CardContent, Typography, Button, TextField } from "@mui/material";

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
                <UpdateSingleCourse course={course} setCourse={setCourse} />
            </div>
            
            
        </div>
    )
}

function CourseMini({course}) {
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
                    <p className="mt-2 text-[1vw] font-medium">{course.price}</p>
                </CardContent>
                
            </Card>  
        </div>
    )
}

function UpdateSingleCourse({course, setCourse}) {

    const [title, setTitle] = useState(course.title);
    const [description, setDescription] = useState(course.description);
    const [price, setPrice] = useState(course.price);
    const [image, setImage] = useState(course.imageLink);

    return (
        <div>
            
            <Card 
                style={{
                    padding: '24px', 
                    width: 600, 
                    display:"flex", 
                    flexDirection: "column", 
                    justifyContent: "center", 
                    alignItems: "center",
                    borderRadius: '16px' 
                }}
            >
            <h3 className="text-[1vw] font-semibold">Update Course details</h3>
            <TextField 
                value={title}
                onChange={(e) => {setTitle(e.target.value)}}
                style={{width: '520px'}} 
                label="Title" 
                variant="outlined" 
                size="medium" 
                margin="normal" 
            />
            <TextField  
                onChange={(e) => {setDescription(e.target.value)}}
               value={description}
                style={{width: '520px'}} 
                label="description" 
                variant="outlined" 
                size="medium" 
                margin="normal" 
            />
            <TextField  
                value={price}
                onChange={(e) => {setPrice(e.target.value)}}
                style={{width: '520px'}} 
                label="price" 
                variant="outlined" 
                size="medium" 
                margin="normal" 
            />
            <TextField 
                onChange={(e) => {setImage(e.target.value)}}
                value={image} 
                style={{width: '520px'}} 
                label="Image link" 
                variant="outlined"
                size="medium"
                margin="normal"  
            />           
            <Button 
                variant="contained" 
                margin="normal"
                size="large"
                style={{
                    marginTop: '16px',        
                }}
                onClick={async () => {
                    axios.put('http://localhost:3000/admin/courses/' + course._id, {
                        title: title,
                        description: description,
                        price: price,
                        imageLink: image,
                        published: true
                    }, {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${localStorage.getItem("token")}`
                        }
                    });
                    let updatedCourse = {
                        _id: course._id,
                        title: title,
                        description: description,
                        imageLink: image,
                        price
                    };
                    setCourse(updatedCourse)
                }}
            >
                Update Course
            </Button>
        </Card>
        </div>
    )
}



export default CourseCard
