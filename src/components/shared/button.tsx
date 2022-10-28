import React from "react";
import 'styles/components/button.scss';
import { SVG } from "components";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    value?: string | string[] | number;
    onClick?: () => void;
    iconName?: string;
    type?: 'submit' | 'button' | 'reset'
    iconClass?: string
}


const Button: React.FC<IButton> = (props: IButton): JSX.Element => {
    const { value, onClick, iconName, type, iconClass } = props;

    return (
        <button
            type={type}
            onClick={onClick}
            className="button">
            {iconName ?
                <SVG name={iconName} class={iconClass} color="white" />
                : null}
            {value}
        </button>
    )
}

export default Button;