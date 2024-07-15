import { Card, CardContent, Typography } from "@mui/material";
import { useRecoilValue } from "recoil";

function CourseMini(props) {
    const title = useRecoilValue(courseTitle);
    const imageLink = useRecoilValue(courseImage);
    const description = useRecoilValue(courseDetails);
    return (
        <div>
            <Card sx={{ maxWidth: 520, borderRadius: '16px', }}>
                <div className='w-[16vw] h-[6vw]'>
                    <img src={course.imageLink} className='w-full h-full object-cover'/>
                </div>
                <CardContent>
                    <Typography variant="h5" color="text.primary" style={{fontSize: '1.2vw', fontWeight: 'bold'}} >
                    {title}
                    </Typography>
                    <Typography variant="body" style={{fontSize: '.8vw', fontWeight: 'normal'}} >
                    {description}
                    </Typography>
                    <p className="mt-2 text-[1vw] font-medium">Rs {price}</p>
                </CardContent>
                
            </Card>  
        </div>
    )
}

export default CourseMini