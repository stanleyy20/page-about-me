import bemCssModules from 'bem-css-modules';

import { default as ProjectStyle } from './Project.module.scss';

const style = bemCssModules(ProjectStyle);

export const Project = ({ Url, Icon, Title }) => {
    return (
        <>
            <div className={style()}>
                <a className={style('link')} href={Url}>
                    Link
                </a>
                <div className={style('img')}>
                    <i class={Icon}></i>
                </div>
                <h3 className={style('title-h3')}>{Title}</h3>
            </div>
        </>
    );
};