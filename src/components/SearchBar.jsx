import React from 'react'

class SearchBar extends React.Component {
    state = {  
      InputValue: '',
    };
    
    render() {
        document.addEventListener('keydown', (e) => {
          if(e.key === 'Enter') {
            let searchValue = document.getElementById('search-input').value;
            this.setState({ InputValue: searchValue });
            console.log(this.state);
          }      
       });
      return (
        <div>
            <form>
              <h5>Title</h5>
              <div className="md-form mt-10 mb-100 text-uppercase">
                <input type="text" id="search-input" className="form-control" />
              </div>
              <i>Showing Results for: {this.state.InputValue}</i>
            </form>
      </div>
      );
    }
  
  }
  
  export default SearchBar