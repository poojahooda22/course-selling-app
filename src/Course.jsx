import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


const Course = ({course}) => {
  const navigate = useNavigate();
  return (
    <div className=''>
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
              <Button size="small"
                onClick={() => {
                  navigate("/course/" + course._id)
                }}
              >Edit</Button>
              <Button size="small">Delete</Button>
            </CardActions>
        </Card>
    </div>
  )
}

export default Course
