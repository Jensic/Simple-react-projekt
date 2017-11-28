import React, { Component } from 'react';

class SearchInput extends Component {

    render() {
        return (
            <div className="search-input">
                <h2>Search Videos</h2>
                <input
                value={this.props.term}
                onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchInput;
