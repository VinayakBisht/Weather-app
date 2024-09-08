import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
    let initUrl = "https://images.unsplash.com/photo-1520733051773-8297e225e80d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNsb3Vkc3xlbnwwfHwwfHx8MA%3D%3D";
    
    let hotUrl = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let coldUrl = "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let rainUrl = "https://images.unsplash.com/photo-1438449805896-28a666819a20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    return (
      <div className='InfoBox'>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} 
           image={ info.weather.includes("rain") ? rainUrl : info.temp > 15 ? hotUrl : coldUrl} title="green iguana"/>
          <CardContent> 
               <Typography gutterBottom variant="h5" component="div" >
                  {info.city} <span>{info.weather.includes("rain") ? <ThunderstormOutlinedIcon fontSize='small'/> : info.temp > 15 ? <WbSunnyIcon  fontSize='small'/> : <AcUnitIcon  fontSize='small'/>}</span>
               </Typography>
               <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                  <p>Temperature : {info.temp}&deg;C</p>
                  <p>Humidity : {info.humidity}</p>
                  <p>Min Temp : {info.tempMin}&deg;C</p>
                  <p>Max Temp : {info.tempMax}&deg;C</p>
                  <p>The weather is <i>{info.weather}</i> & feels like {info.feelsLike}&deg;C</p>
               </Typography>
           </CardContent>
        </Card>
      </div>
    )
}