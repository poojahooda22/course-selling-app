import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Course from './Course';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';

function CourseUpdate() {
    let { courseId} = useParams();
    const[course, setCourse] = useState([]);

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
            Loading...
        </div>
    }

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
            <Course course={course} />   
            
            <UpdatedCard courses={courses} course={course} setCourses={setCourses} />
        </div>
    )
}

function UpdatedCard(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const course = props.course;
   
  return (
    <div
        style={{
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center'
        }}
    >
        <Card 
            style={{
                padding: '18px', width: 400, display:"flex", 
                flexDirection: "column", justifyContent: "center", 
                alignItems: "center" 
            }}
        >
            <TextField 
                onChange={(e) => {
                    setTitle(e.target.value)
                }}
                style={{width: '360px'}} 
                label="Title" 
                variant="outlined" 
                size="small" 
                margin="normal" 
            />
            <TextField  
                onChange={(e) => {
                    setDescription(e.target.value)
                }}
                style={{width: '360px'}} 
                label="description" 
                variant="outlined" 
                size="small" 
                margin="normal" 
            />
            <TextField  
                onChange={(e) => {
                    setPrice(e.target.value)
                }}
                style={{width: '360px'}} 
                label="price" 
                variant="outlined" 
                size="small" 
                margin="normal" 
            />
            <TextField  
                onChange={(e) => {
                    setImage(e.target.value)
                }}
                style={{width: '360px'}} 
                label="Image link" 
                variant="outlined"
                size="small"
                margin="normal"  
            />           
            <Button 
                variant="contained" 
                margin="normal"
                size="large"
                style={{
                    marginTop: '16px',        
                }}
                onClick={() => {
                    function callback2(data) {
                        // alert("course updated!");
                        let updatedCourses = [];
                        for(let i=0; i<props.courses.length; i++) {
                            if(props.courses[i].id == course.id) {
                                updatedCourses.push({
                                    id: course.id,
                                    title: title,
                                    description: description,
                                    imageLink: image,
                                    price: price,
                                })
                            } else {
                                updatedCourses.push(props.courses[i]);                            
                            }
                        }
                        props.setCourses(updatedCourses);
                    }
                    function callback(res) {
                        res.json().then(callback2);
                    }
                    fetch('http://localhost:3000/admin/course/' + course.id, {
                        method: 'PUT',
                        body: JSON.stringify({
                            title: title,
                            description: description,
                            imageLink: image,
                            price: price,
                            published: true
                        }),
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "Bearer " + localStorage.getItem("token")
                        }
                    }).then(callback)
                }}
            >
                Update Course
            </Button>
        </Card>
    </div>
  );
}


export default CourseUpdate;