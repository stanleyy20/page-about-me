import React, { Fragment } from 'react';

import bemCssModules from 'bem-css-modules';

import { default as ContactStyle } from './Contact.module.scss';

const style = bemCssModules(ContactStyle);

const Contact = () => {
    console.log('Przerobić Contact na  mniejsze komponenty');

    return (
        <>
            <section className={style()} id='contact'>
                <h2 className={style('title-h2')}>
                    Contact <span></span>
                </h2>
                <div className={style('wrapper')}>
                    <div className={style('info')}>
                        <div className={style('container')}>
                            <h4>EMAIL</h4>
                            <p>dstach@20gmail.com</p>
                            <p>admin@stanley20.site</p>
                            <h4>CALL ME</h4>
                            <p>+48 665 854 162</p>
                            <h4>ADDRES</h4>
                            <p>Rzeszów</p>
                        </div>
                    </div>
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
                            <input
                                className={style('input')}
                                type='text'
                                name='Name'
                                placeholder='Name'
                            />
                            <input
                                className={style('input')}
                                type='email'
                                name='Emial'
                                placeholder='E-mail'
                            />
                            <input
                                className={style('input', { last: true })}
                                type='number'
                                name='Phone'
                                placeholder='Phone'
                            />
                        </div>
                        <textarea
                            className={style('textarea')}
                            name='Message'
                            cols='30'
                            rows='10'
                            placeholder='Message'></textarea>
                        <button className={style('input', { button: true })} type='submit'>
                            Send Massege{' '}
                        </button>
                    </form>
                </div>
                <div className={style('social')}>
                    <a className={style('social-btn')} href='https://www.facebook.com/stanleyyy20/'>
                        {' '}
                        <i className='fa-brands fa-facebook-f'></i>
                    </a>
                    <a
                        className={style('social-btn')}
                        href='https://www.instagram.com/stanleyyy_20/'>
                        <i className='fa-brands fa-instagram'></i>
                    </a>
                    <a
                        className={style('social-btn')}
                        href='https://www.linkedin.com/in/dawid-stach-873620232/'>
                        {' '}
                        <i className='fa-brands fa-linkedin-in'></i>
                    </a>
                    <a className={style('social-btn')} href='https://github.com/stanleyy20'>
                        {' '}
                        <i className='fa-brands fa-github'></i>
                    </a>
                    <a
                        className={style('social-btn')}
                        href='https://twitter.com/Dawid30998226?t=1YeSRO8Yu3bIT3TMFbrWjw&s=09&fbclid=IwAR0-5YTdRUa2Ehd2d7fg6pubgfr6CSSber9kPG241ifEy4jH6HFTyHjHRrE'>
                        {' '}
                        <i className='fa-brands fa-twitter'></i>
                    </a>
                </div>
            </section>
            <footer className={style('footer')}>
                <p className={style('text-footer')}>© Copyrights 2022. All Rights Reserved.</p>
            </footer>
        </>
    );
};

export default Contact;
