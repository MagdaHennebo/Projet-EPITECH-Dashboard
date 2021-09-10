import React from 'react';
import "./adminServices.css";
import Topbar from "../components/Topbar/Topbar";


export default class RDServices extends React.Component {
  state = {
    services : [],
  }

  componentDidMount() {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'http://localhost:3000/services',
    };
    
    axios(config)
    .then( (response)  => {
      this.setState({ services : response.data });
      console.log(JSON.stringify(this.state.services));
    })
    .catch(function (error) {
      console.log(error);
    });
  }

deleteServices(service) {
  var axios = require("axios");
  var config = {
    method: "delete",
    url: `http://localhost:3000/services/${service._id}`,
    headers: {},
  };
  axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}

render(){
  return (
    <div>
      <Topbar />
    <div className="admin">
  {this.state.services.map((services) => {
  return (
  <div key={services._id}>
    <h3 className="p">{services.serviceName}</h3>
    <p className="p">{services.url} </p>
    <p className="p">{services.nbParam}</p>

    <button
    type="button"
    onClick={() => this.deleteServices(services)}
    >
    Supprimer
    </button>
  
 
  <button
        type="button"
        onClick={() =>
          this.props.history.push(`/updateservices/${services._id}`)
          }
  >
    Modifier
  </button>

  
  

  
</div>
);
})}
<a className="new" href="/createservices">Créer un nouveau service</a>
     </div>
     </div>
     );
    }
  }