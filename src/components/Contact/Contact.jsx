import React from 'react';

import bemCssModules from 'bem-css-modules';

import { default as ContactStyle } from './Contact.module.scss';
import { SocialButton } from './SocialButton/SocialButton';
import { Input } from './Input/Input';
import { Info } from './Info/Info';

const style = bemCssModules(ContactStyle);

const Contact = () => {
    return (
        <>
            <section className={style()} id='contact'>
                <h2 className={style('title-h2')}>
                    Contact <span></span>
                </h2>
                <div className={style('wrapper')}>
                    <Info />

                    <form
                        className={style('form')}
                        action='https://formsubmit.co/fede92a60dc3245cd5df6610d5d08563'
                        method='POST'>
                        <div className={style('text-container')}>
                            <h3 className={style('title-h3')}>Any questions?</h3>
                            <p>
                                You can contact me through a contact form or write an email directly
                                to me
                            </p>
                        </div>
                        <div className={style('wrapper-input')}>
                            <Input type='text' name='Name' placeholder='Name' />
                            <Input type='email' name='Email' placeholder='E-mail' />
                            <Input
                                type='number'
                                name='Number'
                                placeholder='Number'
                                classModificator={{ last: true }}
                            />
                        </div>
                        <textarea
                            className={style('textarea')}
                            name='Message'
                            cols='30'
                            rows='10'
                            placeholder='Message'></textarea>
                        <button className={style('button')} type='submit'>
                            Send Massege{' '}
                        </button>
                    </form>
                </div>
                <div className={style('social')}>
                    <SocialButton />
                </div>
            </section>
            <footer className={style('footer')}>
                <p className={style('text-footer')}>© Copyrights 2022. All Rights Reserved.</p>
            </footer>
        </>
    );
};

export default Contact;
