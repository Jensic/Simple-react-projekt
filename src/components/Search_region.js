import React, { Component } from 'react';

class SearchRegion extends Component {

    render() {
        return (
            <div className="search-input">
                <h3>Region</h3>
                <input
                value={this.props.reg}
                onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(reg) {
        this.setState({reg});
        this.props.onSearchTermChange(reg);
    }
}

export default SearchRegion;
