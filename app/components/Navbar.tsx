import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  return (
    <AppBar elevation={0} style={{ backgroundColor: "#F0EFE1" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" component="div" sx={{ color: "#000" }}>
          Humanity Network Foundation
        </Typography>
        <Box sx={{ display: "flex", gap: "10px", color: "#000" }}>
          <Box>Home</Box>
          <Box>Welcome</Box>
          <Box>Event Details</Box>
          <Box>About</Box>
          <Box>Projects</Box>
          <Box>Instagram</Box>
        </Box>
        <Button variant="outlined">
          <Link href="/" style={{ textDecoration: "none", color: "#000" }}>
            Donate
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
