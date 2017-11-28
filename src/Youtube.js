import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchInput from './components/search_input';
import SearchMaxResult from './components/search_max_results';
import SearchRegion from './components/search_region';
import Videos from './components/videos';
import VideoInfo from './components/video_info';

const API_KEY = '';
/* Still work in progress, search input dosent work as intended, after it work, I would clean up code more */

class Youtube extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null,
            term: '',
            max: '',
            reg: ''
        };
        let term22 = `${this.state.term}`;
        this.videoSearch('summer in serbia');
    }
    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
           this.setState({
                videos: videos,
                selectedVideo: videos[0],
                term: term
           });
        });
    }

    videoSearchAmount(max,term2) {
        console.log(term2);
        YTSearch({key: API_KEY, max: max, term: term2}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0],
                max: max
           });
        });
    }

    videoSearchLocation(reg) {
        console.log(reg);
        YTSearch({key: API_KEY, reg: reg}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
           });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)
        const videoSearchAmount = _.debounce((max) => { this.videoSearchAmount(max) }, 300)
        const videoSearchRegion = _.debounce((reg) => { this.videoSearchLocation(reg) }, 300)
        let term2 = `${this.state.term}`;
        console.log(term2);
        let max2 = `${this.state.max}`;
        console.log(max2);

        return (
            <div className="row">
                <SearchInput onSearchTermChange={videoSearch} />
                <SearchMaxResult onSearchTermChange={videoSearchAmount} />
                <SearchRegion onSearchTermChange={videoSearchRegion} />
                <VideoInfo video={this.state.selectedVideo} />
                <Videos
                onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                videos={this.state.videos} />
            </div>
        );
    }
}

export default Youtube;
