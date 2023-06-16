import React from "react";
import { Box, Stack, Typography, Link } from "@mui/material";

const ExerciseVideo = ({ exerciseD, exerciseVideo }) => {
  const { contents } = exerciseVideo;
  // if (!contents.length) {
  //   return "loading...";
  // }
  const { name } = exerciseD;
  return (
    <Box
      sx={{
        marginTop: { lg: "200px", xs: "20px" },
      }}
      p={"20px"}>
      <Typography variant="h3" mb={"33px"}>
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise Video
      </Typography>
      <Stack
        justifyContent={"flex-start"}
        flexWrap={"wrap"}
        alignItems={"center"}
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "100px", xs: "0" },
        }}>
        {" "}
        {contents?.slice(0, 3).map((item, index) => (
          <Link
            sx={{
              width: { xl: " 28%", md: "34%", sm: "50%", xs: "80%" },
              textDecoration: "none",
            }}
            key={index}
            target="_blank"
            rel="noreferrer"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}>
            <img
              width={"360px"}
              style={{
                maxWidth: "100%",
              }}
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
            />
            <Box
              sx={{
                textDecoration: "none",
              }}>
              <Typography
                sx={{
                  textDecoration: "none",
                }}
                variant="h5"
                color={"#000"}>
                {item.video.title}
              </Typography>
              <Typography
                sx={{
                  textDecoration: "none",
                }}
                variant="h6"
                color={"#000"}>
                {item.video.channelName}
              </Typography>
            </Box>
          </Link>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideo;
