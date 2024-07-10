import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';

const Courses = () => {
  return (
    <div>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
        />
      <CardContent>
        <Typography variant="body1" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
        </Typography>
        <Typography paragraph>
            Heat 1/2 cup of the 
          </Typography>
      </CardContent>
    </Card>
    </div>
    
  )
}

export default Courses
