import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

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
                <Typography variant="h6" component="div">
                    Coursera
                </Typography>
                <div 
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12
                    }}
                >
                    <div>
                        <Avatar src="/broken-image.jpg" />
                    </div>
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
            <Typography variant="h6" component="div">
                Coursera
            </Typography>
            <div style={{display: "flex"}}>
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
