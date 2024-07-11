import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';

const Courses = () => {
  const [courses, setCourses] = useState([]);

    useEffect(() => {
      function callback2(data){
        setCourses(data.courses);
    }
    function callback1(res) {
        res.json().then(callback2)
    }
    fetch('http://localhost:3000/admin/courses', {
        method: "GET",
        // body: JSON.stringify({
        //     title: 'title',
        //     description: 'description',
        //     price: 'price',
        //     imageLink: 'image',
        //     prescribed: true
        // }),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    }).then(callback1)
    })
  return (
    <div className='flex items-center justify-center gap-6'>
      {courses.map((course, index) => {
        return (
          <div key={index}>
            <Card sx={{ minWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={course.imageLink}
                alt="Paella dish"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" color="text.secondary">
                  {course.title}
                </Typography>
                <Typography variant="body">
                  {course.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Edit</Button>
                <Button size="small">Delete</Button>
              </CardActions>
            </Card>
          </div> 
        )
      })}
    </div>
  )
}

export default Courses
