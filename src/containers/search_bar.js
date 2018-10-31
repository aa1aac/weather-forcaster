import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {fetchWeather} from '../actions/index'

class SearchBar extends Component {
    state ={
        term:''
    }
    onInputChange=this.onInputChange.bind(this)
    onFormSubmit=this.onFormSubmit.bind(this)
    onInputChange(event){
        this.setState({
            term: event.target.value
        })
    }
    onFormSubmit(event){
        // default event should be prevented
        event.preventDefault()

        // fetch the weather data
        this.props.fetchWeather(this.state.term)

        this.setState({term:''})
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit} className="input-group">
                    <input
                    onChange={this.onInputChange}
                    value ={this.state.term}
                    className="form-control" 
                    placeholder="Get a five day forecast of your favourite cities"
                    />
                    <span className="input-group-btn">
                        <button className="btn btn-secondary" type="submit">Search</button>
                    </span>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps =(dispatch)=>{
    return bindActionCreators({fetchWeather},dispatch)
}

export default connect(null,mapDispatchToProps)(SearchBar)