import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Appbar = () => {
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState(null)


    const init= async() => {
        const response = await axios.get("http://localhost:3000/admin/me", {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        if(response.data.username) {
            setUserEmail(response.data.username)
        }
    }

    useEffect(() => {
        init();
    }, [])
        

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
                        window.location ="/" //this is to instantly refresh the page
                    }}
                >
                    Logout
                </Button>
            </div>
        </div>
    </> }


    return (
    <>
        <div className='w-full flex items-center justify-between px-[2vw]'>
            <h2 className='text-[1.5vw] font-bold'>Courera</h2>
            <div className='flex gap-4'>
                <Button 
                    variant="contained" 
                    margin="normal"
                    size="large"
                    style={{
                        marginTop: '16px',        
                    }}
                    onClick={() => {
                        navigate('/signup')
                    }}
                >
                    Signup
                </Button>
                <Button 
                    variant="contained" 
                    margin="normal"
                    size="large"
                    style={{
                        marginTop: '16px',        
                    }}
                    onClick={() => {
                        navigate('/login')
                    }}
                >
                    Login
                </Button>
            </div>
        </div>
    </>
  )
}

export default Appbar
