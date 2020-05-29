import { faBorderNone } from "@fortawesome/free-solid-svg-icons";

export const validation=(email,password,erro)=> {
    // let isError = false
    const errors = {
        isError: false,
        emailError: "",
        passwordError: ""}

    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email === "") {
        errors.isError = true;
        errors.emailError = "Please Enter email";
    }
    else {
        if (!emailRex.test(email)) {
            errors.isError = true;
            errors.emailError = "Requires valid email";
        }
    }

    if (password === "") {
        errors.isError = true;
        errors.passwordError = "Please Enter Password";
    }
    return errors;
};