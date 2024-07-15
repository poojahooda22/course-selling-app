import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userState } from './store/atoms/user';
import { isUserLoading } from './store/selectors/isUserLoading';
import { userEmailState } from "./store/selectors/userEmail"


const Appbar = () => {
    const navigate = useNavigate();
    const userLoading = useRecoilValue(isUserLoading);
    const userEmail = useRecoilValue(userEmailState);
    const setUser = useSetRecoilState(userState);

    if(userLoading) {
        return <></>
    }
    
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
                        setUser({
                            isLoading: false,
                            userEmail: null
                        })//
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
