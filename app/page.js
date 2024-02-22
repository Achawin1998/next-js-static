'use client'
import { Button , Grid , Typography , Card , CardActions ,CardContent ,CardMedia   } from "@mui/material";
import Link from "next/link";
 
 
async function getData() {
  const res = await fetch('https://www.melivecode.com/api/attractions')
 
  if (!res.ok) {

    throw new Error('Failed to fetch data')
  }

  return res.json()
}

 
 

export default async function Home() {
  const data = await getData()
 
  return (
    <div>
         <Typography variant="h2" >
            Attractions
         </Typography>
       <Grid container spacing={2} >
         {data.map((item)=>{
          return <Grid item xs={12} sm={6} md={4} lg={2} key={item.id}>
         <Card>
            <CardMedia
              sx={{ height: 140 }}
              image={item.coverimage}
              title={item.name}
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
          <Typography variant="body2" color="text.secondary">
              {item.detail}
          </Typography>
          </CardContent>
          <CardActions>
            <Link href={'/attractions/'+ item.id}>
            <Button size="small">Learn More</Button>
            </Link>
          </CardActions>
        </Card>
       </Grid>
         })}
    </Grid>
    </div>

     
  );
}
