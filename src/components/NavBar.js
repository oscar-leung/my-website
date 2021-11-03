import * as React from "react";
import { Menu, MenuItem } from "@mui/material";
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
      <Button variant="outlined">Portfolio</Button>
      <Button variant="outlined">Resume</Button>
      <Button variant="outlined">Blog</Button>
      <Button
        id="contact-button"
        aria-controls="contact-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="outlined"
      >
        Contact
      </Button>

      <Menu
        id="contact-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ "aria-labelledby": "contact-button" }}
      >
        <MenuItem>
          <Button onClick={handleClose}>About Me</Button>
          Email Address: oscarleung1@gmail.com
        </MenuItem>
      </Menu>
    </div>
  );
}
