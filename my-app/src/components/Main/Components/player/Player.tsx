import ReactPlayer from 'react-player';
import './player.css';
function Player() {
  return (
    <>
      <h2 className="example-works">Примеры работ</h2>
      <div className="react-player">
        <ReactPlayer
          className="card-of-player"
          url="video/w140.mp4"
          controls
          volume={0.5}
          playing
          light="img/video-poster/w140.jpg"
          width="380px"
          height="240px"
        />
        <ReactPlayer
          className="card-of-player"
          url="video/w140.mp4"
          controls
          volume={0.5}
          playing
          light="img/video-poster/w140.jpg"
          width="380px"
          height="240px"
        />
        <ReactPlayer
          className="card-of-player"
          url="video/w140.mp4"
          controls
          volume={0.5}
          playing
          light="img/video-poster/w140.jpg"
          width="380px"
          height="240px"
        />
        <ReactPlayer
          className="card-of-player"
          url="video/w140.mp4"
          controls
          volume={0.5}
          playing
          light="img/video-poster/w140.jpg"
          width="380px"
          height="240px"
        />
      </div>
    </>
  );
}

export default Player;
