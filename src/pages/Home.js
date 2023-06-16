import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import MainBanner from "../components/MainBanner";
import SearchBar from "../components/SearchBar";
import Exercises from "../components/Exercises";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodypartt, setBodypartt] = useState("");

  return (
    <Box>
      <MainBanner />
      <SearchBar
        exercises={exercises}
        setExercises={setExercises}
        bodypartt={bodypartt}
        setBodypartt={setBodypartt}
      />
      <Exercises
        setExercises={setExercises}
        bodypartt={bodypartt}
        exercises={exercises}
      />
    </Box>
  );
};

export default Home;
