import React from 'react';
import './Form.css';

const Form = (props) => {
  return (
    <div className="form">
      <h1>Fill in your details</h1>
      <form className="form-grid" onSubmit={props.submit}>
        <div>
          <label htmlFor="firstname">First Name: </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            onChange={props.onChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastname">Last Name: </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            onChange={props.onChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phonenumber">Phone number: </label>
          <input 
            type="phone"
            name="phonenumber"
            id="phonenumber"
            onChange={props.onChange}
            required
          />
        </div>
        <div>
          <label htmlFor="role">Role: </label>
          <select name="role" value={props.role} onChange={props.onChange}>
            <option value="president">President</option>
            <option value="vice-president">Vice President</option>
          </select>
        </div>
        <div>
          <label htmlFor="message">Message: </label>
          <textarea
            name="message"
            id="message"
            onChange={props.onChange}
            required
          ></textarea>
        </div>
        <input className="button" type="submit" value="Send form" />{" "}
      </form>
    </div>
  );
};

export default Form;