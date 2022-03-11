import React, {Component} from "react";
import imageList from "../ImageList/image-list";

class SearchBar extends Component{
    state = {
        term: ''
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.term);
    }

    render() {
        const {term} = this.state;

        return (
            <div className="ui segment">
                <form className="ui form"
                      onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            onChange={(event) => {this.setState({term: event.target.value})}}
                            value={term}
                        />
                    </div>
                    {term.length === 0 ? 'Field is empty' : ''}
                </form>
            </div>
        );
    }
}

export default SearchBar;