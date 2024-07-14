import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';

function LandingPage({userEmail, setUserEmail}) {
    const navigate = useNavigate();


    if (userEmail) {
        return <>
        <div className='w-full flex items-center justify-between px-[2vw]'>
            <h2 className='text-[1.5vw] font-bold'>Coursera</h2> 
            <div className='flex gap-4'>
                <Button 
                    style={{marginTop: '16px'}}
                    onClick={() => {
                        navigate('/addcourse')
                    }}
                >
                    Add courses
                </Button>
                <Button 
                    style={{marginTop: '16px'}}
                    onClick={() => {
                        navigate('/courses')
                    }}
                >
                    Courses
                </Button>
                <Button 
                    variant="contained" 
                    margin="normal"
                    size="large"
                    style={{
                        marginTop: '16px',        
                    }}
                    onClick={() => {
                        localStorage.setItem("token", null)
                        setUserEmail(null)//this is to instantly refresh the page
                    }}
                >
                    Logout
                </Button>
            </div>
        </div>
    </> }

    return (
        <div>
        <Grid container spacing={4} style={{padding: 30, marginTop: 100}}>
            <Grid item xs={12} md={6} lg={6} style={{margin: 'auto'}} >
                <div style={{marginTop: 100}}>
                    <Typography 
                        variant="h4" 
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
                            navigate("/signup")
                        }}  
                    >
                        Signup
                    </Button>
                    <Button 
                        variant="contained" 
                        size="small"
                        color={"primary"}  
                        onClick={() => {
                           navigate("/login")
                        }}     
                    >
                        Login
                    </Button>
                </div>  
            </Grid>
            <Grid item xs={12} md={6} lg={6} style={{margin: 'auto'}} >
                <img src={"https://img.freepik.com/free-photo/science-dna-research-development-human_53876-121145.jpg?w=1060&t=st=1711182657~exp=1711183257~hmac=139d0cdd7e5a9f4dc39dfc8cd4798739731aadbf32f9ae882467841eda4809f8"} width={"100%"} />
            </Grid>
        </Grid>
        </div>
    )
}

export default LandingPage;