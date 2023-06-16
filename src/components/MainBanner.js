import React from "react";
import { Typography, Stack, Box, Button } from "@mui/material";
import MainBannerImage from "../assets/images/banner.png";

const MainBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
        position: "relative",
        Padding: "20px",
      }}>
      {" "}
      <Typography color={"#FF2625"} fontWeight={"600"} fontSize={"26px"}>
        Fitness Club
      </Typography>
      <Typography
        fontWeight={"700"}
        sx={{
          fontSize: {
            lg: "44px",
            xs: "40px",
          },
        }}
        mb={"23px"}
        mt={"30px"}>
        Sweet , Smile
        <br /> And Repeat
      </Typography>
      <Typography fontSize={"22px"} lineHeight={"35px"} mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button
        href="#exercises"
        sx={{
          fontSize: { lg: "15px", xs: "13px" },
          "&:hover": {
            color: "#FF2625",
          },
          transition: "0.2s",
          backgroundColor: "#FF2625",
          fontWeight: "500",
          padding: "10px",
          color: "#fff",
          border: "1px solid #FF2625",
        }}>
        Explore Exercises
      </Button>
      <Typography
        fontWeight={"600"}
        color={"#ff2625"}
        sx={{
          opacity: "0.1",
          display: {
            lg: "block",
            xs: "none",
          },
          fontSize: "200px",
        }}>
        Exercises
      </Typography>
      <img
        style={{
          borderBottomLeftRadius: "100px",
          borderBottomRightRadius: "5px",
        }}
        className="hero-banner-img"
        src={MainBannerImage}
        alt="panner_image"></img>
    </Box>
  );
};

export default MainBanner;
