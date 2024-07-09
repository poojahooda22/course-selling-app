
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import a

function AddCourse() {

  return (
    <div className='flex items-center justify-center'>
        <Card 
            style={{
                padding: '18px', 
                width: 400, 
                display:"flex", 
                flexDirection: "column", 
                justifyContent: "center", 
                alignItems: "center" 
            }}
        >
            <TextField 
                onChange={() => {}}
                style={{width: '360px'}} 
                label="Title" 
                variant="outlined" 
                size="small" 
                margin="normal" 
            />
            <TextField  
                onChange={() => {}}
                style={{width: '360px'}} 
                label="description" 
                variant="outlined" 
                size="small" 
                margin="normal" 
            />
            <TextField  
                onChange={() => {}}
                style={{width: '360px'}} 
                label="price" 
                variant="outlined" 
                size="small" 
                margin="normal" 
            />
            <TextField  
                onChange={() => {}}
                style={{width: '360px'}} 
                label="Image link" 
                variant="outlined"
                size="small"
                margin="normal"  
            />           
            <Button 
                variant="contained" 
                margin="normal"
                size="large"
                style={{
                    marginTop: '16px',        
                }}
                onClick={async () => {}}
            >
                Add Course
            </Button>
        </Card>
    </div>
  );
}

export default AddCourse;
