import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import {useRecoilValue} from "recoil";
import { userEmailState } from "./store/selectors/userEmail"
import {isUserLoading} from "./store/selectors/isUserLoading.js";

function LandingPage() {
    const navigate = useNavigate();

    const userEmail = useRecoilValue(userEmailState);
    const userLoading = useRecoilValue(isUserLoading);

    return <div>
        <Grid container style={{padding: "5vw"}}>
            <Grid item xs={12} md={6} lg={6}>
                <div style={{marginTop: 100}}>
                    <Typography variant={"h2"}>
                        Coursera Admin
                    </Typography>
                    <Typography variant={"h5"}>
                        A place to learn, earn and grow
                    </Typography>
                    {!userLoading && !userEmail && <div style={{display: "flex", marginTop: 20}}>
                        <div style={{marginRight: 10}}>
                            <Button
                                size={"large"}
                                variant={"contained"}
                                onClick={() => {
                                    navigate("/signup")
                                }}
                            >Signup</Button>
                        </div>
                        <div>
                            <Button
                                size={"large"}
                                variant={"contained"}
                                onClick={() => {
                                    navigate("/signin")
                                }}
                            >Signin</Button>
                        </div>
                    </div>}
                </div>
                <div>
                </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6}  style={{marginTop: 20}}>
                <img src={"https://img.freepik.com/free-photo/science-dna-research-development-human_53876-121145.jpg?w=1060&t=st=1711182657~exp=1711183257~hmac=139d0cdd7e5a9f4dc39dfc8cd4798739731aadbf32f9ae882467841eda4809f8"} width={"100%"} />
            </Grid>
        </Grid>
    </div>
}

export default LandingPage;
