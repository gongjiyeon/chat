import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  createSvgIcon,
} from '@material-ui/core';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useNavigate } from 'react-router-dom/dist';
const ChatAppBar = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  const add = () => {
    alert('추가!');
  };
  const PlusIcon = createSvgIcon(
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M12 4.5v15m7.5-7.5h-15'
      />
    </svg>,
    'Plus',
  );
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              edge='start'
              color='inherit'
              aria-label='back'
              onClick={handleBack}
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography
              variant='h6'
              component='div'
              sx={{ flexGrow: 1 }}
              style={{ flexGrow: 1 }}
            >
              메세지
            </Typography>
            <IconButton
              color='inherit'
              edge='end'
              aria-label='back'
              onClick={add}
            >
              <PlusIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
export default ChatAppBar;
