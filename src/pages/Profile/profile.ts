import Block from "../../utils/Block";
import AuthController from "../../controllers/AuthController";

export class ProfilePage extends Block {
    constructor(props) {
        super({
            ...props,
            onLogout: () => AuthController.logout()
        });
    }

    protected render(): string {
        return `<div>
            Email: {{ email }}<br/>
            Login: {{ login }}<br/>
            {{{Button label="Выйти" onClick=onLogout}}}
        </div>`
    }
}