import Block from '../../utils/Block';
import styles from './labledInput.pcss';
import {InputProps} from "../Input";
import Validator, {ValidationType} from "../../utils/Validator";

interface LabeledInputProps extends InputProps {
    label: string;
    validation: ValidationType;
}

export class LabeledInput extends Block {
    constructor({ label, validation, ...props }: LabeledInputProps) {
        super({
            ...props,
            label,
            onBlur: (e: FocusEvent) => {
                const input = e.target as HTMLInputElement;
                const value = input.value;

                const [result, message] = Validator.validate(validation, value);

                this.refs.error.setProps({
                    isValid: result,
                    text: message
                });
            }
        });
    }

    render() {
        // language=hbs
        return `
            <div class="${styles['labeled-input']}">
                <label class="${styles['labeled-input__label']}" for="{{ name }}">
                    {{ label }}
                </label>
                {{{Input type=type name=name placeholder=placeholder onFocus=onFocus onBlur=onBlur onInput=onInput}}}
                {{{Error text="Невалидное значение" isValid=true ref="error"}}}
            </div>
        `;
    }
}

