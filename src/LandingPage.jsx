import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

function LandingPage() {
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
                            window.location = "/signup"
                        }}  
                    >
                        Signup
                    </Button>
                    <Button 
                        variant="contained" 
                        size="small"
                        color={"primary"}  
                        onClick={() => {
                            window.location = "/login"
                        }}     
                    >
                        Login
                    </Button>
                </div>  
                {/* <div>
                    <img
                        style={{
                        width: "450px",
                        height: "450px",
                        objectFit: "contain"}}
                        src="https://img.freepik.com/free-photo/science-dna-research-development-human_53876-121145.jpg?w=1060&t=st=1711182657~exp=1711183257~hmac=139d0cdd7e5a9f4dc39dfc8cd4798739731aadbf32f9ae882467841eda4809f8"
                    />
                </div>  */}
            </Grid>
            <Grid item xs={12} md={6} lg={6} style={{margin: 'auto'}} >
                <img src={"https://img.freepik.com/free-photo/science-dna-research-development-human_53876-121145.jpg?w=1060&t=st=1711182657~exp=1711183257~hmac=139d0cdd7e5a9f4dc39dfc8cd4798739731aadbf32f9ae882467841eda4809f8"} width={"100%"} />
            </Grid>
        </Grid>
        </div>
    )
}

export default LandingPage;