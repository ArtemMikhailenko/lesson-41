import React, {Component} from "react";
import ArticleBody from "./components/ArticleBody";
import ArticleActions from "./components/ArticleActions";
import ArticleTitle from "./components/ArticleTitle";
import Article from "./components/Article";
import LangContext from "./components/lang-context";

let EN = {
  title: 'NVIDIA NEWS' ,
  subtitle: 'NVIDIA Accelerated AI on Azure',
  description: 'Article description:',
  description_text: 'NVIDIA on Azure is bringing AI, networking, and high-performance computing to the enterprise.',
  current_lang: 'EN',
  button:'Read'
}
let UA = {
  title: 'НОВИНИ NVIDIA',
  subtitle: 'Прискорений штучний інтелект NVIDIA в Azure',
  description: 'Опис статті:',
  description_text: 'NVIDIA на Azure надає підприємствам можливості штучного інтелекту, мереж та високопродуктивних обчислень.',
  current_lang: 'UA',
  button: 'Читати'
}

let langBtns;
class App extends Component{
  constructor(){
    super()
    this.state = JSON.parse(window.localStorage.getItem('state')) || {
      lang: EN
    };
  }
  setState(state) {
    window.localStorage.setItem('state', JSON.stringify(state));
    super.setState(state);
  }
  componentDidMount(){
  langBtns = document.querySelectorAll('.lang-btn');
  langBtns[1].classList.add('active');
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.lang !== this.state.lang){
    langBtns.forEach(btn => btn.classList.remove('active'));
    this.state.lang.current_lang === 'UA' ? langBtns[0].classList.add('active')
                                          : langBtns[1].classList.add('active') 
    }
  } 

  SetLangEN(){
    this.setState({lang: EN})
  }

  SetLangUA(){
    this.setState({lang: UA})
  }

  render(){
    return (
      <div className="wrapper">
        <LangContext.Provider value={this.state.lang}>

        <ArticleTitle ></ArticleTitle> 
          <Article></Article>
        <div className="lang">
          <button onClick={this.SetLangUA.bind(this)} 
          className="lang-btn">UA</button>
          <button onClick={this.SetLangEN.bind(this)}
           className="lang-btn">EN</button>
        </div>
        </LangContext.Provider>
      </div> )}}

export default App;