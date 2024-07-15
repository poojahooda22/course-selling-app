
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { userState } from './store/atoms/user';

function Signin() {
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="outlined-basic" 
                        label="Email" 
                        variant="outlined" 
                        size="small" 
                        margin="normal" 
                    />
                    <TextField 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                        // function callback2(data) {
                        //     console.log(data);
                        //     localStorage.setItem("token", data.token)
                        // }
                        // function callback(res) {
                        //     res.json().then(callback2);
                        // }
                        // fetch('http://localhost:3000/user/signup', {
                        //     method: 'POST',
                        //     headers: {
                        //         "Content-Type": "application/json",
                        //         // "Authorization": "Bearer " + localStorage.ge
                        //         username: email,
                        //         password: password 
                        //     }
                        // }).then(callback)

                        const res = axios.post('http://localhost:3000/user/signup', {
                            username: email,
                            password: password 
                        })
                        let data = res.data;
                        localStorage.setItem("token", data.token);
                        setUser({userEmail: email, isLoading: false})
                        navigate('/courses')
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
