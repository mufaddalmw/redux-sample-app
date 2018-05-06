import React, { Component } from "react";

export default class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            term: ''
        }
        this.onInputChange = this.onInputChange.bind(this)
    }
    onInputChange(e){
        console.log(e.target.value)
        this.setState({
            term: e.target.value
        })
    }
    onFormSubmit(e){
        e.preventDefault()
        // fetch weather data
    }
    render(){
        return(
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    type="text"
                    className="form-control"
                    value={this.state.term}
                    placeholder="Get 5 days weather forecast from your favourite city"
                    onChange={this.onInputChange}
                />
                <div className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </div>
            </form>
        )
    }
}