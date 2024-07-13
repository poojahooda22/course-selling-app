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
        <Card sx={{ maxWidth: 345 }}>
            <div className='w-[16vw] h-[6vw]'>
              <img src={course.imageLink} className='w-full h-full object-cover'/>
            </div>
            <CardContent style={{marginLeft: '10px'}}>
              <Typography gutterBottom variant="h5" color="text.primary" style={{fontWeight: 'bold'}}>
                  {course.title}
                </Typography>
                <Typography variant="body" style={{fontSize: '.8vw', fontWeight: 'medium',  display: 'block'}}>
                  {course.description}
                </Typography>
                <Typography variant="paragraph" style={{fontSize: '1vw', fontWeight: 'bold', marginTop: '12px'}}>
                  Rs {course.price}
              </Typography>
            </CardContent>
            <CardActions style={{marginLeft: '14px'}}>
              <Button size="small" variant='contained' style={{marginBottom: '10px'}}
                onClick={() => {
                  navigate("/course/" + course._id)
                }}
              >Edit</Button>
            </CardActions>
        </Card>
    </div>
  )
}

export default Course
