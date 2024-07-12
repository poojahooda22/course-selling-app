import { Card, CardContent, Typography } from "@mui/material";

function CourseMini({course}) {
    return (
        <div>
            <Card sx={{ minWidth: 345 }}>
                <div className='w-[16vw] h-[6vw]'>
                    <img src={course.imageLink} className='w-full h-full object-cover'/>
                </div>
                <CardContent>
                    <Typography gutterBottom variant="h5" color="text.secondary">
                    {course.title}
                    </Typography>
                    <Typography variant="body">
                    {course.description}
                    </Typography>
                    <p className="mt-2 text-[1vw] font-medium">{course.price}</p>
                </CardContent>
                
            </Card>  
        </div>
    )
}

export default CourseMini