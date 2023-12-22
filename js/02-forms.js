const form = document.querySelector(".js-register-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
    console.log(e);
    e.preventDefault();
    const formElements = e.currentTarget.elements;
    console.dir(formElements);
    // const email = formElements.email.value
    // const password = formElements.password.value;
    // const subscription = formElements.subscription.value;
    // console.log(`${email}, ${password}, ${subscription}`);

    const formData = new FormData(e.currentTarget)
    formData.forEach((value, name) => {
        console.log("onFormSubmit -> name", name);
        console.log("onFormSubmit -> value", value);
    });
}
