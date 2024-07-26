
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { userState } from './store/atoms/user';

function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password,  setPassword] = useState("");
    const setUser = useSetRecoilState(userState);

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
            <Typography variant="h5" component="div">
                Welcome to Coursera 
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
                    padding: '16px',   width: 400, 
                    display:"flex", flexDirection: "column", 
                    justifyContent: "center",  alignItems: "center" 
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
                        label="Email" 
                        variant="outlined" 
                        size="small" 
                        margin="normal" 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField 
                        label="Password" 
                        type='password' 
                        variant="outlined" 
                        size="small" 
                        margin="normal"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <Button 
                    variant="contained" 
                    margin="normal"
                    size="large"
                    style={{
                        marginTop: '16px',        
                    }}
                    onClick={async () => {
                        // this is one way to write the fetch function
                        // function callback2(data) {
                        //    localStorage.setItem("token", data.token);
                        //    window.location = "/"
                        // }
                        // function callback(response) {
                        //     response.json().then(callback2)
                        // }
                        // fetch('http://localhost:3000/admin/signup', {
                        //     method: "POST",
                        //     body: JSON.stringify({username: email, password}),
                        //     headers: {
                        //         "Content-Type": "application/json"
                        //     },
                        // }).

                        // this is another way to write the fetch function with axios external library

                        const res = await axios.post('http://localhost:3000/admin/signup', {
                            username: email,
                            password: password
                        })
                        let data = res.data;
                        localStorage.setItem("token", data.token);
                        setUser({userEmail: email, isLoading: false})
                        navigate('/courses')
                    }}

                >
                    Signup
                </Button>
            </Card>
        </div>
    </div>
  );
}

export default Signup
