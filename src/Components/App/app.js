import React, {Component} from "react";
import SearchBar from "../SearchBar/search-bar";
import './app.css'
import requests from '../../requests/requests'
import ImageList from "../ImageList/image-list";

export default class App extends Component{
    state = {
        data: []
    }

   onSearchSubmit =  async (term) => {
        const response = await requests.get('/search/photos', {
            params: {query: term},

        })
        this.setState({data: response.data.results})
    }

    render() {
        return (<div className={'ui container app'}>
            <SearchBar  onSearchSubmit={this.onSearchSubmit}/>
            <ImageList data={this.state.data}/>
        </div>)
    }
}