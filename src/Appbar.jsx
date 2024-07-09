import Button from '@mui/material/Button';
import { useEffect } from 'react';


const Appbar = () => {

    useEffect(() => {

        function callback2(data) {
            console.log(data)
        }

        function callbackFn(res) {
            res.json().then(callback2)
        }

        fetch("http://localhost:3000/admin/me", {
            method: "GET",
            headers: {
              "Authorization": "Bearer" + localStorage.getItem("token")
            }
        }).then(callbackFn)
    })


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
                        window.location ='/signup'
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
                        window.location ='/login'
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
