import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

function Course(props) {
    return <Card style={{
        padding: '16px', 
        width: 400, 
        display:"flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center" 
    }}>
     {props.course.title}
    </Card>
 }


 export default Course;