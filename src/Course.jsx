

const Course = () => {
  return (
    <div>
        <Card sx={{ minWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={course.imageLink}
                alt="Paella dish"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" color="text.secondary">
                  {course.title}
                </Typography>
                <Typography variant="body">
                  {course.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Edit</Button>
                <Button size="small">Delete</Button>
              </CardActions>
            </Card>
    </div>
  )
}

export default Course
