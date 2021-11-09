import * as React from "react";
import { Menu, MenuItem } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "@mui/material";

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
    <>
      <nav>
        <Link to="/portfolio">
          <Button variant="outlined">Home</Button>
        </Link>
        <Button variant="outlined">Portfolio</Button>
        <Button variant="outlined">Resume</Button>
        <a href="https://mui.com/getting-started/templates/blog/">
          <Button variant="outlined">Blog</Button>
        </a>
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
      </nav>

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
    </>
  );
}
