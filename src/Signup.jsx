
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
// import { useState } from 'react';
// import axios from 'axios';
// import { BASE_URL } from '../src/config';

function Signup() {
    // const [email, setEmail] = useState("");
    // const [password,  setPassword] = useState("");

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

                    />
                    <TextField 
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
