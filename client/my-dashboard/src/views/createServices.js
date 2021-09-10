import React from 'react';
import "./adminServices.css";
import Topbar from "../components/Topbar/Topbar";


export default class createServices extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         serviceName: "",
          url: "",
          nbParam:"",
        };
        this.createService = this.createService.bind(this);
      }
    

    createService() {
        var axios = require('axios');
        var data = JSON.stringify({
          serviceName: this.state.serviceName,
          url: this.state.url,
          nbParam: this.state.nbParam,
        });
        
        var config = {
          method: 'post',
          url: 'http://localhost:3000/services',
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };
        
        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
        }

  render(){
    return (
     <div> 
         <Topbar/>
         <div className="admin"></div>

        <label>
             <p>Service's name</p>
             <input
             type="text"
             value={this.state.serviceName}
             onChange={(e) => this.setState({ serviceName: e.target.value })}
             />
        </label>
        <label>
             <p>Service's URL</p>
             <input
             type="text"
             value={this.state.url}
             onChange={(e) => this.setState({ url: e.target.value })}
             />
        </label>
        <label>
             <p>Service's number of parameters</p>
             <input
             type="text"
             value={this.state.nbParam}
             onChange={(e) => this.setState({ nbParam: e.target.value })}
             />
        </label>


        <div>
          <button 
          type="submit" onClick={this.createService}>
            Envoyer
          </button>
          </div>
        </div>  
     );
    }
  }