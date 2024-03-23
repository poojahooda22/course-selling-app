import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function LandingPage() {
    return (
        <div>
            <div>
                <Typography 
                    variant="h1" 
                    component="div"
                >
                    Course Admin
                </Typography>
                <Typography 
                    variant="h6" 
                    component="div"
                    style={{marginBottom: "16px"}}
                >
                    A place to learn, earn and grow
                </Typography>
                <Button 
                    variant="contained" 
                    size="small"
                    style={{marginRight: "16px"}}
                    color={"primary"}  
                    onClick={() => {
                        window.location = "/signup"
                    }}  
                >
                    Signup
                </Button>
                <Button 
                    variant="contained" 
                    size="small"
                    color={"secondary"}  
                    onClick={() => {
                        window.location = "/login"
                    }}     
                >
                    Login
                </Button>
            </div>   
        </div>
    )
}

export default LandingPage;