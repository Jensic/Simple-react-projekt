import React from 'react';
import VideoInVideos from './video_in_videos';

const Videos = (props) => {
    const videos = props.videos.map((video) => {
        return (
            <VideoInVideos
            onVideoSelect={props.onVideoSelect}
            key={video.etag}
            video={video} />
        );
    });

    return (
    <ul className="col-md-4 list-group">
        {videos}
    </ul>
    );
};

export default Videos;
