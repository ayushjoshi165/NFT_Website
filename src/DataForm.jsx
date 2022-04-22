import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", name: "", address: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const { email, name, address } = this.state;
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-field">
          <label className="label" htmlFor="email">
            Email{" "}
          </label>
          <br />
          <input
            required
            name="email"
            maxLength="30"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div className="userInput"> {this.state.email}</div>
        </div>
        <div className="form-field">
          <label className="label" htmlFor="name">
            Name
          </label>{" "}
          <br />
          <input
            required
            maxLength="30"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <div className="userInput"> {this.state.name}</div>
        </div>

        <div className="form-field">
          <label className="label" htmlFor="address">
            Wallet Address
          </label>{" "}
          <br />
          <input
            required
            maxLength="20"
            name="address"
            placeholder="Address"
            value={this.state.address}
            onChange={this.handleChange}
          />
          <div className="userInput"> {this.state.address}</div>
        </div>

        <div className="form-field">
          <button>Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
