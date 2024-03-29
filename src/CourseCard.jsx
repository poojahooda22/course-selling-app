import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Icon from '@mui/material/Icon';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';

function CourseCard(props) {
    return <div 
        style={{ margin: '16px'}}
    >
        <Card style={{
            padding: '16px', 
            width: 300, 
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
                variant="h5" 
                component="div" 
                style={{marginTop: '12px'}}
            >
                {props.course.title}
            </Typography>
            <div 
                style={{
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',  
                    width: '300px', 
                    marginTop: '12px' 
                }}
            >  
                <Typography 
                    variant="h6" 
                    component="div"
                >
                    Rs {props.course.price}
                </Typography>
                <Typography 
                    variant="h6" 
                    component="div" 
                    style={{color: '#28c271'}}
                >
                    35% off
                </Typography>
            </div>
            <Typography 
                variant="body1" 
                component="div" 
                style={{
                    textAlign: 'left', 
                    width: '300px', 
                    margin: '12px'
                }}
            >
                {props.course.description}
            </Typography>       
        </Card>
    </div>
 }


 export default CourseCard;