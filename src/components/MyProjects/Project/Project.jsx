import bemCssModules from 'bem-css-modules';

import { default as ProjectStyle } from './Project.module.scss';

const style = bemCssModules(ProjectStyle);

export const Project = ({ projectUrl, projectIcon, projectName }) => {
    return (
        <>
            <div className={style()}>
                <a className={style('link')} href={projectUrl}>
                    Link
                </a>
                <div className={style('img')}> {projectIcon}</div>
                <h3 className={style('title-h3')}>{projectName}</h3>
            </div>
        </>
    );
};
