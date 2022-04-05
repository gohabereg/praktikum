import Block from "../../utils/Block";
import styles from './error.pcss';

export class Error extends Block {
    protected render(): string {
        if (this.props.isValid) {
            return '<div />';
        }

        return `<div class="${styles.error}">{{ text }}</div>`;
    }
}