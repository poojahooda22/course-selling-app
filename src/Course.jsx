import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

function Course(props) {
    return <div style={{ margin: '16px'}}>
        <Card style={{
            padding: '16px', 
            width: 400, 
            display:"flex", 
            flexDirection: "column", 
            justifyContent: "center", 
            alignItems: "center" 
        }}>
            <img
                src={props.course.imageLink}
                style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px'}}
            />
            <Typography variant="h5" component="div">{props.course.title}</Typography>
        </Card>
    </div>
 }


 export default Course;