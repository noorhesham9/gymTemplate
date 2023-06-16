import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import logo from "../assets/images/Logo-1.png";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
const Footer = () => {
  return (
    <Box mt={"80px"} bgcolor={"#fff3f4"}>
      <Stack gap={"40px"} alignItems={"center"} px={"40px"} pt={"24px"}>
        <img src={logo} alt="logo" width={"200px"} height={"40px"} />
        <Typography
          padding={"40px"}
          variant="h5"
          gap={"5px"}
          display={"flex"}
          justifyContent={"center"}>
          Made by noor eldeen H <FavoriteOutlinedIcon color={"error"} />
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
