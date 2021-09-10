import React from "react";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.loginUser = this.loginUser.bind(this);
  }

    loginUser(user) {
        var axios = require('axios');
        var data = JSON.stringify({
        username: this.state.username,
        password: this.state.password,
    });

    var config = {
        method: 'post',
        url: 'http://localhost:3000/auth/login',
        headers: { 
        'Content-Type': 'application/json'
        },
        data : data
    };

    axios(config)
    .then(function (response) {
      const token = JSON.stringify(response.data.access_token);
      const userid = JSON.stringify(response.data.userId);
      const username = JSON.stringify(response.data.username)
      console.log(JSON.stringify(response.data));
      localStorage.setItem("token", token);
      localStorage.setItem("User_id", userid);
      localStorage.setItem("username", username);
      window.location = '/home';
    })
    .catch(function (error) {
    console.log(error);
    });
    }

  
  render() {

    const paperStyle={padding :20, height: '60vh', width: 280, margin: "70px auto"}
    const avatarStyle={backgroundColor: 'pink'}
    const buttonStyle={margin:'30px 0', backgroundColor: 'pink'}
    const textFieldStyle={margin:'8px 0'}

    return (
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
            <Avatar style={avatarStyle}> <LockOutlinedIcon/> </Avatar>
            <h2>Sign In</h2>
            <h2>to my-Dashboard</h2>
          </Grid>
          <TextField 
            label='Username' 
            placeholder='Enter username' 
            style={textFieldStyle}
            fullWidth
            value={this.state.username}
            onChange={(e) => this.setState({ username: e.target.value })}
          />
          <TextField 
            label='Password' 
            placeholder='Enter password' 
            type='password' 
            style={textFieldStyle}
            fullWidth
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <Button 
            type='submit' 
            color='primary' 
            variant='contained' 
            fullWidth
            style={buttonStyle}
            onClick={this.loginUser}
            >
              Sign In
          </Button>
          <Typography> You don't have an account ? 
            <Link href="/register">
              Sign up !
            </Link>
          </Typography>
        </Paper>
      </Grid>
    );
  }
}
