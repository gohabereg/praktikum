import Block from '../../utils/Block';
import styles from './button.pcss';

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export class Button extends Block {
  constructor({label, onClick}: ButtonProps) {
    super({
      label,
      events: {
        click: onClick
      }
    });
  }

  render() {
    // language=hbs
    return `
      <button class="${styles.button}" type="button">
          {{ label }}
      </button>
    `;
  }
}

