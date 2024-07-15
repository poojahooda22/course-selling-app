import { Card, CardContent, Typography } from "@mui/material";
import { useRecoilValue } from "recoil";
import { courseImage, courseTitle } from "./store/selectors/course";

function CourseMini(props) {
    const title = useRecoilValue(courseTitle);
    const imageLink = useRecoilValue(courseImage);
    
    return (
        <div>
            <Card sx={{ maxWidth: 520, borderRadius: '16px', }}>
                <div className='w-[16vw] h-[6vw]'>
                    <img src={imageLink} className='w-full h-full object-cover'/>
                </div>
                <CardContent>
                    <Typography variant="h5" color="text.primary" style={{fontSize: '1.2vw', fontWeight: 'bold'}} >
                    {title}
                    </Typography>
               
                </CardContent>
                
            </Card>  
        </div>
    )
}

export default CourseMini