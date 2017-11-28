import React, { Component } from 'react';

class SearchMaxResults extends Component {

    render() {
        return (
            <div className="search-input">
                <h3>Number of videos</h3>
                <input
                value={this.props.max}
                onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(max) {
        this.setState({max});
        this.props.onSearchTermChange(max);
    }
}

export default SearchMaxResults;
