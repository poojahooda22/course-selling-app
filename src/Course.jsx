import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Icon from '@mui/material/Icon';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';

function Course(props) {
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
                {/* <T 
                    variant="h6" 
                    component="div" 
                    style={{color: '#28c271'}}
                >
                    
            </div>
            <Typography 
                variant="body1" 
                component="div" 
                style={{
                    textAlign: 'left', 
                    width: '300px', 
                    margin: '10px'
                }}
            >
                {props.course.description}
            </Typography>
 
            <Button
                variant="contained" 
                margin="normal"
                size="medium"
                style={{display: 'flex', alignItems: 'center', fontSize: '16px'}}
                onClick={() => {
                    window.location ="/course/" + props.course._id
                }}
            > 
                <EditIcon
                    style={{marginRight: '4px', width: '18px', height: '18px' }}
                />        
                Edit
            </Button>
                
        </Card>
    </div>
 }


 export default Course;