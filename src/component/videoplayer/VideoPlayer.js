import ReactPlayer from "react-player";
import "./VideoPlayer.css";

const youtubeUrl = "https://www.youtube.com/watch?v=";
// const facebookUrl = "https://fb.watch/";
// const douyinUrl = "https://www.douyin.com/video/";
function VideoPlayer({ videoID }) {
    return (
        <div class="playerWrapper">
            <ReactPlayer class="react-player" controls={true} url={`${youtubeUrl}${videoID}`} height="100%" width="100%" />
            {/* <ReactPlayer class="react-player" controls={true} url={`${facebookUrl}${videoID}`} height="100%" width="100%" /> */}
            {/* <ReactPlayer class="react-player" controls={true} url={`${douyinUrl}${videoID}`} height="100%" width="100%" /> */}
        </div>
    );
}

export default VideoPlayer;