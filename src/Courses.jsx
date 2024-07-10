import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useEffect } from 'react';

const Courses = () => {

    useEffect(() => {
      function callback2(data){
        console.log(data)
    }
    function callback1(res) {
        res.json().then(callback2)
    }
    fetch('http://localhost:3000/admin/courses', {
        method: "GET",
        body: JSON.stringify({
            title: 'title',
            description: 'description',
            price: 'price',
            imageLink: 'image',
            prescribed: true
        }),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    }).then(callback1)
    })
  return (
    <div className='flex items-center justify-center'>
      <Card sx={{ minWidth: 345 }}>
        <CardMedia
           sx={{ height: 140 }}
          image="https://img.freepik.com/free-vector/e-learning-interactions-illustration-concept_114360-23713.jpg?ga=GA1.1.678771452.1700385267&semt=sph"
          alt="Paella dish"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" color="text.secondary">
            Course1
          </Typography>
          <Typography variant="body">
            Heat 1/2 cup of the 
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small">Delete</Button>
      </CardActions>
      </Card>
    </div>
    
  )
}

export default Courses
