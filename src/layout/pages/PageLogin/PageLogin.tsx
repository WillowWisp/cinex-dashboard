import React, { useEffect, useState, FunctionComponent } from 'react';

// Misc
import * as authAPI from '../../../api/authAPI';
import { useAuth } from '../../../context/auth';

// Interface

// Component
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';

// Custom Component


const PageLogin: FunctionComponent = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  const { setAuthTokens } = useAuth();

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

  return (
    <div>
      <input type="text" placeholder="username" value={username} onChange={event => {setUsername(event.target.value)}}/>
      <input type="text" placeholder="password" value={password} onChange={event => {setPassword(event.target.value)}}/>
      <button onClick={() => {postLogin()}}>Login</button>
    </div>
  )

}

export default PageLogin;