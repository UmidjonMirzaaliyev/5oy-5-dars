const toggle = document.getElementById("mode-toggle");
toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
  
});

const rightSide = document.querySelector('.rightSide')
const leftSide = document.querySelector('.leftSide')

const uzbek = document.querySelector('#uzbekLang')
const eng = document.querySelector('#engLang')
const rusLang = document.querySelector('#rusLang')

const textChange1 = document.querySelector('.text_change1')
const textChange2 = document.querySelector('.text_change2')
const textChange3 = document.querySelector('.text_change3')

uzbek.addEventListener("click", function (){
  textChange1.textContent = "Figma bilan ijodkorlik kuchini oching!"
  textChange2.textContent = "Dizayn o'yiningizni oshirishga tayyormisiz?"
  textChange3.textContent = "Endi Figma-ni sinab ko'ring"
})

eng.addEventListener("click", function (){
  textChange1.textContent = "Unlock the Power of Creativity with Figma!"
  textChange2.textContent = "Ready to elevate your design game?"
  textChange3.textContent = "Try Figma now"
})

rusLang.addEventListener("click", function (){
  textChange1.textContent = "Раскройте силу творчества с Figma!"
  textChange2.textContent = "Готовы улучшить свою дизайнерскую игру?"
  textChange3.textContent = "Попробуйте Фигму прямо сейчас"
})

const css = `
.dark-mode {
    background-color: #333;
    color: #fff;
}

.dark-mode .left-side {
    background-color: #000;
}


`;
const style = document.createElement("style");
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);
