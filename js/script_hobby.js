
const choosedEl = document.querySelectorAll(".chosed_block-container > div")
const counterEl = document.querySelector(".chosed_block span")

const choosedState = {
        countElements: 0,
        setCountValue (value){
                this.countElements += value
                counterEl.innerText = this.countElements
        }
}

const eventFunc = (e) => {
        if(e.target.className === ""){
                e.target.className = "chosed_element"
                choosedState.setCountValue(1)
        } else {
                e.target.className = ""
                choosedState.setCountValue(-1)
        }
}

for(let i = 0; i < choosedEl.length; i++){
        choosedEl[i].addEventListener("click", eventFunc)
}
