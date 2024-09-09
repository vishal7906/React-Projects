import React from 'react'
import { Stack , Typography } from '@mui/material'

import Icon from '../assets/icons/gym.png'
function BodyPart({item,setbodyPart,bodyPart}) {
  return (
    <Stack
    type='button'
    alignItems={'center'}
    justifyContent={'center'}
    className='bodyPart-card'
    sx={{
        borderTop: bodyPart === item ? '4px solid #ff2625' : "",
        backgroundColor:"#fff",
        borderBottomLeftRadius:'20px',
        width:"200px",
        height:"280px",
        cursor:"pointer",
        gap:"47px"
    }}
    onClick={() =>{
        setbodyPart(item)
        window.scrollTo({top:1600 , left:100,behavior:"smooth"})
    }}
    >
        <img src={Icon} alt="dumbell" style={{width:'40px',height:'40px'}} />
        <Typography fontSize='24px' fontWeight="bold" color="#3A1212" textTransform="capitalize">{item}</Typography>
    </Stack>
  )
}

export default BodyPart