import React, { Component } from 'react'
import LetterBox from './LetterBox'
import './LetterContainer.css'

export default class LetterContainer extends Component {
    constructor(props){
        super(props)

        this.state = {
            letterAlphabet: [
                "Аа", 
                "Бб", 
                "Вв", 
                "Гг", 
                "Дд", 
                "Ѓѓ", 
                "Ее", 
                "Жж", 
                "Зз", 
                "Ѕѕ", 
                "Ии", 
                "Јј", 
                "Кк", 
                "Лл", 
                "Љљ",
                "Мм", 
                "Нн", 
                "Њњ", 
                "Оо", 
                "Пп", 
                "Рр", 
                "Сс", 
                "Тт", 
                "Ќќ", 
                "Уу", 
                "Фф", 
                "Хх", 
                "Цц", 
                "Чч", 
                "Џџ", 
                "Шш"
            ]
        }
    }


    render() {
        let renderAlphabet = this.state.letterAlphabet.map(
            letter => 
                <LetterBox 
                    key={letter}
                    content={letter}
                    sound={`sound of ${letter}`}
                />
        )


        return (
            <div className="LetterContainer">
                {renderAlphabet}
            </div>
        )
    }
}
