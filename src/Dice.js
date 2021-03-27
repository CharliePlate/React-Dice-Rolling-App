import React, { Component } from 'react'
import './Dice.css'

export default class Dice extends Component {
    render() {
        let diceValue = `fas fa-dice-${this.props.num}`
        return (
            <div className={`Dice ${this.props.isRolling ? 'Dice-Animation': ''}`}>
                <i className={diceValue} ></i>
            </div>
        )
    }
}
