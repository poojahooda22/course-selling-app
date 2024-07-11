import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Course = (props) => {
  return (
    <div>
        <Card sx={{ minWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={props.course.imageLink}
                alt="Paella dish"
              />
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
