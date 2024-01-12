import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  createSvgIcon,
} from "@material-ui/core";

const ChatAppBar = () => {
  const PlusIcon = createSvgIcon(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>,
    "Plus"
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            메세지
          </Typography>
          <Button color="inherit">
            <PlusIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default ChatAppBar;
