import { useState} from 'react'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function UpdatedCard(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const course = props.course;
   

  return (
    <div
        style={{
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center'
        }}
    >
        <Card 
            style={{
                padding: '18px', width: 400, display:"flex", 
                flexDirection: "column", justifyContent: "center", 
                alignItems: "center" 
            }}
        >
            <TextField 
                onChange={(e) => {
                    setTitle(e.target.value)
                }}
                style={{width: '360px'}} 
                label="Title" 
                variant="outlined" 
                size="small" 
                margin="normal" 
            />
            <TextField  
                onChange={(e) => {
                    setDescription(e.target.value)
                }}
                style={{width: '360px'}} 
                label="description" 
                variant="outlined" 
                size="small" 
                margin="normal" 
            />
            <TextField  
                onChange={(e) => {
                    setPrice(e.target.value)
                }}
                style={{width: '360px'}} 
                label="price" 
                variant="outlined" 
                size="small" 
                margin="normal" 
            />
            <TextField  
                onChange={(e) => {
                    setImage(e.target.value)
                }}
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
                onClick={() => {
                    function callback2(data) {
                        alert("course updated!");
                    }
                    function callback(res) {
                        res.json().then(callback2);
                    }
                    fetch('http://localhost:3000/admin/courses/' + Course.id, {
                        method: 'PUT',
                        body: JSON.stringify({
                            title: title,
                            description: description,
                            imageLink: image,
                            price: price,
                            published: true
                        }),
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "Bearer " + localStorage.getItem("token")
                        }
                    }).then(callback)
                }}
            >
                Update Course
            </Button>
        </Card>
    </div>
  );
}


export default UpdatedCard;