// Napisi funkcija kojasto pri klik na bukvite kje pusta zvuk od dadenata bukva sto bila kliknata!

let audioArray = new Array(new Audio('audio/Аа.mp3'), new Audio('audio/Бб.mp3'), new Audio('audio/Вв.mp3'), new Audio('audio/Гг.mp3'), new Audio('audio/Дд.mp3'), new Audio('audio/Ѓѓ.mp3'), new Audio('audio/Ее.mp3'), new Audio('audio/Жж.mp3'), new Audio('audio/Зз.mp3'), new Audio('audio/Ѕѕ.mp3'), new Audio('audio/Ии.mp3'), new Audio('audio/Јј.mp3'), new Audio('audio/Кк.mp3'), new Audio('audio/Лл.mp3'), new Audio('audio/Љљ.mp3'), new Audio('audio/Мм.mp3'), new Audio('audio/Нн.mp3'), new Audio('audio/Њњ.mp3'), new Audio('audio/Оо.mp3'), new Audio('audio/Пп.mp3'), new Audio('audio/Рр.mp3'), new Audio('audio/Сс.mp3'), new Audio('audio/Тт.mp3'), new Audio('audio/Ќќ.mp3'), new Audio('audio/Уу.mp3'), new Audio('audio/Фф.mp3'), new Audio('audio/Хх.mp3'), new Audio('audio/Цц.mp3'), new Audio('audio/Чч.mp3'), new Audio('audio/Џџ.mp3'), new Audio('audio/Шш.mp3'))

let letterArray = new Array("Аа", "Бб", "Вв", "Гг", "Дд", "Ѓѓ", "Ее", "Жж", "Зз", "Ѕѕ", "Ии", "Јј", "Кк", "Лл", "Љљ", "Мм", "Нн", "Њњ", "Оо", "Пп", "Рр", "Сс", "Тт", "Ќќ", "Уу", "Фф", "Хх", "Цц", "Чч", "Џџ", "Шш")


// А	Б	В	Г	Д	Ѓ	Е	Ж	З	Ѕ	И	Ј	К	Л	Љ	М	Н	Њ	О	П	Р	С	Т	Ќ	У	Ф	Х	Ц	Ч	Џ	Ш
document.addEventListener('click', (e)=>{
    let element = e.target
    
    for(let i = 0; i < letterArray.length; i++){
        if(element.innerHTML === letterArray[i] || element.lastChild.innerHTML === letterArray[i]){
            audioArray[i].play()
        }
    }
})