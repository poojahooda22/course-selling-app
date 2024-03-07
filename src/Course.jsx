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
            <Typography 
                variant="h5" component="div" 
                style={{marginTop: '12px'}}
            >{props.course.title}</Typography>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between',  width: '400px', marginTop: '12px' }}>
                <Typography variant="body1" component="div">{props.course.description}</Typography>
                <Typography variant="h6" component="div">Price: {props.course.price}</Typography>
            </div>
        </Card>
    </div>
 }


 export default Course;