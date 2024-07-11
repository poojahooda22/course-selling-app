import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const Course = (props) => {
  return (
    <div className=''>
        <Card sx={{ minWidth: 345 }}>
            <div>
                <img src={props.course.imageLink} style={{width: '16vw', height: '8vw'}}/>
            </div>
            
            <CardContent>
                <Typography gutterBottom variant="h5" color="text.secondary">
                  {props.course.title}
                </Typography>
                <Typography variant="body">
                  {props.course.description}
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

export default Course
