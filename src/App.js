import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [currentAudio, setCurrentAudio] = useState('Heater-1');

  function handleClick(audioID, name) {
    setCurrentAudio(name);
    const audioClip = document.getElementById(audioID);
    audioClip.play();
  };

  useEffect(() => {
    let audioClip = document.getElementById('Q');
    let name = 'Heater-1';

    const checkKey = (event) => {
       if (event.keyCode === 81) {
        name = 'Heater-1';
        setCurrentAudio(name);
        audioClip = document.getElementById('Q');
        audioClip.play();
      }
      if (event.keyCode === 87) {
        name = 'Heater-2';
        setCurrentAudio(name);
        audioClip = document.getElementById('W');
        audioClip.play();
      }
      if (event.keyCode === 69) {
        name = 'Heater-3';
        setCurrentAudio(name);
        audioClip = document.getElementById('E');
        audioClip.play();
      }

      if (event.keyCode === 65) {
        name = 'Heater-4';
        setCurrentAudio(name);
        audioClip = document.getElementById('A');
        audioClip.play();
      }
      if (event.keyCode === 83) {
        name = 'Clap';
        setCurrentAudio(name);
        audioClip = document.getElementById('S');
        audioClip.play();
      }
      if (event.keyCode === 68) {
        name = 'Open-HH';
        setCurrentAudio(name);
        audioClip = document.getElementById('D');
        audioClip.play();
      }

      if (event.keyCode === 90) {
        name = 'Kick-n-Hat';
        setCurrentAudio(name);
        audioClip = document.getElementById('Z');
        audioClip.play();
      }
      if (event.keyCode === 88) {
        name = 'Kick';
        setCurrentAudio(name);
        audioClip = document.getElementById('X');
        audioClip.play();
      }
      if (event.keyCode === 67) {
        name = 'Closed-HH';
        setCurrentAudio(name);
        audioClip = document.getElementById('C');
        audioClip.play();
      }
    };
    window.addEventListener('keydown', checkKey);

    return () => {
      window.removeEventListener('keydown', checkKey);
    };
  }, []);

  return (
    <>
    <div className="page">
      <div id='drum-machine'>
        <div className='pads'>
          <div className='row'>
            <button onClick={() => handleClick('Q', 'Heater-1')} className='drum-pad' id='Heater-1'><audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' id='Q' className='clip'/>Q</button>
            <button onClick={() => handleClick('W', 'Heater-2')} className='drum-pad' id='Heater-2'><audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' id='W' className='clip'/>W</button>
            <button onClick={() => handleClick('E', 'Heater-3')} className='drum-pad' id='Heater-3'><audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' id='E' className='clip'/>E</button>
          </div>
          <div className='row'>
            <button onClick={() => handleClick('A', 'Heater-4')} className='drum-pad' id='Heater-4'><audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' id='A' className='clip'/>A</button>
            <button onClick={() => handleClick('S', 'Clap')} className='drum-pad' id='Clap'><audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' id='S' className='clip'/>S</button>
            <button onClick={() => handleClick('D', 'Open-HH')} className='drum-pad' id='Open-HH'><audio src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' id='D' className='clip'/>D</button>
          </div>
          <div className='row'>
            <button onClick={() => handleClick('Z', 'Kick-n-Hat')} className='drum-pad' id='Kick-n-Hat'><audio src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' id='Z' className='clip'/>Z</button>
            <button onClick={() => handleClick('X', 'Kick')} className='drum-pad' id='Kick'><audio src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' id='X' className='clip'/>X</button>
            <button onClick={() => handleClick('C', 'Closed-HH')} className='drum-pad' id='Closed-HH'><audio src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' id='C' className='clip'/>C</button>
          </div>
        </div>
        <div id='display'>
          <h2>{currentAudio}</h2>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
