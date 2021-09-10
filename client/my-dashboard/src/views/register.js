import React from "react";
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined'

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
    this.RegisterUser = this.RegisterUser.bind(this);
  }

  RegisterUser(user) {
var axios = require('axios');
var data = JSON.stringify({
  username: this.state.username,
  email: this.state.email,
  password: this.state.password,
});

var config = {
  method: 'post',
  url: 'http://localhost:3000/users/',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  window.location = '/my-dashboard';
})
.catch(function (error) {
  console.log(error);
});
  }

  render() {

    const paperStyle={padding :20, height: '70vh', width: 280, margin: "70px auto"}
    const avatarStyle={backgroundColor: 'pink'}
    const buttonStyle={margin:'30px 0', backgroundColor: 'pink'}
    const textFieldStyle={margin:'8px 0'}

    return (
      <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}> <AddCircleOutlineOutlinedIcon/> </Avatar>
          <h2>Sign up</h2>
          <h2>to my-Dashboard</h2>
          <Typography variant='captio'> Please fill this form to create an account.</Typography>
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
          label='Email' 
          placeholder='Enter email'  
          style={textFieldStyle}
          fullWidth
          value={this.state.email}
          onChange={(e) => this.setState({ email: e.target.value })}
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
          onClick={this.RegisterUser}
          >
            Sign Up
        </Button>
        <Typography> You already have an account ? 
          <Link href="/my-dashboard">
            Sign in !
          </Link>
        </Typography>
      </Paper>
    </Grid>
    );
  }
}
