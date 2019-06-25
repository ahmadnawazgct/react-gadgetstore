import React from 'react'
import Title from '../components/Title';

export default function Contact() {
    return (
      <section className="py-5">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="contact us" />
            <form
              className="py-5"
              action="https://formspree.io/ahmadnawazgct@gmail.com"
              method="POST"
            >
              <div className="form-group">
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  placeholder="firstName"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="someone@example.com"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder="important!!!"
                />
              </div>
              <div className="form-group">
                <textarea
                  type="text"
                  name="message"
                  className="form-control"
                  placeholder="Hi buddy"
                  rows="10"
                />
              </div>
              <div className="form-group">
                <input 
                    type="submit" 
                    name="submit" 
                    value="Send" 
                    className="form-control" 
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    );
}
