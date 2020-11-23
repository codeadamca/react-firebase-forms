import React from 'react';

class ContactForm extends React.Component {
    constructor(props) {
      
      super(props);

      this.state = {
        name: '',
        email: '',
        subject: '',
        message: '',
        errorMessage: ''
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

    }
  
    handleInputChange(event) {
      
      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });

    }

    handleSubmit( event ) {

      fetch("firebase-function-url",{
        method: 'post',
        body:    JSON.stringify(this.state),
        headers: { 'Content-Type': 'application/json' },
      })
      .then(res => res.json())
      .then(
        (result) => {
          
          this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
            errorMessage: 'Message has been emailed!'
          });
          
        },
        (error) => {
          
          console.log(error);
          
        }
      );
      
      event.preventDefault();

    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Email:
            <input
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Subject:
            <select 
              name="subject" 
              value={this.state.value} 
              onChange={this.handleInputChange}>
              <option></option>
              <option value="support">Support</option>
              <option value="sales">Sales</option>
            </select>
          </label>
          <br />
          <label>
            Message:
            <textarea
              name="message"
              value={this.state.value}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <input 
            type="submit"
            value="Submit" />
          <div id="errorMessage">{this.state.errorMessage}</div>
        </form>
      );
    }
  }

export default ContactForm;
