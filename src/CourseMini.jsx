import { Card, CardContent, Typography } from "@mui/material";

function CourseMini({course}) {
    return (
        <div>
            <Card sx={{ maxWidth: 520, borderRadius: '16px', }}>
                <div className='w-[16vw] h-[6vw]'>
                    <img src={course.imageLink} className='w-full h-full object-cover'/>
                </div>
                <CardContent>
                    <Typography variant="h5" color="text.primary" style={{fontSize: '1.2vw', fontWeight: 'bold'}} >
                    {course.title}
                    </Typography>
                    <Typography variant="body" style={{fontSize: '.8vw', fontWeight: 'normal'}} >
                    {course.description}
                    </Typography>
                    <p className="mt-2 text-[1vw] font-medium">Rs {course.price}</p>
                </CardContent>
                
            </Card>  
        </div>
    )
}

export default CourseMini