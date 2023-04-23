import React, {Component} from "react";
import LangContext from "./lang-context";
class ArticleTitle extends Component{
  render(){
    //console.log(this.props);
            return (
                <LangContext.Consumer>{
                    (context) => {
                        return(
                            <div className="article__title">
                                <h1 className="title"> {context.title}</h1>
                                <h2 className="subtitle">{context.subtitle}</h2>
                            </div>
                        )
                    }
                
                    }
              
      
  </LangContext.Consumer> )}}

export default ArticleTitle;