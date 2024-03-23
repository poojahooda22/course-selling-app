import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function LandingPage() {
    return (
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
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
            <div>
                <img
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"}}
                src="https://img.freepik.com/free-vector/woman-getting-knowledge-online-school-vector-illustration_74855-4823.jpg?t=st=1711182155~exp=1711185755~hmac=5d2a55c37153cb020cf81945c9ccad9b3b63daab2a450b70d3305ab2d2f76611&w=1060"/>
            </div> 
        </div>
    )
}

export default LandingPage;