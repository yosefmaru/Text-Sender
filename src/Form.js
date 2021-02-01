import React, {Component } from 'react'
import axios from "axios";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
const config = require('./config.json');

class Form extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this);
    }

    handleAddNumber = async (event) => {
      event.preventDefault();
      // add call to AWS API Gateway add product endpoint here
      try {
        const params = {
          "id": this.state.value,
          "phone": this.state.value
        };
        await axios.post(`${config.api.invokeUrl}`, params);
        alert('Your number was submitted: ' + this.state.value);
      }catch (err) {
        alert('This number has already been submitted!')
        console.log(`An error has occurred: ${err}`);
      }
    }

    handleChange(event) {
      // console.log(event.target);
      this.setState({value: event.value});
    }

    render() {    
        return (
          <form>
            <h1>Happy New Year!!</h1>
            <h2>Addis Kidan Evangelical Church</h2>
            <div>Please enter your Phone Number to receive your New Year's Verse </div>
            <div> </div>
            <PhoneInput
              defaultCountry="US"
              country="US"
              value={this.state.value}
              placeholder="Enter phone number"
              onChange={value => this.handleChange({value})}
              />       
            <input type="button" value="Submit" onClick={(event) => this.handleAddNumber(event)} />
          </form>
        );
      }
}

export default Form;