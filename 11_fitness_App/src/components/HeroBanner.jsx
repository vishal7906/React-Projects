import React from 'react'
import { Box , Typography , Button} from '@mui/material'
import HeroBannerImage from "../assets/images/banner.png"
function HeroBanner() {
  return (
    <Box sx={{
      mt:{lg:"212px",xs:"70px"},
      ml:{sm:"50px"}
      
    }} className="outerBox">

      <Typography color="#FF2625"
      fontWeight="600"
      fontSize="25px">
      Fitness Club
      </Typography>

      <Typography fontWeight={700}
      marginTop={3}
      sx={{fontSize:{lg:'44px',xs:'40px'}
      }}>
        Sweat , Smile <br /> and Repeat
      </Typography>

      <Typography fontSize="22px"lineHeight="35px" mb={3} mt={2
      } >
        Check out the most effective Exercises
      </Typography>
      <Button variant='contained' color='error' href='#exercises'
      sx={{bgcolor:"#ff2625" , padding:"10px"}}>
        Explore Exercises
      </Button>
      <Typography
      fontWeight={700}
      color="#ff2625"
      fontSize={100}
      textAlign={'center'}

      sx={{
        opacity:0.1,
        display:{lg:"block"}
      }}>
          EXERCISE
      </Typography>
      <img src={HeroBannerImage} alt="banner" className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner