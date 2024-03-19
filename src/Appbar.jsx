import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
//  

function Appbar() {
    const [userEmail, setUserEmail] = useState(null);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        function callback2(data) {
            if(data.username) {
                setUserEmail(data.username);
                setLoading(false);
            }
        }
        function callback(res) {
            res.json().then(callback2);
        }
        fetch('http://localhost:3000/admin/me', { 
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token"),
            }
        }).then(callback)
    },[]); 

    if (isLoading) {
        return <div></div>;
    }
    
    if(userEmail) {
        return (
            <div 
                style={{
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "space-between", 
                    padding: "16px", 
                }}
            >
                <Typography 
                    variant="h6" 
                    component="div"
                >
                    Coursera
                </Typography>
                <div 
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 16
                    }}
                >
                    <Typography 
                        variant="body" 
                        component="div"
                        style={{color: '#1976d2', cursor: "pointer"}}
                        onClick={() => {
                            window.location = "/courses"
                        }}
                    >
                        Courses
                    </Typography>
                    <Typography 
                        variant="body" 
                        component="div"
                        style={{color: '#1976d2', cursor: "pointer"}}
                        onClick={() => {
                            window.location = "/addcourse"
                        }}
                        
                    >
                        Add Course
                    </Typography>
                    {/* <*>
                        <Avatar 
                            src="/broken-image.jp  
                    */}

                    <Button 
                        variant = "contained" 
                        size = "small"
                        style = {{marginRight: "16px"}}
                        color = {"primary"}  
                        onClick = {() => {
                            localStorage.setItem("token", null);
                            window.location = "/signup";
                        }}  
                    >
                        Logout
                    </Button>
                </div>
            </div>
        )
    }  
    return (
        <div 
            style={{
                display: "flex",
                alignItems: "center", 
                justifyContent: "space-between", 
                padding: "16px", 
            }}
        >
            <div style={{display: "flex", gap: 16}}>
                <Typography 
                    variant="h6" 
                    component="div"
                >
                    Coursera
                </Typography>
                <Button 
                        variant="contained" 
                        size="small"
                        style={{ marginRight: "16px"}} 
                        onClick={() => {
                            window.location = "/login"
                        }}     
                >
                    User Login
                </Button>
            </div>
            <div 
                style={{
                    display: "flex",
                    
                }}
            >
                
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
  );
}

export default Appbar;
