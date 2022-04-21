import React,{ Component } from 'react'
import Thankyou from './Thankyou';
class Form extends Component{
constructor(props){
	super(props)
	this.state = { email:'',name:'',  address:''}
	this.handleChange = this.handleChange.bind(this)
	this.handleSubmit = this.handleSubmit.bind(this)
}

// Form submitting logic, prevent default page refresh
handleSubmit(event){
	const { email, name, address } = this.state
    event.preventDefault()
    
	// alert(`
	
	// Email : ${email}
	// Name : ${name}
	// Address : ${address}
	// `)
}

// Method causes to store all the values of the
// input field in react state single method handle
// input changes of all the input field using ES6
// javascript feature computed property names
handleChange(event){
	this.setState({
	// Computed property names
	// keys of the objects are computed dynamically
	[event.target.name] : event.target.value
	})
}

// Return a controlled form i.e. values of the
// input field not stored in DOM values are exist
// in react component itself as state
render(){
	return(
	<form  onSubmit={this.handleSubmit}>
		<div className="form-field">
		<label className="label" htmlFor='email'>Email </label>
		<br/>
		<input
        required
            name='email'
            maxLength="30"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
			placeholder='Email'
			value = {this.state.email}
			onChange={this.handleChange}
		/>
        <div className="userInput">  {this.state.email}</div>
		</div>
		<div className="form-field">
		<label className="label" htmlFor='name'>Name</label>  <br/>
		<input
        required
        maxLength="30"
       
			name='name'
			placeholder='Name'
			value={this.state.name}
			onChange={this.handleChange}
		/>
         <div className="userInput">  {this.state.name}</div>
		</div>
		
		<div className="form-field">
		<label className="label" htmlFor='address'>Wallet Address</label>  <br/>
		<input
        required
        maxLength="20"
			name='address'
			placeholder='Address'
			value={this.state.address}
			onChange={this.handleChange}
		/>
		<div className="userInput">  {this.state.address}</div>
       
		</div>
		
		<div className="form-field">
		<button >Submit</button>
		</div>

      
      
	</form>
	)
}
}

export default Form
