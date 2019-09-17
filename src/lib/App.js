import './css/App.css';
import Clappr from 'clappr'
import Flickity from 'flickity'

class Zot {

  constructor(media, elem, options){

    this._media = media
    this._elem = elem
    this._options = options


    if(this._media === undefined)
      throw new TypeError('Missing parameter: media')

    if(this._elem === undefined)
      throw new TypeError('Missing parameter: elem')

    if(this._options.source === undefined)
      throw new TypeError('Missing parameter: options.source')

    this.initMedia();


  }


  initMedia(){
    let options = {}

    switch(this._media){

      case "video":
      case "audio":


        options = {
          ...this._options,
          ...{parentId: `#${this._elem.id}`}
        }
        this._player = new Clappr.Player(options);

        document.addEventListener('zotPlay', (e) => this.aPlayerIsPlaying(e))
        this._player.on('play', () => this.managePlayEvent())

      break
      case "gallery":

        if(this._elem.tagName !== "DIV" && this._elem.tagName !== "UL")
          throw new TypeError('Wrong tagName: element must be a div or ul')

        if(!Array.isArray(this._options.source))
          throw new TypeError('Wrong parameter: options.source is not an array')

        this.appendSlide()

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

  aPlayerIsPlaying(e){
    if(this._player !== e.detail.player){
      this._player.pause()
    }
  }

  managePlayEvent(e){
    document.dispatchEvent(new CustomEvent('zotPlay', {'detail': {
        player: this._player
    }}))
  }

  appendSlide(){
    this._options.source.forEach((element, index) => {
      let slide = null

      switch(this._elem.tagName){
        case "DIV":
          slide = document.createElement('img')
          slide.setAttribute('data-flickity-lazyload', element)
          this._elem.appendChild(slide)
        break

        default:
        break
      }

    });
  }


  get media(){
    return this._media
  }

  set media(media){
    this._media = media
  }
}

export default Zot;
