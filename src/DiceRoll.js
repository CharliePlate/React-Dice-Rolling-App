import React, { Component } from 'react'
import Dice from './Dice'
import './DiceRoll.css'

export default class DiceRoll extends Component {
    state = {
        dice1: "one",
        dice2: "one",
        isRolling: false
    }

    roll = () => {
        let numWords = [ 'one', 'two', 'three', 'four', 'five', 'six' ]
        this.setState({isRolling: true})
        setTimeout(() => this.setState( {isRolling: false} ), 750);
        this.setState({ dice1: numWords[Math.floor(Math.random() * 6)], dice2: numWords[Math.floor(Math.random() * 6)] })
    }

    render() {
        return (
            <div>
                <div className="DiceRoll-Dice">
                  <Dice 
                    num={this.state.dice1}
                    isRolling={this.state.isRolling}
                    />
                  <Dice
                    num={this.state.dice2} 
                    isRolling={this.state.isRolling}
                    />
            </div>
                <button onClick={this.roll} className="DiceRoll-btn" disabled={this.state.isRolling}>{this.state.isRolling ? "Rolling...": "Roll The Dice"}</button>
            </div>
        )
    }
}
