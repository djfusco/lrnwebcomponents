import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import { afterNextRender } from "@polymer/polymer/lib/utils/render-status.js";
import "@polymer/iron-ajax/iron-ajax.js";
import "@polymer/iron-scroll-threshold/iron-scroll-threshold.js";
import "@polymer/iron-image/iron-image.js";
import "@polymer/paper-button/paper-button.js";
import "@polymer/polymer/lib/elements/dom-repeat.js";
import "../elmsln-base-deps.js";
import "@lrnwebcomponents/elmsln-loading/elmsln-loading.js";
import "@lrnwebcomponents/materializecss-styles/materializecss-styles.js";
class LrnappGalleryGrid extends PolymerElement {
  connectedCallback() {
    super.connectedCallback();
    afterNextRender(this, function() {
      this.addEventListener("click", this._triggerDialog.bind(this));
    });
  }
  disconnectedCallback() {
    this.removeEventListener("click", this._triggerDialog.bind(this));
    super.disconnectedCallback();
  }
  static get template() {
    return html`
      <style include="materializecss-styles">
        :host {
          display: block;
        }
        paper-button {
          padding: 0;
          margin: 0;
          min-width: 1rem;
        }
        #details {
          opacity: 0.5;
          position: absolute;
          bottom: 0;
          right: 0;
          margin: 0 1rem 0 0;
          background-color: white;
          padding: 0.5em;
        }
        #details:hover {
          opacity: 1;
        }
        #details span {
          font-size: 0.6em;
          font-weight: normal;
        }
        #details .comment-on-work {
          font-size: 0.8em;
          background-color: white;
        }
      </style>
      <iron-ajax
        id="ajax"
        url="[[sourcePath]]"
        params=""
        handle-as="json"
        last-response="{{submissions}}"
      ></iron-ajax>
      <iron-scroll-threshold on-lower-threshold="_loadMoreData" id="threshold">
        <iron-list grid items="[[_toArray(submissions.data)]]" as="item">
          <template
            is="dom-repeat"
            items="[[_toArray(item.images)]]"
            as="image"
          >
            <paper-button>
              <iron-image
                preload
                open-url="{{item.url}}"
                title="{{item.title}}"
                alt="{{item.title}}"
                src="{{image.src}}"
                author="{{item.author}}"
                comments="{{item.comments}}"
                height="{{image.height}}"
                width="{{image.width}}"
              ></iron-image>
            </paper-button>
          </template>
        </iron-list>
      </iron-scroll-threshold>
      <paper-dialog id="dialog">
        <paper-dialog-scrollable id="dialogResponse">
          <iron-image src$="[[activeImage]]"></iron-image>
          <div id="details">
            <div class="title">
              <span>Title:</span> <span>{{{activeTitle}}}</span>
            </div>
            <div class="author">
              <span>Author:</span> <span>{{activeAuthor}}</span>
            </div>
            <div class="comments">
              <span>Comments:</span> <span>{{activeComments}}</span>
            </div>
            <div class="comment-on-work">
              <a href$="[[activeUrl]]">
                <paper-button raised>Comment on this work</paper-button>
              </a>
            </div>
          </div>
        </paper-dialog-scrollable>
      </paper-dialog>
    `;
  }
  static get tag() {
    return "lrnapp-gallery-grid";
  }
  static get properties() {
    return {
      elmslnCourse: {
        type: String
      },
      elmslnSection: {
        type: String
      },
      basePath: {
        type: String
      },
      csrfToken: {
        type: String
      },
      endPoint: {
        type: String
      },
      sourcePath: {
        type: String,
        notify: true
      },
      submissions: {
        type: Array,
        notify: true
      },
      activeImage: {
        type: String,
        reflectToAttribute: true,
        notify: true
      },
      activeTitle: {
        type: String,
        reflectToAttribute: true,
        notify: true
      },
      activeAuthor: {
        type: String,
        reflectToAttribute: true,
        notify: true
      },
      activeComments: {
        type: String,
        reflectToAttribute: true,
        notify: true
      },
      activeUrl: {
        type: String,
        reflectToAttribute: true,
        notify: true
      }
    };
  }
  /**
   * When someone clicks if there is a url, then we need to
   * remote load whatever is in that url.
   */
  _triggerDialog(e) {
    // make sure we found an image as we're going through here
    if (e.target.nextElementSibling.nodeName == "IMG") {
      this.activeImage = e.target.nextElementSibling.src;
      this.activeTitle = e.target.parentElement.title;
      this.activeAuthor = e.target.parentElement.author;
      this.activeComments = e.target.parentElement.comments;
      this.activeUrl = e.target.parentElement.openUrl;
      this.shadowRoot.querySelector("#dialog").toggle();
    }
  }
  _loadMoreData(e) {
    this.shadowRoot.querySelector("#ajax").generateRequest();
    this.shadowRoot.querySelector("#threshold").clearTriggers();
  }
  /**
   * Simple way to convert from object to array.
   */
  _toArray(obj) {
    if (obj == null) {
      return [];
    }
    return Object.keys(obj).map(function(key) {
      return obj[key];
    });
  }
}
window.customElements.define(LrnappGalleryGrid.tag, LrnappGalleryGrid);
export { LrnappGalleryGrid };
