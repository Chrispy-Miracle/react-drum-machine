
const beats = [
    {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  }, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  }, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  }, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  }, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  }, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  }, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  }, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  }, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },
  ]
  
class Drumpads extends React.Component {
  constructor(props) {
    super(props);
    

    function handleClick(props) {
      const audio = new Audio(props.data.url);
      audio.current.play();
      audio.currentTime = 0;
      props.updateDisplayText(`${props.data.id}`);
        }
  
    // this.handleKeyPress = this.handleKeyPress.bind(this);
    
//     componentDidMount() {
//       document.addEventListener("onKeydown", this.handleKeyPress);
//     }
//    componentWillUnmount() {
//       document.removeEventListener("onKeydown", this.handleKeyPress);
//     }
  
    // handleKeyPress(e) {
    //     if ( e.key.toUpperCase() === props.keyCode) {
    //     const keyedAudio = document.getElementById(this.props.keyTrigger);
    //     keyedAudio.play();
    //     keyedAudio.currentTime = 0;
    //     props.updateDisplayText(`${this.props.id}`);
    //       }
    //     }
    window.document.addEventListener('keydown', (e) => {
      if ( e.key.toUpperCase() === props.keyCode) {
        this.audio.current.play();
    };
  
  
      return (
        <div> 
          <button 
          class="drum-pad" 
          id={props.data.id} 
          onClick={handleClick}        
          onKeyPress={handleKeyPress}
          >{props.data.keyTrigger}
            <audio 
            id={props.data.keyTrigger} 
            class="clip"  
            src={props.data.url} 
            type="audio/mp3" />
          </button>
        </div>                             
      )}
      
    );

  }
  
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayText: this.props.displayTextDefault
      }    
  this.updateDisplayText = this.updateDisplayText.bind(this);

  }    
    
    updateDisplayText(id) {
      this.setState({
        displayText: id
      });
       }
    render() {
      return (     
        <div id='wrapper'> 
          <h1>Drum Machine</h1>
          <div id="display" displayTextDefault="Drop a funky beat!">{this.state.displayText}
         </div> 
          <div class="grid" id="drumpads">
          {beats.map((data) => (
          <Drumpads data={data} 
          // key={data.keyTrigger} 
          // id = {data.id}
          updateDisplayText = {this.updateDisplayText}
          />))}
          </div> 
        </div>
        );
    };
  }
  
  ReactDOM.render(<App />,
    document.getElementById('drum-machine')
  );

