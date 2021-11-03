import * as React from "react";
import { Menu } from "@mui/material";
import { Button } from "@mui/material";

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button variant="outlined">Home</Button>
      <Button variant="outlined">About Me</Button>
      <Button variant="outlined">Portfolio</Button>
      <Button variant="outlined">Resume</Button>
      <Button variant="outlined">Blog</Button>
      <Button variant="outlined">Contact</Button>
    </div>
  );
}
