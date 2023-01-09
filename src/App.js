import './App.css';

function App() {

  function handleClick() {

  }

  return (
    <>
    <div className="page">
      <div id='drum-machine'>
        <div className='pads'>
          <div className='row'>
            <button onClick={handleClick} className='drum-pad' id='Heater-1'><audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' id='Q' className='clip'/>Q</button>
            <button onClick={handleClick} className='drum-pad' id='sfsasda'><audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' id='W' className='clip'/>W</button>
            <button onClick={handleClick} className='drum-pad' id='sfsasda-1'><audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' id='E' className='clip'/>E</button>
          </div>
          <div className='row'>
            <button onClick={handleClick} className='drum-pad' id='sfsasda-1'><audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' id='A' className='clip'/>A</button>
            <button onClick={handleClick} className='drum-pad' id='sfsasda-1'><audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' id='S' className='clip'/>S</button>
            <button onClick={handleClick} className='drum-pad' id='sfsasda-1'><audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' id='D' className='clip'/>D</button>
          </div>
          <div className='row'>
            <button onClick={handleClick} className='drum-pad' id='sfsasda-1'><audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' id='Z' className='clip'/>Z</button>
            <button onClick={handleClick} className='drum-pad' id='sfsasda-1'><audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' id='X' className='clip'/>X</button>
            <button onClick={handleClick} className='drum-pad' id='sfsasda-1'><audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' id='C' className='clip'/>C</button>
          </div>
        </div>
        <div id='display'>
          <h2>Heater 1</h2>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
