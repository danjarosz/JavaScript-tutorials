window.addEventListener("DOMContentLoaded", () => {
    const patterns = {
        username: /^[a-z\d]{5,12}$/i,
        telephone: /^\d{11}$/,
        password: /^[\w@-]{8,20}$/,
        slug: /^[a-z\d-]{8,20}$/
    }

    const validate = (field, regex) => {
        const isValid = field.value.match(regex);
        if (isValid) {
            field.classList.remove("invalid")
            field.classList.add("valid")
        } else {
            field.classList.remove("valid")
            field.classList.add("invalid")
        }
    }

    const Form = document.querySelector("form");
    const inputs = Form.querySelectorAll("input");

    inputs.forEach(input => {
        input.addEventListener("keyup", (e) => {
           const field = e.target;
           validate(field, patterns[field.name]);
        })
    });
})