const targetBtn = document.querySelector(".js-target-btn");
const addBtn = document.querySelector(".js-add-listener");
const removeBtn = document.querySelector(".js-remove-listener");

addBtn.addEventListener("click", 
        (e) => { console.log(e);
        console.log("вішаю подію на цільову кнопку");
        targetBtn.addEventListener("click", 
                onTargetBtnClick)});

removeBtn.addEventListener("click", 
        (e) => { console.log(e);
        console.log("знімаю слухача з цільвої кнопки");
        targetBtn.removeEventListener("click",
                onTargetBtnClick)});


function onTargetBtnClick(){
    console.log("подія на цільовій кнопці");
}