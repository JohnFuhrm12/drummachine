import './App.css';

function App() {
  return (
    <>
    <div className="page">
      <div id='drum-machine'>
        <div className='pads'>
          <div className='row'>
            <button className='drum-pad'>Q</button>
            <button className='drum-pad'>W</button>
            <button className='drum-pad'>E</button>
          </div>
          <div className='row'>
            <button className='drum-pad'>A</button>
            <button className='drum-pad'>S</button>
            <button className='drum-pad'>D</button>
          </div>
          <div className='row'>
            <button className='drum-pad'>Z</button>
            <button className='drum-pad'>X</button>
            <button className='drum-pad'>C</button>
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
