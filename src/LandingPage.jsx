import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function LandingPage() {
    return (
        <>
        <div style={{display: "flex",alignItems: "center", justifyContent: "space-around", margin: "30px"}}>
            <div>
                <Typography 
                    variant="h2" 
                    component="div"
                >
                    Course Admin
                </Typography>
                <Typography 
                    variant="body" 
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
                    width: "450px",
                    height: "450px",
                    objectFit: "contain"}}
                    src="https://img.freepik.com/free-photo/science-dna-research-development-human_53876-121145.jpg?w=1060&t=st=1711182657~exp=1711183257~hmac=139d0cdd7e5a9f4dc39dfc8cd4798739731aadbf32f9ae882467841eda4809f8"
                />
            </div> 
        </div>
        </>
    )
}

export default LandingPage;