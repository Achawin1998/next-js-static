 
import React from 'react'
import { Typography , Card,CardContent ,CardMedia} from "@mui/material";



export async function generateStaticParams() {
    const pathId = await fetch('https://www.melivecode.com/api/attractions/static_paths')
    const data = await pathId.json()    
    return data
  }

  export async function generateMetadata({ params }) {
    const res = await fetch(`https://www.melivecode.com/api/attractions/${params.id}`)
    const data = await res.json()
    return {
      title: data.attraction.name,
      openGraph: {
        title: data.attraction.name,
        description: data.attraction.detail,
        siteName: 'Travel App',
        // images: [
        //   {
        //     url: 'https://nextjs.org/og.png', // Must be an absolute URL
        //     width: 800,
        //     height: 600,
        //   },
        // ],
      },
    }
  }
   
  async function getPost(params) {
    const res = await fetch(`https://www.melivecode.com/api/attractions/${params.id}`)
    const data = await res.json()
    return data
}


async function page({params}) {
    const data = await getPost(params);
  return (
    <Card>
            <CardMedia
              sx={{ height: 300 }}
              image={data.attraction.coverimage}
              title={data.attraction.name}
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.attraction.name}
            </Typography>
          <Typography variant="body2" color="text.secondary">
              {data.attraction.detail}
          </Typography>
          </CardContent>

        </Card>
  )
}

export default page 
