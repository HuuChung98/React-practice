import React, { Component } from 'react'

class SearchUser extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         searchString: "",
      }
    }
    render() {
        const { onSearch } = this.props;
        const { searchString } = this.state;
        return (
            <div>
                <form className="form-inline mt-4">
                    <input 
                        className="form-control mr-sm-2" 
                        type="search" 
                        placeholder="Search" 
                        value={searchString}
                        onChange={(evt) => this.setState( { searchString: evt.target.value })}
                        aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" 
                            onClick={() => onSearch(searchString)}>Search</button>
                </form>

            </div>
        )
    }
}

export default SearchUser