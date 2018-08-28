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
        e.preventDefault();
        const term = e.target.value;
        sessionStorage.setItem('term', term); // store the current search term to local storage
        this.setState({ term : term })
    }

    handleEnter(e) { // feature: pressing enter triggers a search 
        if (e.keyCode === 13) {
            this.search()
        }
    }

    componentWillMount() { // set the previous search term in the state, if it exists in sessionStorage
        let term = sessionStorage.getItem('term'); 
        if (term) {
            this.setState({ term: term })
        }
    }

    render() {
        //let term = localStorage.getItem('term')

        return (
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} onKeyDown={this.handleEnter} value={this.state.term} />
                <a onClick={this.search}>SEARCH</a>
            </div>
        );
    }
}

export default SearchBar;