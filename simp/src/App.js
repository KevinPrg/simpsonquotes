import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import Simpson from './components/Quote'

const Simp = {
  quote: "By chilling my loins I increase the chances of impregnating my wife.",
  character: "Apu Nahasapeemapetilon",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
  characterDirection: "Left"
  }


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      quote2: Simp
    }
    this.getCharacter = this.getCharacter.bind(this);
  }

  getCharacter() {
    axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
    .then(response => response.data)
    .then(data =>{
      this.setState({
        quote2: data[0]
      })
    })
  }

  render(){
    return(
      <div>
        <Simpson quote2={this.state.quote2} />
        <button onClick={this.getCharacter}>Rerol me!</button>
      </div>
    )
  }
}

export default App;
