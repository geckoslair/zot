import './css/App.css';
import Clappr from 'clappr'

class App {
  constructor(media, elem, options){

    console.log("Lib constructor called");
    this._media = media
    this._elem = elem
    this._options = options
    this.initMedia();

  }
  initMedia(){
    switch(this._media){

      case "video":
        this._player = new Clappr.Player({source: "", parentId: ""});
      break
      default:
      break
    }
  }

  get media(){
    return this._media
  }

  set media(media){
    this._media = media
  }
}

export default App;
