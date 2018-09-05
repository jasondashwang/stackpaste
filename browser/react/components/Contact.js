import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact (props) {
  const handleNameChange = props.handleNameChange,
        handleEmailChange = props.handleEmailChange,
        handleMessageChange = props.handleMessageChange,
        handleSubmit = props.handleSubmit,
        handleReset = props.handleReset,
        response = props.response,
        disabled = props.disabled,
        name = props.name,
        email = props.email,
        body = props.body;

  return (
    <section id="contact" className="wrapper style1 fade-up">
      <div className="inner">
        <h2>Get in touch</h2>
        <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis lorem.</p>
        <div className="split style1">
          <section>
            <form onSubmit={handleSubmit} onReset={handleReset}>
              <div className="field half first">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" onChange={handleNameChange} value={name} disabled={disabled} />
              </div>
              <div className="field half">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" onChange={handleEmailChange} value={email} disabled={disabled} />
              </div>
              <div className="field">
                <label htmlFor="body">Message</label>
                <textarea name="body" id="body" rows="5" onChange={handleMessageChange} value={body} disabled={disabled}></textarea>
              </div>
              <ul className="actions">
                <li><button type="submit" className="button" disabled={disabled}>{response}</button></li>
                <li><button type="reset" className="button" disabled={disabled}>Reset</button></li>
              </ul>
            </form>
          </section>
          <section>
            <ul className="contact">
              <li>
                <h3>Address</h3>
                <span>12345 Somewhere Road #654<br />
                Nashville, TN 00000-0000<br />
                USA</span>
              </li>
              <li>
                <h3>Email</h3>
                <a href="#">user@untitled.tld</a>
              </li>
              <li>
                <h3>Phone</h3>
                <span>(000) 000-0000</span>
              </li>
              <li>
                <h3>Social</h3>
                <ul className="icons">
                  <li><a href="#" className="fa-twitter"><span className="label">Twitter</span></a></li>
                  <li><a href="#" className="fa-facebook"><span className="label">Facebook</span></a></li>
                  <li><a href="#" className="fa-github"><span className="label">GitHub</span></a></li>
                  <li><a href="#" className="fa-instagram"><span className="label">Instagram</span></a></li>
                  <li><a href="#" className="fa-linkedin"><span className="label">LinkedIn</span></a></li>
                </ul>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
