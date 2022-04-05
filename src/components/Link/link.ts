import Block from '../../utils/Block';
import {WithRouterProps} from '../../utils/Router';
import styles from './link.pcss';

interface LinkProps extends WithRouterProps {
    to: string;
}

export class Link extends Block {
    constructor({to, router}: LinkProps) {
        super({
            to,
            events: {
                click: (e: MouseEvent) => {
                    e.preventDefault();

                    router.go(to);
                }
            }
        })
    }

    protected render(): string {
        // language=hbs
        return `<a class=${styles.link} href="{{ to }}"></a>`
    }
}