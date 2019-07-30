import './css/App.css';
import Clappr from 'clappr'
import Flickity from 'flickity'

class Zot {

  constructor(media, elem, options){

    console.log("Lib constructor called");
    this._media = media
    this._elem = elem
    this._options = options



    if(this._media === undefined)
      throw new TypeError('Missing parameter: media')

    if(this._elem === undefined)
      throw new TypeError('Missing parameter: elem')

    this.initMedia();


  }


  initMedia(){
    let options = {}
    switch(this._media){

      case "video":

        //Check video requirements
        if(this._options.source === undefined)
          throw new TypeError('Missing parameter: options.source')

        options = {
          ...this._options,
          ...{parentId: `#${this._elem.id}`}
        }
        this._player = new Clappr.Player(options);
      break
      case "gallery":

        options = {
          ...{ cellAlign: 'left', contain: true },
          ...this._options,
        }

        this._player = new Flickity(this._elem, options);
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

export default Zot;
