import React from 'react'

class SearchBar extends React.Component {
    state = {  
      InputValue: '',
    };

    submitFunction(e)  {
      e.preventDefault();
      console.log(this.state);
    //   document.addEventListener('keydown', (e) => {
    //     if(e.key === 'Enter') {
    //       let searchValue = document.getElementById('search-input').value;
    //       this.setState({ InputValue: searchValue });
    //       console.log(this.state);
    //     }      
    //  });
    }
    
    render() {

      return (
        <div>
            <form onSubmit={(e) => this.submitFunction(e)}>
              <h1>Video Search</h1>
              <div  className="md-form mt-10 mb-100 text-uppercase">
                <input  type="text" id="search-input" className="form-control"  value={this.state.InputValue} onChange={ (e) => this.setState({InputValue: e.target.value}) } />
              </div>
              <h5>
                <i>Showing Results for: {this.state.InputValue}</i>
              </h5>
             </form>
             <hr />
      </div>
      );
    }
  
  }
  
  export default SearchBar