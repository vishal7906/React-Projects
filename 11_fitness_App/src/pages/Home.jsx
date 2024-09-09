import React , { useState } from "react";
import { Box } from "@mui/material";

import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
function Home(){
    const [bodyPart, setBodyPart] = useState('all')
    const [exercises, setexercises] = useState([])
    return(
        <Box>
           <HeroBanner />
           <SearchExercises setexercises={setexercises}bodyPart={bodyPart} setbodyPart={setBodyPart}/>
           <Exercises setexercises={setexercises}bodyPart={bodyPart} setbodyPart={setBodyPart}/>
        </Box>
    )
}
export default Home