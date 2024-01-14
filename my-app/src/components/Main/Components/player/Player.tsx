import ReactPlayer from 'react-player';
import './player.css';
function Player() {
  return (
    <>
      <h2 className="example-works">Видео работ с разными марками авто</h2>
      <div className="react-player">
        <ReactPlayer
          className="card-of-player"
          title="Mercedes W140"
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
          title="BMW F01"
          url="video/bmw-f01.mp4"
          controls
          volume={0.5}
          playing
          light="img/video-poster/bmw-f01-2.jpg"
          width="380px"
          height="240px"
        />
        <ReactPlayer
          className="card-of-player"
          title="Honda Civic"
          url="video/honda-civic.mp4"
          controls
          volume={0.5}
          playing
          light="img/video-poster/honda-civic.jpg"
          width="380px"
          height="240px"
        />
        <ReactPlayer
          title="Subaru Forester"
          className="card-of-player"
          url="video/subaru-forester.mp4"
          controls
          volume={0.5}
          playing
          light="img/video-poster/subaru-forester.jpg"
          width="380px"
          height="240px"
        />
        <ReactPlayer
          title="Nissan Qashqai"
          className="card-of-player"
          url="video/nissan-quash.mp4"
          controls
          volume={0.5}
          playing
          light="img/video-poster/nissan-qash.jpg"
          width="380px"
          height="240px"
        />
        <ReactPlayer
          title="Skoda Octavia"
          className="card-of-player"
          url="video/skoda.mp4"
          controls
          volume={0.5}
          playing
          light="img/video-poster/skoda-octavia.jpg"
          width="380px"
          height="240px"
        />
        <ReactPlayer
          title="BMW E39"
          className="card-of-player"
          url="video/w140.mp4"
          controls
          volume={0.5}
          playing
          light="img/video-poster/bmw-e39.png"
          width="380px"
          height="240px"
        />
        <ReactPlayer
          title="Mercedes Sprinter"
          className="card-of-player"
          url="video/w140.mp4"
          controls
          volume={0.5}
          playing
          light="img/video-poster/meredes-sprinter.jpg"
          width="380px"
          height="240px"
        />
      </div>
      <div className="button-div">
        <a className="do-form" href="https://www.tiktok.com/@pervij_svarnoj" rel="noreferrer" target="_blank">
          Смотреть больше
        </a>
      </div>
    </>
  );
}

export default Player;
