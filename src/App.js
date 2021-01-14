import React, { Component } from 'react';
import './App.css';
import Word from './Word';
import Keyboard from './Keyboard';

const dico = [
  'laid',
  'pair',
  'ronronner',
  'civil',
  'odeur',
  'gratuit',
  'convoyeur',
  'havre',
  'huître',
  'gymnaste',
  'grue',
  'opération',
  'réunion',
  'soucoupe',
  'sens',
  'impulsion',
  'nervure',
  'fragment',
  'roues',
  'majordome',
  'novice',
  'figurines',
  'talc',
  'détachable',
  'excitation',
  'silicone',
  'vache',
  'maquillage',
  'dromadaire',
  'plaquettaire',
  'rome',
  'propreté',
  'morne',
  'plomb',
  'dépendant',
  'promettre',
  'percussion',
  'gémissement',
  'chagrin',
  'continent',
  'esquimau',
  'cher',
  'japonais',
  'poignard',
  'rouleau',
  'irriguer',
  'pipeline',
  'langue',
  'époux',
  'rectangle',
  'buffle',
  'coussin',
  'potentiel',
  'écologiste',
  'astrologie',
  'chenil',
  'neuf',
  'triple',
  'animal',
  'foudre',
  'pause',
  'pellicules',
  'rayure',
  'musulman',
  'ballon dirigeable',
  'visiteur',
  'terrain',
  'inde'
]

const randa = (a) => a[Math.floor(Math.random() * a.length)]

const obstruct = (str, a = []) => str
  .replace(/\w/g, (l) => a.includes(l) ? l : '_')
  .replace(/é/g, (l) => a.includes('e') ? l : '´')
  .replace(/à/g, (l) => a.includes('a') ? l : '`')
  .replace(/è/g, (l) => a.includes('e') ? l : '`')
  .replace(/ù/g, (l) => a.includes('u') ? l : '`')
  .replace(/ä/g, (l) => a.includes('a') ? l : '¨')
  .replace(/ë/g, (l) => a.includes('e') ? l : '¨')
  .replace(/ï/g, (l) => a.includes('i') ? l : '¨')
  .replace(/ü/g, (l) => a.includes('u') ? l : '¨')
  .replace(/ÿ/g, (l) => a.includes('y') ? l : '¨')
  .replace(/â/g, (l) => a.includes('a') ? l : '^')
  .replace(/ê/g, (l) => a.includes('e') ? l : '^')
  .replace(/î/g, (l) => a.includes('i') ? l : '^')
  .replace(/ô/g, (l) => a.includes('o') ? l : '^')
  .replace(/û/g, (l) => a.includes('u') ? l : '^');

const cleanStr = (str) => str
  .replace(/é/g, 'e')
  .replace(/à/g, 'a')
  .replace(/è/g, 'e')
  .replace(/ù/g, 'u')
  .replace(/ä/g, 'a')
  .replace(/ë/g, 'e')
  .replace(/ï/g, 'i')
  .replace(/ü/g, 'u')
  .replace(/ÿ/g, 'y')
  .replace(/â/g, 'a')
  .replace(/ê/g, 'e')
  .replace(/î/g, 'i')
  .replace(/ô/g, 'o')
  .replace(/û/g, 'u');



class App extends Component {
  constructor(props) {
    super(props);

    this.dico = dico;
    const firstAnswer = randa(this.dico);

    this.state = {
      score: 0,
      answer: firstAnswer,
      display: obstruct(firstAnswer),
      usedLetters: []
    };

    this.keyPress = (keyPressed) => {
      if (!this.state.usedLetters.includes(keyPressed)) {
        const newUsedLetters = this.state.usedLetters;
        newUsedLetters.push(keyPressed);
        const regEx = new RegExp(keyPressed, 'g');

        const occurences = (cleanStr(this.state.answer).match(regEx) || []).length
        if (occurences > 0) {
          this.setState({ score: this.state.score + (3 * occurences) })
        } else this.setState({ score: this.state.score - Math.ceil(this.state.score / 4) });


        const display = obstruct(this.state.answer, newUsedLetters);

        this.setState({
          usedLetters: newUsedLetters,
          display
        });
      }
    };

    this.again = () => {
      const nextAnswer = randa(this.dico);
      this.setState({
        answer: nextAnswer,
        display: obstruct(nextAnswer),
        usedLetters: []
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <span>{this.state.score}</span>
          <Word value={this.state.display} />
          {
            this.state.display.includes('_')
              ? <Keyboard keyPress={this.keyPress} />
              : <button className='keyboardKey' onClick={this.again}>AGAIN</button>
          }
        </div>
      </div>
    )
  }
}

export default App;
