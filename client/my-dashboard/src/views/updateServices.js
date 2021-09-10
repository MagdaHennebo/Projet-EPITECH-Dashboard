import React from "react";
import Topbar from "../components/Topbar/Topbar";
import "./adminServices.css";

export default class UpdateServices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceName: "",
      nbParam: "",
      url: "",

      services: [],
      
    };

    this.updateService = this.updateService.bind(this);
  }
  state = {
    services: [],
  };

/*   componentDidMount() {
    var axios = require('axios');
    var data = '';
    const id = this.props.match.params._id;

    var config = {
      method: 'get',
      url: 'http://localhost:3000/services/' + id,
      headers: { },
      data : data
    };
    
    axios(config)
    .then( (response)  => {
      this.setState({ services : response.data });
      console.log(JSON.stringify(this.state.services));
    })
    .catch(function (error) {
      console.log(error);
    });
  } */


  updateService() {
    var axios = require("axios");
    var data = JSON.stringify({
      serviceName: this.state.serviceName,
      nbParam: this.state.nbParam,
      url: this.state.url,
    });
    const id = this.props.match.params._id;

    var config = {
      method: "put",
      url: "http://localhost:3000/services/" + id,
      headers: {},
      data: data,
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
    <div>
     <Topbar />
     <div className="admin">
    <a href="/adminservices"> Retour </a>
 {/*     <p>{this.state.services}</p>
    <p>{this.state.serviceName}</p>
    <p>{this.state.url}</p>
    <p>{this.state.nbParam}</p> */}

    <label for="name">Enter the new service name: </label>
    <input type="text" name="name" id="name" value={this.state.serviceName} onChange={(e) => this.setState({ serviceName: e.target.value})}/>
    <label for="name">Enter the new service url: </label>
    <input type="text" name="url" id="url" value={this.state.url} onChange={(e) => this.setState({ url: e.target.value})}/>
    <label for="name">Enter the service's number of parameters: </label>
    <input type="text" name="params" id="params" rvalue={this.state.nbParam} onChange={(e) => this.setState({ nbParam: e.target.value})}/>
       
        <button 
        value="Envoyer" method="post" onClick={this.updateService}>
          Modifier
        </button>
        </div>
      </div>
    );
  }
}
