/**
 * Copyright 2020 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { html, css } from "lit-element/lit-element.js";
import { SimpleColors } from "@lrnwebcomponents/simple-colors/simple-colors.js";
import "@lrnwebcomponents/responsive-utility/responsive-utility.js";

/**
 * `lrndesign-timeline`
 * `an element that displays events on a timeline`
 *
 * @element lrndesign-timeline
 * @lit-html
 * @lit-element
 * @demo demo/index.html
 */
class LrndesignTimeline extends SimpleColors {
  /* REQUIRED FOR TOOLING DO NOT TOUCH */

  static get tag() {
    return "lrndesign-timeline";
  }

  // life cycle
  constructor() {
    super();
    this.events = [];
    this.timelineSize = "xs";
  }

  connectedCallback() {
    super.connectedCallback();

    window.ResponsiveUtility.requestAvailability();
    window.dispatchEvent(
      new CustomEvent("responsive-element", {
        detail: {
          element: this,
          attribute: "timeline-size",
          relativeToParent: true,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1600
        }
      })
    );

    this.updateTimeline();
    this.observer.observe(this, {
      childList: true,
      subtree: false
    });
  }
  disconnectedCallback() {
    if (this.observer && this.observer.disconnect) this.observer.disconnect();
    if (super.disconnectedCallback) super.disconnectedCallback();
  }

  /**
   * handle updates
   */
  updated(changedProperties) {
    super.updated(changedProperties);
    changedProperties.forEach((oldValue, propName) => {
      if (propName === "timelineTitle" && this.title && !this.timelineTitle)
        this.timelineTitle = this.title;
    });
    this.updateTimeline();
  }
  /**
   * events container element
   *
   * @readonly
   * @memberof LrndesignTimeline
   */
  get eventsElement() {
    return this.shadowRoot && this.shadowRoot.querySelector("#events")
      ? this.shadowRoot.querySelector("#events")
      : false;
  }

  /**
   * ensures that events list is an Array
   *
   * @readonly
   * @memberof LrndesignTimeline
   */
  get eventsList() {
    let events =
      typeof this.events === "string" ? JSON.parse(this.events) : this.events;
    return events || [];
  }

  /**
   * mutation observer for tabs
   * @readonly
   * @returns {object}
   */
  get observer() {
    let callback = () => this.updateTimeline();
    return new MutationObserver(callback);
  }
  _setScroll(e) {
    let el = e.path[0],
      parent = e.path[0].parentNode;
    parent.scroll({
      top: el.offsetTop,
      left: 0,
      behavior: "smooth"
    });
  }

  /**
   * checks the scroll of each event
   */
  _checkScroll(e) {
    if (this.shadowRoot) {
      let events = this.shadowRoot.querySelectorAll(".event") || [];
      events.forEach(event => {
        let top = event.offsetTop,
          target = events[0].offsetTop + 50 + event.parentNode.scrollTop,
          bottom = event.offsetTop + event.offsetHeight;
        if (target > top && target < bottom) {
          event.setAttribute("selected", true);
        } else {
          event.removeAttribute("selected");
        }
      });
    }
  }
  updateTimeline() {
    let sections = document.querySelectorAll("section") || [];
    if (
      this.eventsList.length < 1 &&
      sections.length > 0 &&
      this.eventsElement
    ) {
      this.eventsElement.innerHTML = "";
      sections.forEach(section => {
        let clone = section.cloneNode(true),
          div = document.createElement("div"),
          overview = div.cloneNode(),
          details = div.cloneNode(),
          heading = div.cloneNode(),
          media = clone.querySelector(".media")
            ? clone.querySelector(".media")
            : undefined,
          cloneHeading = clone.querySelector("h1,h2,h3,h4,h5,h6")
            ? clone.querySelector("h1,h2,h3,h4,h5,h6")
            : undefined;

        //get heading
        overview.classList.add("event-overview");
        if (cloneHeading) {
          let inner = document.createElement("h2");
          heading.appendChild(inner);
          heading.classList.add("heading");
          inner.innerHTML = cloneHeading.innerHTML;
          cloneHeading.remove();
        }
        overview.appendChild(heading);

        //get media
        if (media) {
          let outer = div.cloneNode(),
            inner = div.cloneNode();
          outer.appendChild(inner);
          div.appendChild(outer);
          inner.appendChild(media.cloneNode(true));
          media.remove();
          clone.setAttribute("has-media", true);
        }
        div.classList.add("media-outer");
        overview.appendChild(div);

        //get details
        Object.keys(clone.children || []).forEach(child =>
          details.append(clone.children[child])
        );
        details.classList.add("details");

        //add to events
        clone.classList.add("event");
        clone.appendChild(overview);
        clone.appendChild(details);
        this.eventsElement.appendChild(clone);
      });
    }
    this._checkScroll();
  }
}
customElements.define(LrndesignTimeline.tag, LrndesignTimeline);
export { LrndesignTimeline };
