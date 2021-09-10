import React from "react";
import './news.css';

export default class Login extends React.Component {
    state = {
        articles : [],
      }
    
    componentDidMount() {
        var axios = require('axios');
    
        var config = {
          method: 'get',
          url: 'https://newsapi.org/v2/top-headlines?country=fr&apiKey=a7a812d2786d40cd998d9fe08c521f60',
        };
        
        axios(config)
        .then( (response)  => {
          this.setState({ articles : response.data.articles });
          console.log(JSON.stringify(this.state.articles));
        })
        .catch(function (error) {
          console.log(error);
        });
      }
      render(){
        return (
            <div className="news">
              <h1>Les dernières actualités</h1>
                {this.state.articles.map((articles) => {
                    return (
                         <div key={articles.author} className="newsContainer">
                            <div className="BlocArticle">
                               <h3>{articles.author}</h3>
                               <h4>{articles.title} </h4>
                               <p>{articles.description} </p>
                               
                               <p>{articles.publishedAt}</p>
                             </div> 
                             <div className="right">
                              <img className="image" src={articles.urlToImage} alt="article_image"/>
                              <a className="url" href={articles.url}>Lire ici</a>
                             </div>
                        </div>)})}
            </div>
        )
    }
}