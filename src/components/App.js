import React, { Component } from 'react'
import { Form,FormControl,Button } from 'react-bootstrap'
import './App.css'
import AgeStats from './AgeStats'

class App extends Component{
	constructor(){
		super();
		this.state={
			newDate:'',
			birthday:'1995-09-07',
			showStat: false
		}
	}
	changeBirthday(){
		console.log(this.state)
		this.setState({
			birthday: this.state.newDate,
			showStat:true
		})
	}
	render(){
		return(
			<div className="App">
				<Form inline>
				<h2>Enter your birthday!</h2>
					<FormControl 
					onChange={ event=> this.setState({newDate: event.target.value})}
					type="date">
					</FormControl>
					{' '}
					<Button onClick={()=> this.changeBirthday()}>Submit</Button>
				</Form>
				{ this.state.showStat===true? 
					<div className="age-stats fade"><AgeStats date={this.state.birthday}/></div> : <div></div>}
				
			</div>
			)
	}
}
export default App;