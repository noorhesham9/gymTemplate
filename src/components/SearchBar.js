import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseOption, fetchData } from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";
const SearchBar = (props) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const FetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOption
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    FetchExercisesData();
  }, []);
  const handleSearch = async () => {
    const exerciseData = await fetchData(
      "https://exercisedb.p.rapidapi.com/exercises",
      exerciseOption
    );
    if (search && exerciseData) {
      const searchedExercise = exerciseData.filter(
        (exercise) =>
          exercise.name.includes(search) ||
          exercise.target.includes(search) ||
          exercise.equipment.includes(search) ||
          exercise.bodyPart.includes(search)
      );

      setSearch("");
      props.setExercises(searchedExercise);
    }
  };

  return (
    <Stack
      alignItems={"center"}
      mt={"37px"}
      justifyContent={"center"}
      p={"20px"}>
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        mb={"50px"}
        textAlign={"center"}>
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position={"relative"} mb={"72px"}>
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          onClick={handleSearch}
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}>
          Search
        </Button>
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          p: "20px",
        }}>
        <HorizontalScrollBar
          bodypartt={props.bodypartt}
          setBodypartt={props.setBodypartt}
          data={bodyParts}
          isBodyPart
        />
      </Box>
    </Stack>
  );
};

export default SearchBar;
