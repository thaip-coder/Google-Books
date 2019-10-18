import React, { Component } from "react";
import axios from "axios";


class Home extends Component {

  state = {
    value: "",
    results: []
  };

  handleOnChange = (event) => {
    this.setState({
      value: event.target.value
    }); 
  };
  
  handleSearch = (event) => {
    event.preventDefault();
    const input = this.state.value
    console.log(input);
    axios.get("/search/" + input).then((response) => {
      console.log(response.data.items);
      console.log(this.state.results);
      this.setState({ results: response.data.items });
      
    })
    .catch(function(err) {
      console.log(err)
    }); 
  };
  
  

  render() { 
    return (
      <div>
        <h1 className="jumbotron">Home Page</h1>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Search</label>
            <input type="text" className="form-control" onChange={this.handleOnChange} />
            <small id="emailHelp" className="form-text text-muted">Search your book</small>
          </div>
          
          <button type="submit" onClick={this.handleSearch} className="btn btn-primary">Submit</button>
        </form>

      </div>
    );
  }
}

export default Home;