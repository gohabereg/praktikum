import Block from '../../utils/Block';
import styles from './signup.pcss';
import AuthController, {ControllerSignUpData} from "../../controllers/AuthController";

export class SignUpPage extends Block {

  constructor() {
    super();

    this.setProps({
      onClick: this.onSignUp.bind(this)
    });
  }

  async onSignUp() {
    const element = this.getContent();

    const inputs = element?.querySelectorAll('input');

    const data: Record<string, unknown> = {};

    Array.from(inputs).forEach((input) => {
      data[input.name] = input.value;
    });

    await AuthController.signUp(data as ControllerSignUpData);
  }

  render() {
    // language=hbs
    return `
      {{#Card title="Регистрация"}}
        <form class="${styles.form}">
            {{{LabeledInput label="Почта" validation="email" name="email" type="text"}}} 
            {{{LabeledInput label="Логин" validation="login" name="login" type="text"}}} 
            {{{LabeledInput label="Имя" validation="name" name="first_name" type="text"}}} 
            {{{LabeledInput label="Фамилия" validation="name" name="second_name" type="text"}}} 
            {{{LabeledInput label="Телефон" validation="phone" name="phone" type="tel"}}} 
            {{{LabeledInput label="Пароль" validation="password" name="password" type="password"}}} 
            {{{LabeledInput label="Пароль (ещё раз)" validation="password" name="confirm_password" type="password"}}} 
            {{{Button label="Зарегистрироваться" onClick=onClick}}}
            {{#Link to="/signin"}}Войти{{/Link}}
        </form>
        {{#if isLoading}}Loadind{{/if}}
      {{/Card}}
    `
  }
}
