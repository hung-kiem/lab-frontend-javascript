function Validator (option) {

    const selectorRules = {};

    const getParent = (element) => {
        while (element.parentElement) {
            if (element.parentElement.matches(option.formGroupSelector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    const validate = (inputElement, rule) => {
        const value = inputElement.value;
        const rules = selectorRules[rule.selector];

        const error = rules.reduce((error, rule) => {
            return error || rule(value);
        }, undefined);
        if (error) {
            const formGroup = getParent(inputElement);
            formGroup.classList.add('invalid');
            const formMessage = formGroup.querySelector('.form-message');
            if (formMessage) {
                formMessage.innerText = error;
            }
        } else {
            const formGroup = getParent(inputElement);
            formGroup.classList.remove('invalid');
            const formMessage = formGroup.querySelector('.form-message');
            if (formMessage) {
                formMessage.innerText = '';
            }
        }
    }

    const formElement = document.querySelector(option.form);
    if (formElement) {
        formElement.onsubmit = (e) => {
            e.preventDefault();
            let isFormValid = true;
            option.rules.forEach((rule) => {
                const inputElement = formElement.querySelector(rule.selector);
                validate(inputElement, rule);
                const formGroup = getParent(inputElement);
                if (formGroup.classList.contains('invalid')) {
                    isFormValid = false;
                }
            });
            if (isFormValid) {
                if (typeof option.onSubmit === 'function') {
                    const enableInputs = formElement.querySelectorAll('[name]:not([disabled])');
                    const formValues = Array.from(enableInputs).reduce((values, input) => {
                        switch (input.type) {
                            case 'radio':
                                values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                                break;
                            case 'checkbox':
                                if (!input.matches(':checked')) {
                                    values[input.name] = [];
                                    return values;
                                }
                                if (!Array.isArray(values[input.name])) {
                                    values[input.name] = [];
                                }
                                values[input.name].push(input.value);
                                break;
                            case 'file':
                                values[input.name] = input.files;
                                break;
                            default:
                                values[input.name] = input.value;
                        }
                        return values;
                    }, {});
                    option.onSubmit(formValues);
                } else {
                    formElement.submit();
                }
            }
        }

        // Xu ly lap qua rule
        option.rules.forEach((rule) => {
           const inputElement = formElement.querySelector(rule.selector);
           if (Array.isArray(selectorRules[rule.selector])) {
               selectorRules[rule.selector].push(rule.test);
           } else {
                selectorRules[rule.selector] = [rule.test];
           }
           if (inputElement) {
               // Xu ly truong hop blur ra khoi input
                inputElement.onblur = () => {
                     validate(inputElement, rule);
                }

                // Xu ly khi nguoi dung nhap vao input
                inputElement.oninput = () => {
                    const formGroup = getParent(inputElement);
                    formGroup.classList.remove('invalid');
                    const formMessage = formGroup.querySelector('.form-message');
                    if (formMessage) {
                        formMessage.innerText = '';
                    }
                }
           }
        });
    }
}

Validator.isRequired = (selector, message) => {
    return {
        selector,
        test: (value) => {
            return value.trim() ? undefined : message || 'Vui lòng nhập trường này';
        }
    }
}

Validator.isEmail = (selector, message) => {
    return {
        selector,
        test: (value) => {
            const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
            return regex.test(value) ? undefined : message || 'Trường này phải là email';
        }
    }
}

Validator.minLength = (selector, min, message ) => {
    return {
        selector,
        test: (value) => {
            return value.length >= min ? undefined : message || `Vui lòng nhập ít nhất ${min} ký tự`;
        }
    }
}

Validator.isConfirmed = (selector, getConfirmValue, message) => {
    return {
        selector,
        test: (value) => {
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác';
        }
    }
}