
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

function Signin() {
    const [email, setEmail] = useState("");
    const [password,  setPassword] = useState("");
  return (
    <div>
        <div 
            style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: '42px',
                marginBottom: '32px',
            }}
        >
            <Typography 
                variant = "h5" 
                component = "div"
            >
                Welcome back to Coursera
            </Typography>
        </div>
        <div 
            style={{
                display: "flex",
                justifyContent: "center"
            }}
        >
            <Card 
                style={{
                    padding: '16px', 
                    width: 400, 
                    display:"flex", 
                    flexDirection: "column", 
                    justifyContent: "center", 
                    alignItems: "center"
                }}
            >
                <div 
                    style={{
                        width: '300px',
                        display:'flex',
                        flexDirection: 'column',          
                    }}
                >
                    <TextField 
                        id="outlined-basic" 
                        label="Email" 
                        variant="outlined" 
                        size="small" 
                        margin="normal" 
                    />
                    <TextField 
                        id="outlined-basic" 
                        label="Password" 
                        type='password' 
                        variant="outlined" 
                        size="small" 
                        margin="normal"
                    />
                </div>
                <Button 
                    variant="contained" 
                    margin="normal"
                    size="large"
                    style={{
                        marginTop: '16px',        
                    }}
                    onClick={() => {
                        function callback2(data) {
                            console.log(data);
                            localStorage.setItem("token", data.token)
                        }
                        function callback(res) {
                            res.json().then(callback2);
                        }
                        fetch('http://localhost:3000/user/signup', {
                            method: 'POST',
                            headers: {
                                "Content-Type": "application/json",
                                // "Authorization": "Bearer " + localStorage.getItem("
                                username: email,
                                password: password
                            }
                        }).then(callback)
                    }}
                >
                    Login
                </Button>
            </Card>
        </div>
    </div>
  );
}

export default Signin
