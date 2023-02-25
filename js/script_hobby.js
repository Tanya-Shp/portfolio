
const choosedEl = document.querySelectorAll(".chosed_block-container > div")
//мы не ставим > перед span, потому что он лежит не непосредственно в элементе
//а в дополнительном параграфе элемента
const counterEl = document.querySelector(".chosed_block span")
//чтобы пользователь не мог влиять на выбранные элементы через панель разраба
//создаём статус для элемента и функцию работающую со статусом
//вложили наш счётчик внутрь элемента сокрыв его от прямого доступа
const choosedState = {
        countElements: 0,
        setCountValue (value){
                this.countElements += value
                counterEl.innerText = this.countElements
        }
}

const eventFunc = (e) => {
//выбрать элемент, т.е. выделить его с помощью класса
        // choosedEl[i].className = "chosed_element"
        // console.log("e")
//правильнее обращаться к target элемента, e.target = choosedEl[i]
                // e.target.className = "chosed_element"
//запустить счётчик кол-ва выбранных элементов
//принудительно приводим к числу, ставим плюс перед выражением 
//+counterEl.innerText + 1
        if(e.target.className === ""){
                e.target.className = "chosed_element"
                choosedState.setCountValue(1)
        } else {
                e.target.className = ""
                choosedState.setCountValue(-1)
        }
}

//с помощью цикла каждому элементу повесили обработчик событий
//но у второго элемента потом этот обработчик убрали
for(let i = 0; i < choosedEl.length; i++){
        choosedEl[i].addEventListener("click", eventFunc)
}
// choosedEl[2].removeEventListener("click", eventFunc)