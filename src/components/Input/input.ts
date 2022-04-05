import Block from '../../utils/Block';
import styles from './input.pcss';

export interface InputProps {
    type?: string;
    placeholder?: string;
    name: string;
    onFocus?: () => void;
    onBlur?: () => void;
    onInput?: () => void;
}

export class Input extends Block {
    constructor({onFocus, onBlur, onInput, ...props}: InputProps) {
        super({
            ...props,
            events: {
                focus: onFocus,
                blur: onBlur,
                input: onInput,
            }
        });
    }

    render() {
        // language=hbs
        return `<input class="${styles.input}" type="{{ type }}" name="{{ name }}" placeholder="{{ placeholder }}" />`;
    }
}

