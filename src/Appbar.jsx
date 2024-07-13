import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Appbar = () => {
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState(null)

    useEffect(() => {
        function callback2(data) {
            if(data.username) {
                setUserEmail(data.username)
            }
        }
        function callback1(res) {
            res.json().then(callback2)
        }
        fetch("http://localhost:3000/admin/me", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }).then(callback1)
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
