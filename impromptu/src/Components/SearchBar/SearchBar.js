import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {term: '' }

        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
    }

    search() {
        this.props.onSearch(this.state.term)
    }

    handleTermChange(e) {
        this.setState({ term : e.target.value })
    }

    handleEnter(e) { // feature: pressing enter triggers a search
        if (e.keyCode === 13) {
            this.search()
        }
    }

    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} onKeyDown={this.handleEnter} />
                <a onClick={this.search} >SEARCH</a>
            </div>
        );
    }
}

export default SearchBar;