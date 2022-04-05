import Block from '../../utils/Block';
import styles from './signin.pcss';
import AuthController from "../../controllers/AuthController";
import {SignInData} from "../../api/AuthAPI";

export class SignInPage extends Block {
  constructor() {
    super({
      onSignIn: () => {
        const element = this.getContent();

        const inputs = element?.querySelectorAll('input');

        const data: Record<string, unknown> = {};

        Array.from(inputs).forEach((input) => {
          data[input.name] = input.value;
        });

        AuthController.signIn(data as SignInData);
      }
    });
  }
  render() {
    // language=hbs
    return `
      {{#Card title="Вход"}}
        <form class="${styles.form}">
            {{{LabeledInput label="Логин" name="login" validation="login" type="text"}}} 
            {{{LabeledInput label="Пароль" name="password" validation="password" type="password"}}} 
            {{{Button label="Авторизоваться" onClick=onSignIn}}}
            {{#Link to="/signup"}}Регистрация{{/Link}}
        </form>
      {{/Card}}
    `
  }
}
