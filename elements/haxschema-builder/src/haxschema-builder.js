/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, css } from "lit-element/lit-element.js";
import "@lrnwebcomponents/json-editor/json-editor.js";
import "@lrnwebcomponents/code-editor/code-editor.js";
import "@vaadin/vaadin-split-layout/vaadin-split-layout.js";
import "@polymer/paper-button/paper-button.js";
import "@lrnwebcomponents/hax-body/lib/hax-schema-form.js";
import { HAXWiring } from "@lrnwebcomponents/hax-body-behaviors/hax-body-behaviors.js";
/**
 * `haxschema-builder`
 * `dynamically build and visualize HAXschema`
 * @demo demo/index.html
 * @element haxschema-builder
 */
class HaxschemaBuilder extends LitElement {
  /* REQUIRED FOR TOOLING DO NOT TOUCH */

  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  static get tag() {
    return "haxschema-builder";
  }
  constructor() {
    super();
    this.HAXWiring = new HAXWiring();
    this.haxSchema = "{}";
  }
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName == "haxSchema") {
        // notify
        this.dispatchEvent(
          new CustomEvent("hax-schema-changed", {
            value: this[propName]
          })
        );
        this._haxSchemaChanged(this[propName], oldValue);
      }
    });
  }
  /**
   * life cycle, element is afixed to the DOM
   */
  firstUpdated() {
    setTimeout(() => {
      if (!this.source) {
        this.haxSchema = JSON.stringify(
          this.HAXWiring.prototypeHaxProperties(),
          null,
          2
        );
      }
    }, 0);
    // HACK to get initial paint to have the correct form
    this.shadowRoot.querySelector("#form").modeTab = "advanced";
    setTimeout(() => {
      this.shadowRoot.querySelector("#form").modeTab = "configure";
    }, 2000);
  }
  /**
   * Force an update on code editor when this value changes
   */
  _haxSchemaChanged(newValue) {
    if (newValue) {
      this.shadowRoot.querySelector("#code").editorValue = newValue;
    }
  }
  /**
   * Notice code editor changes and reflect them into this element
   */
  _editorDataChanged(e) {
    // value coming up off of this and get it propegated correctly
    this.haxSchema = e.detail.value;
    let hs = JSON.parse(this.haxSchema);
    for (var key in hs.settings) {
      let schema = this.HAXWiring.getHaxJSONSchema(key, hs);
      this.shadowRoot.querySelector("#form")[key + "Schema"] = Object.assign(
        {},
        schema
      );
    }
  }
  addAdvanced(e) {
    let hs = JSON.parse(this.haxSchema);
    hs.settings.advanced.push(this.__propPrototype());
    this.__refreshSchemas(hs);
  }
  addConfigure(e) {
    let hs = JSON.parse(this.haxSchema);
    hs.settings.configure.push(this.__propPrototype());
    this.__refreshSchemas(hs);
  }
  __refreshSchemas(hs) {
    for (var key in hs.settings) {
      let schema = this.HAXWiring.getHaxJSONSchema(key, hs);
      this.shadowRoot.querySelector("#form")[key + "Schema"] = Object.assign(
        {},
        schema
      );
    }
    this.haxSchema = JSON.stringify(hs);
  }
  __propPrototype() {
    return {
      property: "title",
      title: "Title",
      description: "",
      inputMethod: "textfield",
      icon: "android",
      required: true,
      validationType: "text"
    };
  }
  __haxSchemaChanged(e) {
    this.haxSchema = e.detail.value;
  }
  __valueChanged(e) {
    this.value = e.detail.value;
  }
}
window.customElements.define(HaxschemaBuilder.tag, HaxschemaBuilder);
export { HaxschemaBuilder };
