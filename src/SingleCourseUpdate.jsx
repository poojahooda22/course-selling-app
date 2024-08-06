import { useState } from 'react';
import axios from 'axios';
import { Card, Button, TextField } from "@mui/material";
import { useRecoilState } from "recoil";
import { courseState } from "./store/atoms/course";


function SingleCourseUpdate() {

    const [courseDetails, setCourse] = useRecoilState(courseState);
    const [title, setTitle] = useState(courseDetails.course.title);
    const [description, setDescription] = useState(courseDetails.course.description);
    const [image, setImage] = useState(courseDetails.course.imageLink);
    const [price, setPrice] = useState(courseDetails.course.price);

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
                        axios.put('http://localhost:3000/admin/courses/' +  courseDetails.course._id, {
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
                            _id: courseDetails.course._id,
                            title: title,
                            description: description,
                            imageLink: image,
                            price
                        };
                        setCourse({course: updatedCourse, isLoading: false});
                    }}
                >
                    Update Course
                </Button>
            </Card>
        </div>
    )
}


export default SingleCourseUpdate