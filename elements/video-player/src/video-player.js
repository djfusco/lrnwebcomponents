/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, css } from "lit-element/lit-element.js";
import { SimpleColors } from "@lrnwebcomponents/simple-colors/simple-colors.js";
import { SchemaBehaviors } from "@lrnwebcomponents/schema-behaviors/schema-behaviors.js";
import { MediaBehaviorsVideo } from "@lrnwebcomponents/media-behaviors/media-behaviors.js";
import "@lrnwebcomponents/a11y-media-player/a11y-media-player.js";
/**
 * `video-player`
 * `A simple responsive video player with ridiculously powerful backing`
 *
 * @microcopy - language worth noting:
 * - `video source` - url / link to video file
 *
 * @demo demo/index.html
 * @element video-player
 */
class VideoPlayer extends MediaBehaviorsVideo(SchemaBehaviors(SimpleColors)) {
  /* REQUIRED FOR TOOLING DO NOT TOUCH */
  /**
   * Store tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  static get tag() {
    return "video-player";
  }
  constructor() {
    super();
    this.crossorigin = "anonymous";
    this.dark = false;
    this.darkTranscript = false;
    this.disableInteractive = false;
    this.hideTimestamps = false;
    this.hideTranscript = false;
    this.lang = "en";
    this.linkable = false;
    this.preload = "metadata";
    this.sources = [];
    this.stickyCorner = "top-right";
    this.tracks = [];
    this.setSourceData();
    this.observer.observe(this, {
      childList: true,
      subtree: false
    });
  }
  /**
   * life cycle, element is removed from the DOM
   */
  disconnectedCallback() {
    if (this.observer && this.observer.disconnect) this.observer.disconnect();
    super.disconnectedCallback();
  }
  /**
   * gets the HTML5 `audio` or `video` children
   * @readonly
   * @returns {object} HTML template
   */
  get html5() {
    return html`
      ${this.sourceData
        .filter(item => item.type !== "youtube")
        .map(sd => {
          html`
            <source
              .src="${sd.src || undefined}"
              .type="${sd.type || undefined}"
            />
          `;
        })}
      ${this.trackData.map(track => {
        `<track
          .src="${track.src || undefined}"
          .kind="${track.kind || undefined}"
          .label="${track.label || undefined}"
          .srclang="${track.lang || undefined}"
        />`;
      })}
    `;
  }

  /**
   * Computes whether uses iframe
   * @readonly
   * @returns {Boolean}
   */
  get iframed() {
    // make sure we take into account sandboxing as well
    // so that we can manage state effectively
    if (
      this.sourceData &&
      this.sourceData.length > 0 &&
      this.sourceData[0] !== undefined &&
      window.MediaBehaviors.Video._sourceIsIframe(this.sourceData[0].src) &&
      !this.sandboxed
    ) {
      return true;
    }
    return false;
  }

  /**
   * Determines if compatible with `a11y-media-player`
   * @readonly
   * @returns {Boolean}
   */
  get isA11yMedia() {
    if (
      !this.sandboxed &&
      (this.sourceType == "youtube" ||
        this.sourceType == "local" ||
        this.sourceData.length < 1)
    ) {
      return true;
    }
    return false;
  }
  /**
   * mutation observer for tabs
   * @readonly
   * @returns {object}
   */
  get observer() {
    let callback = () => this.setSourceData();
    return new MutationObserver(callback);
  }

  /**
   * Compute sandboxed status
   * @readonly
   * @returns {Boolean}
   */
  get sandboxed() {
    // we have something that would require an iframe
    // see if we have a local system that would want to sandbox instead
    if (
      this.sourceData &&
      this.sourceData.length > 0 &&
      typeof this.sourceData[0] !== undefined &&
      window.MediaBehaviors.Video._sourceIsIframe(this.sourceData[0].src)
    ) {
      // fake creation of a webview element to see if it's valid
      // or not.
      let test = document.createElement("webview");
      // if this function exists it means that our deploy target
      // is in a sandboxed environment and is not able to run iframe
      // content with any real stability. This is beyond edge case but
      // as this is an incredibly useful tag we want to make sure it
      // can mutate to work in chromium and android environments
      // which support such sandboxing
      if (typeof test.reload === "function") {
        return true;
      }
    }
    return false;
  }

  /**
   * Gets cleaned source list from source and sources properties
   * @readonly
   * @returns {Array} Eg. `[{ "src": "path/to/media.mp3", "type": "audio/mp3"}]`
   */
  get sourceProperties() {
    let temp =
      typeof this.sources === "string"
        ? JSON.parse(this.sources)
        : this.sources.slice();
    if (this.source) temp.unshift({ src: this.source });
    if (temp && temp.length > 0)
      temp.forEach(item => {
        item.type = item.type || this._computeMediaType(item.src);
        item.src = this._computeSRC(item.src, item.type);
      });
    return temp;
  }

  /**
   * Gets cleaned track list from track and tracks properties
   * @readonly
   * @returns {Array} Eg. `[{ "src": "path/to/track.vtt", "label": "English", "srclang": "en", "kind": "subtitles"}]`
   */
  get trackProperties() {
    let temp =
      typeof this.tracks === "string"
        ? JSON.parse(this.tracks)
        : this.tracks.slice();
    if (this.track) temp.unshift({ src: this.track });
    if (temp && temp.length > 0)
      temp.forEach(item => {
        item.srclang = item.srclang || this.lang;
        item.kind = item.kind || "subtitles";
        item.label = item.label || item.kind || item.lang;
      });
    return temp;
  }

  /**
   * Source properties and slotted sources
   * @readonly
   * @returns {Array} List of source objects
   */
  get sourceData() {
    let temp = this.sourceProperties.slice(),
      slotted = this.querySelectorAll("video source, audio source, iframe");
    slotted.forEach(slot => {
      this.sources.unshift({
        src: slot.src,
        type: slot.type || this._computeMediaType(slot.src)
      });
    });
    return temp;
  }

  get audioOnly() {
    let videos = this.sourceData.filter(
      item => item.type.indexOf("audio") > -1
    );
    return videos.length > 1;
  }

  get standAlone() {
    return (
      this.trackData === undefined ||
      this.trackData === null ||
      this.trackData.length < 1
    );
  }

  /**
   * Gets type of source based on src attribute
   * @returns {String} `local`, `vimeo`, `youtube`, etc.
   */
  get sourceType() {
    if (
      this.sourceData &&
      this.sourceData.length > 0 &&
      this.sourceData[0] !== undefined &&
      typeof this.sourceData[0].src !== typeof undefined
    ) {
      return window.MediaBehaviors.Video.getVideoType(this.sourceData[0].src);
    } else {
      return null;
    }
  }

  /**
   * Gets cleaned track list
   * @readonly
   * @returns {Array} Eg. `[{ "src": "path/to/track.vtt", "label": "English", "srclang": "en", "kind": "subtitles",}]`
   */
  get trackData() {
    let temp =
        typeof this.tracks === "string"
          ? JSON.parse(this.tracks).slice()
          : this.tracks.slice(),
      slotted = this.querySelectorAll("video track, audio track");
    slotted.forEach(slot => {
      let track = { src: slot.src };
      if (slot.lang) track.lang = slot.lang;
      if (slot.srclang) track.srclang = slot.srclang;
      if (slot.label) track.label = slot.label;
      if (slot.kind) track.kind = slot.kind;
      this.tracks.unshift(track);
      slot.remove();
    });
    if (this.track !== undefined && this.track !== null && this.track !== "")
      temp.push({
        src: this.track,
        srclang: this.lang,
        label: this.lang === "en" ? "English" : this.lang,
        kind: "subtitles"
      });
    return temp;
  }

  /**
   * Gets Youtube ID from source string
   * @readonly
   * @returns {String}
   */
  get youtubeId() {
    if (
      this.sourceData &&
      this.sourceData[0] &&
      this.sourceType === "youtube"
    ) {
      return this._computeSRC(this.sourceData[0].src).replace(
        /.*\/embed\//,
        ""
      );
    }
    return;
  }

  /**
   * gets an id for a11y-media-player
   * @readonly
   * @returns {string} an id for player
   */
  get playerId() {
    return `${this.id || this.schemaResourceID}-media`;
  }

  /**
   * Compute media type based on source, i.e. 'audio/wav' for '.wav'
   */
  _computeMediaType(source) {
    let audio = ["aac", "flac", "mp3", "oga", "wav"],
      video = ["mov", "mp4", "ogv", "webm"],
      type = "",
      findType = (text, data) => {
        data.forEach(item => {
          if (
            type === "" &&
            typeof source !== undefined &&
            source !== null &&
            source.toLowerCase().indexOf("." + item) > -1
          ) {
            type = text + "/" + item;
          }
        });
      };
    findType("audio", audio);
    findType("video", video);
    return type;
  }

  /**
   * Compute src from type / source combo.
   * Type is set by source so this ensures a waterfall
   * of valid values.
   */
  _computeSRC(source, type) {
    if (source !== null && typeof source !== undefined) {
      // ensure that this is a valid url / cleaned up a bit
      type = type || window.MediaBehaviors.Video.getVideoType(source);
      source = window.MediaBehaviors.Video.cleanVideoSource(source, type);
      if (type == "vimeo") {
        if (this.vimeoTitle) {
          source += "?title=1";
        } else {
          source += "?title=0";
        }
        if (this.vimeoByline) {
          source += "&byline=1";
        } else {
          source += "&byline=0";
        }
        if (this.vimeoPortrait) {
          source += "&portrait=1";
        } else {
          source += "&portrait=0";
        }
      } else if (type == "dailymotion") {
        source += "&ui-start-screen-info=false";
        source += "&ui-logo=false";
        source += "&sharing-enable=false";
        source += "&endscreen-enable=false";
      }
    }
    return source;
  }
  /**
   * postProcesshaxNodeToContent - clean up so we don't have empty array data
   */
  postProcesshaxNodeToContent(content) {
    content = content.replace(' sources="[]",', "");
    content = content.replace(' tracks="[]",', "");
    return content;
  }
  /**
   * triggers an update of sourceData property when slot changes
   *
   * @memberof VideoPlayer
   */
  setSourceData() {
    let temp = this.source;
    this.source = "";
    this.source = temp;
  }
}
window.customElements.define(VideoPlayer.tag, VideoPlayer);
export { VideoPlayer };
