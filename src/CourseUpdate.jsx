import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import CourseCard from './CourseCard';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import Typography from '@mui/material/Typography';

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
        return <div style={{height: "100vh", justifyCenter: "center", flexDirection: 'column'}}>
            Loading...
        </div>
    }

    return (
        <div style={{}}>
            <GrayTop title={course.title}/>
            <CourseCard course={course} />  
            <UpdatedCard  course={course} setCourse={setCourse} />
        </div>
    )
}

function GrayTop({title}) {
    return <div style={{height: 250, background: "#212121", top: 0, width: '100vw', zIndex: 0, marginBottom: '-250px' }}>
        <div style={{ height: 250, display: 'flex', justifyContent: 'center', flexDirection: 'column'}} >
            <div>
                <Typography 
                    variant="h4" 
                    component="div" 
                    style={{color: 'white', textAlign: 'center', fontWeight: '600'}}
                >
                    {title}
                </Typography>
            </div>
        </div>
    </div>
}

function UpdatedCard({course, setCourse}) {
    const [title, setTitle] = useState(course.title);
    const [description, setDescription] = useState(course.description);
    const [price, setPrice] = useState(course.price);
    const [image, setImage] = useState(course.imageLink);
   
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
                 value={title}
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
                value={description} 
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
                value={price} 
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
                value={image} 
                onChange={(e) => {
                    setImage(e.target.value)
                }}
                style={{width: '360px'}} 
                label="image link"
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
                onClick={async () => {
                    axios.put('http://localhost:3000/admin/courses/' + course._id,  {
                        title: title,
                        description: description,
                        price: price,
                        imageLink: image,
                        published: true,
                    }, {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "Bearer " + localStorage.getItem("token"),

                        }
                    });
                    let updatedCourse = {
                        _id: course._id,
                        title: title,
                        description: description,
                        price: price,
                        imageLink: image,
                    };
                    setCourse(updatedCourse);
                }}
            >
                Update Course
            </Button>
        </Card>
    </div>
  );
}


export default CourseUpdate;