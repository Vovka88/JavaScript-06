const refs = {
    input: document.querySelector(".js-input"),
    nameLabel: document.querySelector(".js-button > span"),
    licenseCheckbox: document.querySelector(".js-license"),
    btn: document.querySelector(".js-button")
}
// refs.input.addEventListener("focus", 
//     (e) => {"Наш input отримав focus - подія focus"});
// refs.input.addEventListener("blur", 
//     (e) => {"Наш input отримав blur - подія blur"});
// refs.input.addEventListener("input", 
//     (e) => {"Наш input отримав input - подія input"});
// refs.input.addEventListener("change", 
//     (e) => {"Наш input отримав change - подія change"});

refs.licenseCheckbox.addEventListener("change", 
    (e) => {console.dir(e);
    console.dir(refs.btn);
    refs.btn.disabled = !e.target.checked;});

refs.input.addEventListener("blur", 
    (e) => {console.dir(refs.nameLabel)
    e.target.value !== "" ? 
    refs.nameLabel.innerText = e.target.value :
    refs.nameLabel.innerText = "Анонім" })