import React from "react";
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core';
import Topbar from "../components/Topbar/Topbar";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  state = {
    users: [],
  };

  componentDidMount() {
    var axios = require("axios");

    var id = localStorage.getItem("User_id");
    id = id.replace(/^"(.*)"$/, "$1");

    var config = {
      method: "get",
      url: "http://localhost:3000/users/" + id,
    };

    axios(config)
      .then((response) => {
        this.setState({ users: response.data });
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  /* updateUser(user){
    var axios = require("axios");

    var id = localStorage.getItem("User_id");
    id = id.replace(/^"(.*)"$/, "$1");

    var data = JSON.stringify({
      username: this.state.username,
      email: this.state.email,
    });

    var config = {
      method: "put",
      url: "http://localhost:3000/users/" + id,
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

  } */

render() {

  const paperStyle={padding :20, height: '60vh', width: 280, margin: "70px auto"}
  const avatarStyle={backgroundColor: 'pink'}
  const buttonStyle={margin:'30px 0', backgroundColor: 'pink'}
  /* const textFieldStyle={margin:'8px 0'} */

  return (
    <div>
      <Topbar />
    <Grid>
      <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
            <Avatar style={avatarStyle}>  </Avatar>
            <h2>My Profile</h2>
          </Grid>
          <Typography>My username: {this.state.users.username}</Typography>
          <Typography>My email: {this.state.users.email}</Typography>
          <Button style={buttonStyle} fullWidth href="/home">Retour</Button>

          {/* <TextField 
            label='Username' 
            placeholder='Enter new username' 
            style={textFieldStyle}
            fullWidth
            value={this.state.username}
            onChange={(e) => this.setState({ username: e.target.value })}
          />
           <TextField 
            label='Email' 
            placeholder='Enter new Email' 
            style={textFieldStyle}
            fullWidth
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
  */}
 {/*  <button
        type="button"
        onClick={() =>
          this.props.history.push(`/updateprofile/${users._id}`)
          }
  >
    Modifier
  </button> */}
 
        </Paper>
    </Grid></div>
  )
  }
}