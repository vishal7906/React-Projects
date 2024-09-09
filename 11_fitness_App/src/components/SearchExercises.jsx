import React from 'react'
import { useEffect , useState } from 'react'
import { Box , Button , Stack , TextField , Typography } from '@mui/material'
import { exerciseOptions , fetchData} from '../utilities/fetchData'
import HorizontalScroolBar from './HorizontalScroolBar'
function SearchExercises({setexercises,bodyPart,setbodyPart}) {
  const [search, setsearch] = useState("")
  const [bodyParts, setbodyParts] = useState([])
  
  useEffect(()=>{
    const fetchExercisesData = async()=>{
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions)
      setbodyParts(['all',...bodyPartsData])
    }
    fetchExercisesData();
  },[])
  const handleSearch = async()=>{
    if(search){
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
      const searchedExercises = exerciseData.filter(
        (exercise)=> exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
        )
        setsearch('');
        setexercises(searchedExercises);
        console.log(searchedExercises);
    }
  }
  return (
    <Stack alignItems={'center'}
    mt="37px"
    justifyContent={'center'}
    p="20px"
    >
      <Typography fontWeight={700}
      mb="50px" textAlign="center"
      sx={{fontSize:{lg:'44px',xs:'30px'}}}>
        Awesome Exercises You <br />Should know
      </Typography>
      <Box position="relative" mb="70px">
      <TextField
        sx={{
          input:{
            fontWeight:"700",
            border:"none",
            borderRadius:"4px"
          },
          width:{lg:"1170px" , xs:"350px"}
          ,
          backgroundColor:"#fff",
          borderRadius:"40px"
        }}
          size='small'
          value={search}
          height="70px"
          placeholder="Search Exercises"
          type='text'
          onChange={(e)=>{setsearch(e.target.value.toLowerCase())}}
        />
        <Button className='search-btn'
        sx={{bgcolor:"#ff2625" , color:"#fff",width:{lg:"175px",xs:"80px"},
        fontSize:{lg:'20px',xs:'14px'},
        height:'38px',
        marginLeft:"5px",
        position:'absolute'}}
        onClick={handleSearch}
        >
          Search
        </Button>

      </Box >
      <Box sx={{position:'relative',width:'100%',p:"20px"}}>
          <HorizontalScroolBar data={bodyParts} bodyPart={bodyPart} setbodyPart={setbodyPart}/>
      </Box>
    </Stack>
  )
}

export default SearchExercises