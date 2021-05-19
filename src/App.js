// import logo from './logo.svg';
import './App.css';
import image_track_1 from './tracks/track_1/image.jpeg'
import image_track_2 from './tracks/track_2/image.jpeg'
import image_track_3 from './tracks/track_3/image.jpeg'
import image_track_4 from './tracks/track_4/image.jpeg'
import image_track_5 from './tracks/track_5/image.jpeg' 
import image_track_6 from './tracks/track_6/image.jpeg'
import image_track_7 from './tracks/track_7/image.jpeg'
import image_track_8 from './tracks/track_8/image.jpeg'
import image_track_9 from './tracks/track_9/image.jpeg'
import image_track_10 from './tracks/track_10/image.jpeg'
import image_track_11 from './tracks/track_11/image.jpeg'
import image_track_12 from './tracks/track_12/image.jpeg'
import image_track_13 from './tracks/track_13/image.jpeg'
import image_track_14 from './tracks/track_14/image.jpeg'
import image_track_15 from './tracks/track_15/image.jpeg'
import image_track_16 from './tracks/track_16/image.jpeg'
import image_track_17 from './tracks/track_17/image.jpeg'
import image_track_18 from './tracks/track_18/image.jpeg'
import image_track_19 from './tracks/track_19/image.jpeg'
import image_track_20 from './tracks/track_20/image.jpeg'


// import { useSpring, animated } from "react-spring";
import React from "react";

import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

var track_info = require('./tracks/track_info.json'); //(with path)




function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>
        <br></br>
        <i>
          My <b>top 20 tracks</b> as of <b>{track_info.generated_date}</b>
        </i>
        </p>
      </header>

      <div className="App-header-buffer"></div>
      
      <Container >

        <Row className="mt-5">
          <Col className="Col">
            <img src={image_track_1} className="Album-Cover" alt="logo" />
            <div className="overlay">
              <div className="overlay-text">
                  <p className="track-name">{track_info.track_1.name}</p>
                  <p className="artist-name">{track_info.track_1.artist}</p>
              </div>
            </div>
          </Col>
          <Col className="Col">
            <img src={image_track_2} className="Album-Cover" alt="logo" />
            <div className="overlay">
              <div className="overlay-text">
                  <p className="track-name">{track_info.track_2.name}</p>
                  <p className="artist-name">{track_info.track_2.artist}</p>
              </div>
            </div>
          </Col>
          <Col className="Col">
            <img src={image_track_3} className="Album-Cover" alt="logo" />
            <div className="overlay">
              <div className="overlay-text">
                  <p className="track-name">{track_info.track_3.name}</p>
                  <p className="artist-name">{track_info.track_3.artist}</p>
              </div>
            </div>
          </Col>
          <Col className="Col">
            <img src={image_track_4} className="Album-Cover" alt="logo" />
            <div className="overlay">
              <div className="overlay-text">
                  <p className="track-name">{track_info.track_4.name}</p>
                  <p className="artist-name">{track_info.track_4.artist}</p>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
        <Col className="Col">
            <img src={image_track_5} className="Album-Cover" alt="logo" />
            <div className="overlay">
              <div className="overlay-text">
                  <p className="track-name">{track_info.track_5.name}</p>
                  <p className="artist-name">{track_info.track_5.artist}</p>
              </div>
            </div>
          </Col>
          <Col className="Col">
            <img src={image_track_6} className="Album-Cover" alt="logo" />
            <div className="overlay">
              <div className="overlay-text">
                  <p className="track-name">{track_info.track_6.name}</p>
                  <p className="artist-name">{track_info.track_6.artist}</p>
              </div>
            </div>
          </Col>
          <Col className="Col">
            <img src={image_track_7} className="Album-Cover" alt="logo" />
            <div className="overlay">
              <div className="overlay-text">
                  <p className="track-name">{track_info.track_7.name}</p>
                  <p className="artist-name">{track_info.track_7.artist}</p>
              </div>
            </div>
          </Col>
          <Col className="Col">
            <img src={image_track_8} className="Album-Cover" alt="logo" />
            <div className="overlay">
              <div className="overlay-text">
                  <p className="track-name">{track_info.track_8.name}</p>
                  <p className="artist-name">{track_info.track_8.artist}</p>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
        <Col className="Col">
            <img src={image_track_9} className="Album-Cover" alt="logo" />
            <div className="overlay">
              <div className="overlay-text">
                  <p className="track-name">{track_info.track_9.name}</p>
                  <p className="artist-name">{track_info.track_9.artist}</p>
              </div>
            </div>
          </Col>
          <Col className="Col">
            <img src={image_track_10} className="Album-Cover" alt="logo" />
            <div className="overlay">
              <div className="overlay-text">
                  <p className="track-name">{track_info.track_10.name}</p>
                  <p className="artist-name">{track_info.track_10.artist}</p>
              </div>
            </div>
          </Col>
          <Col className="Col">
            <img src={image_track_11} className="Album-Cover" alt="logo" />
            <div className="overlay">
              <div className="overlay-text">
                  <p className="track-name">{track_info.track_11.name}</p>
                  <p className="artist-name">{track_info.track_11.artist}</p>
              </div>
            </div>
          </Col>
          <Col className="Col">
            <img src={image_track_12} className="Album-Cover" alt="logo" />
            <div className="overlay">
              <div className="overlay-text">
                  <p className="track-name">{track_info.track_12.name}</p>
                  <p className="artist-name">{track_info.track_12.artist}</p>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
        <Col className="Col">
            <img src={image_track_13} className="Album-Cover" alt="logo" />
            <div className="overlay">
              <div className="overlay-text">
                  <p className="track-name">{track_info.track_13.name}</p>
                  <p className="artist-name">{track_info.track_13.artist}</p>
              </div>
            </div>
          </Col>
          <Col className="Col">
            <img src={image_track_14} className="Album-Cover" alt="logo" />
            <div className="overlay">
              <div className="overlay-text">
                  <p className="track-name">{track_info.track_14.name}</p>
                  <p className="artist-name">{track_info.track_14.artist}</p>
              </div>
            </div>
          </Col>
          <Col className="Col">
            <img src={image_track_15} className="Album-Cover" alt="logo" />
            <div className="overlay">
              <div className="overlay-text">
                  <p className="track-name">{track_info.track_15.name}</p>
                  <p className="artist-name">{track_info.track_15.artist}</p>
              </div>
            </div>
          </Col>
          <Col className="Col">
            <img src={image_track_16} className="Album-Cover" alt="logo" />
            <div className="overlay">
              <div className="overlay-text">
                  <p className="track-name">{track_info.track_16.name}</p>
                  <p className="artist-name">{track_info.track_16.artist}</p>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
        <Col className="Col">
            <img src={image_track_17} className="Album-Cover" alt="logo" />
            <div className="overlay">
              <div className="overlay-text">
                  <p className="track-name">{track_info.track_17.name}</p>
                  <p className="artist-name">{track_info.track_17.artist}</p>
              </div>
            </div>
          </Col>
          <Col className="Col">
            <img src={image_track_18} className="Album-Cover" alt="logo" />
            <div className="overlay">
              <div className="overlay-text">
                  <p className="track-name">{track_info.track_18.name}</p>
                  <p className="artist-name">{track_info.track_18.artist}</p>
              </div>
            </div>
          </Col>
          <Col className="Col">
            <img src={image_track_19} className="Album-Cover" alt="logo" />
            <div className="overlay">
              <div className="overlay-text">
                  <p className="track-name">{track_info.track_19.name}</p>
                  <p className="artist-name">{track_info.track_19.artist}</p>
              </div>
            </div>
          </Col>
          <Col className="Col">
            <img src={image_track_20} className="Album-Cover" alt="logo" />
            <div className="overlay">
              <div className="overlay-text">
                  <p className="track-name">{track_info.track_20.name}</p>
                  <p className="artist-name">{track_info.track_20.artist}</p>
              </div>
            </div>
          </Col>
        </Row>
  
      </Container>

      <footer className="App-footer">
        <p>Author: Dominic Herriott<br></br>
        Checkout my <a href="domherriott.com">Website</a> and <a href="https://github.com/domherriott">GitHub</a><br></br>
        Generated using the <a href="https://developer.spotify.com/documentation/web-api/">Spotify Web Api</a></p>

      </footer>

    </div>
  );
}

// function Example(){
//   return (
//     <>
//       <Container>
//         <Row>
//           <Col sm className="py-2 border rounded">
//             <span>One of three columns</span>
//           </Col>
//           <Col sm className="py-2 border rounded">
//             <span>One of three columns</span>
//           </Col>
//           <Col sm className="py-2 border rounded">
//             <span>One of three columns</span>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// }

export default App;
// export default Example;


