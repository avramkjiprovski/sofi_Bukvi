import React, { Component } from 'react'
import './LetterBox.css'

export default class LetterBox extends Component {
    constructor(props){
        super(props)
        this.state = {

        }

        this.playSound = this.playSound.bind(this)
    }

    playSound(){
          var audio = new Audio(`./audio/${this.props.content}.mp3`)
          audio.play()
    }


    render() {
        return (
            <div onClick={this.playSound} className="LetterBox">
                <h1>
                    {this.props.content}
                </h1>
                <p>
                    {this.props.sound}
                </p>
            </div>
        )
    }
}
