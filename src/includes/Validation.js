import {Form as VeeForm, Field as VeeField, defineRule, ErrorMessage, configure} from "vee-validate";
import {
    required,
    min,
    max,
    alpha_spaces as alphaSpaces,
    email,
    numeric,
    min_value,
    max_value,
    confirmed,
    not_one_of,

} from "@vee-validate/rules";

export default {
    install(app) {
        app.component("VeeForm", VeeForm);
        app.component("veeField", VeeField);
        app.component("ErrorMessage", ErrorMessage);
        defineRule("required", required);
        defineRule("tos", required);
        defineRule("min", min);
        defineRule("max", max);
        defineRule("alpha_spaces", alphaSpaces);
        defineRule("email", email);
        defineRule("numeric", numeric);
        defineRule("min_value", min_value);
        defineRule("max_value", max_value);
        defineRule("passwords_mismatch", confirmed);
        // defineRule("confirmed", confirmed);
        defineRule("not_one_of", not_one_of);
        defineRule("country_not_one_of", not_one_of);
        configure({
            generateMessage: (ctxt) => {
                const messages = {
                    required: `The field ${ctxt.field} is required`,
                    min: `The field  ${ctxt.field} is too short`,
                    max: `The field  ${ctxt.field} is too long`,
                    alpha_spaces: `The field  ${ctxt.field} must contain only letters and spaces`,
                    email: `The field  ${ctxt.field} must be a valid email`,
                    numeric: `The field  ${ctxt.field} must be a number`,
                    not_one_of: `you are not allowed to use this value for the field ${ctxt.field}`,
                    country_not_one_of: `due to restrictions, we're not allowed to accept users from this location! :D`,
                    passwords_mismatch: "passwords don't match",
                    tos: "you must agree to our terms of service",


                };

                const message = messages[ctxt.rule.name]
                    ? messages[ctxt.rule.name]
                    : `the field ${ctxt.field} has an error`;
                return message;
            },
            validateOnBlur:true,
            validateOnChange:true,
            validateOnInput:false,
            validateOnModelUpdate:true,

        });

    },
};