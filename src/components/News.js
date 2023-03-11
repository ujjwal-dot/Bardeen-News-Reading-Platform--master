import React, { useEffect, useState } from 'react'
import axios from'axios';
    import { styled } from '@mui/material/styles';
    import Card from '@mui/material/Card';
    import CardHeader from '@mui/material/CardHeader';
    import CardMedia from '@mui/material/CardMedia';
    import CardContent from '@mui/material/CardContent';
    import CardActions from '@mui/material/CardActions';
    import Collapse from '@mui/material/Collapse';
    import Avatar from '@mui/material/Avatar';
    import IconButton from '@mui/material/IconButton';
    import Typography from '@mui/material/Typography';
    import { red } from '@mui/material/colors';
    import FavoriteIcon from '@mui/icons-material/Favorite';
    import ShareIcon from '@mui/icons-material/Share';
    import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
    import MoreVertIcon from '@mui/icons-material/MoreVert';
import { AppBar, Toolbar,Stack,Button, Grid } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
function News() {
    const [value,setValue]=useState([]);
    const [company,setCompany]=useState('tesla');
    useEffect(()=>{
    axios.get(`https://newsapi.org/v2/everything?q=${company}&from=2022-11-16&sortBy=publishedAt&apiKey=5550d1e0f0ba48348e84bc7e79813e18`)
         .then(res=>{
            console.log(res);
            setValue(res.data.articles);
           })
         .catch((err)=>{
             console.log(err);
             })
    },[company])

  return (
  <div style={{background:"#d9d9d9", display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around",margin:"2px"}}>{value.map(val=>{ return(
      <div key={val.index}>  
       <AppBar sx={{background:"#6249A3"}}>
       <Toolbar>
       <IconButton size="large" edge="start" >
       <AcUnitIcon/>
       <Typography variant="h5" component="div" sx={{flexGrow:1,color:'white'}}>BARDEEN</Typography> 
       </IconButton>
       <Grid  sx={{marginLeft:'auto'}}>
       <Button sx={{color:"white"}}>Home</Button>
        <Button onClick={()=>setCompany('tesla')} sx={{color:"white"}}>Tesla</Button>
        <Button onClick={()=>setCompany('Apple')} sx={{color:"white"}}>Apple</Button>
        </Grid>
       </Toolbar>
       </AppBar>

        <Card sx={{maxWidth:345, borderBottom:"8px solid black",borderRadius:"20px",marginTop:10 }}>
          <CardHeader/>
          <CardMedia
            component="img"
            height="194"
            image={val.urlToImage}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="h6" color="text.secondary">
             {val.title} 
            </Typography>
          </CardContent>
          <CardActions >
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
       </div> 
  )})}</div>
  )
}

export default News
