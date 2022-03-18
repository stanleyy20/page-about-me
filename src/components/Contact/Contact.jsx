import React, { Fragment } from 'react';

import bemCssModules from 'bem-css-modules';

import { default as ContactStyle } from './Contact.module.scss';

const style = bemCssModules(ContactStyle);

const Contact = () => {
  return (
    <>
      <section className={style()} id='contact'>
        <h2 className={style('title')}>
          Contact <span></span>
        </h2>
        <div className={style('wrapper')}>
          <div className={style('wrapper__info')}>
            <div className={style('wrapper__info__container')}>
              <h4>EMAIL</h4>
              <p>dstach@20gmail.com</p>
              <p>dstach@20gmail.com</p>
              <h4>CALL ME</h4>
              <p>+48 665 854 162</p>
              <p>+48 665 854 162</p>
              <h4>ADDRES</h4>
              <p>Rzeszów</p>
              <p>Rzeszów</p>
            </div>
          </div>
          <form
            className={style('wrapper__form')}
            action='https://formsubmit.co/fede92a60dc3245cd5df6610d5d08563'
            method='POST'>
            <div className={style('wrapper__form__text')}>
              <h2>Any questions?</h2>
              <p>You can contact me through a contact form or write an email directly to me</p>
            </div>
            <input className={style('wrapper__form__input')} type='text' name='Name' placeholder='Name' />
            <input className={style('wrapper__form__input')} type='email' name='Emial' placeholder='E-mail' />
            <input
              className={style('wrapper__form__input', { last: true })}
              type='text'
              name='Phone'
              placeholder='Phone'
            />
            <textarea name='Message' cols='30' rows='10' placeholder='Message'></textarea>
            <button className={style('wrapper__form__input', { button: true })} type='submit'>
              Send Massege{' '}
            </button>
          </form>
        </div>
      </section>
      <footer>
        <p>© Copyrights 2022. All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default Contact;
