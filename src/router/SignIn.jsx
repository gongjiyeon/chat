import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom/dist';

function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href='#'>
        DayOne
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function SignIn() {
  const defaultTheme = createTheme();

  //핸드폰번호 상태 정의
  const [phoneNumber, setPhoneNumber] = useState('');

  //핸드폰번호가 바뀌면 함수 실행
  const handleChange = (event) => {
    const { value } = event.target;
    //핸드폰번호 양식대로 변환해주는 함수
    const formattedNumber = formatPhoneNumber(value);
    //useState로 phoneNumber 상태 변경
    setPhoneNumber(formattedNumber);
  };
  //핸드폰번호 양식대로 변환해주는 함수
  const formatPhoneNumber = (value) => {
    if (!value) return value;

    // 숫자만 입력받도록 정규식으로 처리
    const phoneNumber = value.replace(/[^\d]/g, '');

    // 핸드폰 번호 형식에 맞게 포맷팅
    // 예: "01012345678" -> "010-1234-5678"
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
    }
    return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(
      3,
      7,
    )}-${phoneNumber.slice(7, 11)}`;
  };
  // 서브밋
  const handleSubmit = (event) => {
    // 기본 동작 중단: event.preventDefault()는 폼의 기본 제출 동작을 중단합니다.
    // 이는 페이지가 새로고침되는 것을 방지하고,
    // 대신 JavaScript를 사용하여 데이터를 처리할 수 있게 합니다.
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    data.get('phone').length === 13
      ? navigate('/')
      : alert('휴대폰 번호를 정확히 입력해 주세요.');
  };
  // 네비게이션 정의
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar
            sx={{ m: 1, bgcolor: 'secondary.main' }}
            style={{ background: '#1976D2' }}
          >
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Login
          </Typography>
          <Box
            component='form'
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <p
              style={{
                color: '#666',
                fontSize: '16px',
                textAlign: 'center',
                marginBottom: '16px',
              }}
            >
              사용을 위한 휴대폰 번호를 입력 하세요.
            </p>
            <TextField
              margin='normal'
              type='tel'
              value={phoneNumber}
              onChange={handleChange}
              placeholder='010-1234-5678'
              required
              fullWidth
              id='phone'
              label='휴대폰번호'
              name='phone'
              autoComplete='phone'
              autoFocus
            />

            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              로그인
            </Button>

            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
export default SignIn;
