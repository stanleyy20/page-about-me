import bemCssModules from 'bem-css-modules';

import InputStyle from './Input.module.scss';

const style = bemCssModules(InputStyle);

export const Input = ({ type, name, placeholder, classModificator }) => {
    return (
        <input
            className={style(classModificator)}
            type={type}
            name={name}
            placeholder={placeholder}
        />
    );
};
