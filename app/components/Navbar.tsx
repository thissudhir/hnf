import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  return (
    <AppBar elevation={0} style={{ backgroundColor: "#F0EFE1" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: "#000" }}
        >
          Humanity Network Foundation
        </Typography>
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
