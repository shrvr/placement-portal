import { faBorderNone } from "@fortawesome/free-solid-svg-icons";

export const validation = (email, password, c_password = null, first_name = null, last_name = null, enrollment = null) => {
    const errors = {
        isError: false,
        emailError: "",
        passwordError: "",
        c_passwordError: "",
        first_nameError: "",
        last_nameError: "",
        enrollError: ''
    }

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

    if (first_name === "") {
        errors.isError = true;
        errors.first_nameError = "Please Enter First name";
    }

    if (last_name === "") {
        errors.isError = true;
        errors.last_nameError = "Please Enter Last name";
    }

    if (enrollment === "") {
        errors.isError = true;
        errors.enrollError = "Please Enter Enrollment number";
    }

    if (password === "") {
        errors.isError = true;
        errors.passwordError = "Please Enter Password";
    }
    // else {
    //     if (c_password != null) {
    //         if (password !== c_password) {
    //             errors.isError = true;
    //             errors.passwordError = "Passwords does not match";
    //         }
    //     }
    // }

    if (c_password === "") {
        errors.isError = true;
        errors.c_passwordError = "Please Enter Password";
    } else {
        if (c_password != null) {
            if (password !== c_password) {
                errors.isError = true;
                errors.c_passwordError = "Passwords does not match";
            }
        }
    }
    // console.log(errors)
    return errors;
};