import Block from "../../utils/Block";
import styles from './card.pcss';

export class Card extends Block {
    protected render(): string {
        // language=hbs
        return `
            <div class="${styles.card}">
                <h2 class="${styles.card__title}">{{ title }}</h2>
            </div>
        `
    }
}