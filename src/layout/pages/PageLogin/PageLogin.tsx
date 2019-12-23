import React, { useEffect, useState, FunctionComponent } from 'react';

// Misc
import * as authAPI from '../../../api/authAPI';
import { useAuth, AuthContext } from '../../../context/auth';

// Interface

// Component
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// Custom Component

const PageLogin: FunctionComponent = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  const { setAuthTokens } = useAuth();

  const classes = useStyles();

  function postLogin() {
    // axios.post("https://www.somePlace.com/auth/login", {
    //   userName,
    //   password
    // }).then(result => {
    //   if (result.status === 200) {
    //     setAuthTokens(result.data);
    //     setLoggedIn(true);
    //   } else {
    //     setIsError(true);
    //   }
    // }).catch(e => {
    //   setIsError(true);
    // });

    authAPI.login(username, password)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  // return (
  //   <Card>
  //     <Logo src={logoImg} />
  //     <Form>
  //       <Input
  //         type="username"
  //         value={userName}
  //         onChange={e => {
  //           setUserName(e.target.value);
  //         }}
  //         placeholder="email"
  //       />
  //       <Input
  //         type="password"
  //         value={password}
  //         onChange={e => {
  //           setPassword(e.target.value);
  //         }}
  //         placeholder="password"
  //       />
  //       <Button onClick={postLogin}>Sign In</Button>
  //     </Form>
  //     <Link to="/signup">Don't have an account?</Link>
  //       { isError &&<Error>The username or password provided were incorrect!</Error> }
  //   </Card>
  // );

  // return (
  //   <div>
  //     <input type="text" placeholder="username" value={username} onChange={event => {setUsername(event.target.value)}}/>
  //     <input type="text" placeholder="password" value={password} onChange={event => {setPassword(event.target.value)}}/>
  //     <button onClick={() => {postLogin()}}>Login</button>
  //   </div>
  // )

  return (
    <Card className={classes.card}>
      <Container component="main" maxWidth="xs">
          
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                value={username}
                onChange={event => {setUsername(event.target.value)}}
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={event => {setPassword(event.target.value)}}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={()=>{console.log(username)}}
              >
                Sign In
              </Button>
              <Grid container>
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
              </Grid>
            </form>
          </div>
      </Container>
    </Card>
  );

}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  card: {
    margin: 'auto',
    width: 'fit-content'
  }
}));

export default PageLogin;