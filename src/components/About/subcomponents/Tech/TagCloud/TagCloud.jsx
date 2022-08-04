import { useRef, useEffect } from 'react';

import TagCloud from 'TagCloud';

import { knownTechnologies } from '../../../../../helpers/techData';

const AnimationTech = () => {
    const tagDiv = useRef(null);

    const enabled = true;

    useEffect(() => {
        if (enabled) {
            const tagCloud = new TagCloud(tagDiv.current, knownTechnologies, {
                maxSpeed: 'slow',
                initSpeed: 'slow',
                keep: false,
                containerClass: 'tag-width',
                radius: '160',
                direction: Math.floor(Math.random() * 720 - 360),
            });
            return () => {
                tagCloud.destroy();
            };
        }
    }, []);

    if (!enabled) {
        return (
            <ul className='list-style'>
                {knownTechnologies.map((el) => (
                    <li key={el}>{el}</li>
                ))}
            </ul>
        );
    }

    return <div className='tag-container' ref={tagDiv} />;
};

export default AnimationTech;
