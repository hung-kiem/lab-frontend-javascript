function Validator(formSelector) {
    const formElement = document.querySelector(formSelector);
    const formRules = {};
    const _this = this;
    const getParent = (element, selector) => {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }
    const validatorRules = {
        required: (value) => {
            return value.trim().length === 0 ? `Khong duoc de trong` : undefined;
        },
        min: (value) => {
            return (min) => {
                return value.trim().length < value ? `Vui long nhap it nhat ${value} ky tu` : undefined;
            }
        },
        email: (value) => {
            const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
            return regex.test(value) ? undefined : 'Truong nay phai la email';
        }
    }
    if (formElement) {
        const inputElements = formElement.querySelectorAll('[name][rule]');
        Array.from(inputElements).forEach(inputElement => {
            const rules = inputElement.getAttribute('rule').split('|');
            for (let rule of rules) {
                let ruleInfo;
                const isHasParam = rule.includes(':');
                if (isHasParam) {
                    ruleInfo = rule.split(':');
                    rule = ruleInfo[0];
                }
                let ruleFunction = validatorRules[rule];
                if (isHasParam) {
                    ruleFunction = ruleFunction(ruleInfo[1]);
                }
                if (Array.isArray(formRules[inputElement.name])) {
                    formRules[inputElement.name].push(ruleFunction);
                } else {
                    formRules[inputElement.name] = [ruleFunction];
                }
            }

            // Lang nghe su kien
            inputElement.onblur = handleValidate;
        })

        function handleValidate(e) {
            const rules = formRules[e.target.name];
            let message;
            for (const rule of rules) {
                message = rule(e.target.value);
                if (message) break;
            }
            if (message) {
                const formGroup = getParent(e.target, '.form-group');
                formGroup.classList.add('invalid');
                const formMessage = formGroup.querySelector('.form-message');
                if (formMessage) {
                    formMessage.innerText = message;
                }
            } else {
                const formGroup = getParent(e.target, '.form-group');
                formGroup.classList.remove('invalid');
                const formMessage = formGroup.querySelector('.form-message');
                if (formMessage) {
                    formMessage.innerText = '';
                }
            }

            return message;
        }


        formElement.onsubmit = function (event) {
            event.preventDefault();
            const inputs = formElement.querySelectorAll('[name][rule]');
            let isFormValid = true;
            for (const input of inputs) {
                if (!handleValidate({target: input})) {
                    isFormValid = false;
                }
            }
            if (isFormValid) {
                if (_this.onSubmit) {
                    _this.onSubmit('123')
                } else {
                    formElement.submit();
                }
            }
        }
    }
}