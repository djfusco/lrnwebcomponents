/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */
import { html } from "@polymer/polymer/polymer-element.js";
import { RichTextEditorToolbar } from "./rich-text-editor-toolbar.js";
import "@lrnwebcomponents/absolute-position-behavior/absolute-position-behavior.js";
/**
 * `rich-text-editor-toolbar-mini`
 * `a mini floating toolbar for the rich text editor`
 *
 * @microcopy - language worth noting:
 *  -
 *

 * @polymer
 * @demo ./demo/mini.html mini floating toolbar
 */
class RichTextEditorToolbarMini extends RichTextEditorToolbar {
  constructor() {
    super();
    this.config = [
      {
        label: "Basic Inline Operations",
        type: "button-group",
        buttons: [
          {
            command: "bold",
            icon: "editor:format-bold",
            label: "Bold",
            toggles: true,
            type: "rich-text-editor-button"
          },
          {
            command: "italic",
            icon: "editor:format-italic",
            label: "Italics",
            toggles: true,
            type: "rich-text-editor-button"
          },
          {
            collapsedUntil: "md",
            command: "removeFormat",
            icon: "editor:format-clear",
            label: "Erase Format",
            type: "rich-text-editor-button"
          }
        ]
      },
      {
        label: "Links",
        type: "button-group",
        buttons: [
          {
            command: "link",
            icon: "link",
            label: "Link",
            prompt: "href",
            toggledCommand: "unlink",
            toggledIcon: "mdextra:unlink",
            toggledLabel: "Unink",
            toggles: true,
            type: "rich-text-editor-link"
          }
        ]
      },
      {
        collapsedUntil: "md",
        label: "Subscript and Superscript",
        type: "button-group",
        buttons: [
          {
            command: "subscript",
            icon: "mdextra:subscript",
            label: "Subscript",
            toggles: true,
            type: "rich-text-editor-button"
          },
          {
            command: "superscript",
            icon: "mdextra:superscript",
            label: "Superscript",
            toggles: true,
            type: "rich-text-editor-button"
          }
        ]
      },
      {
        collapsedUntil: "sm",
        label: "Lists and Indents",
        type: "button-group",
        buttons: [
          {
            command: "insertOrderedList",
            icon: "editor:format-list-numbered",
            label: "Ordered List",
            toggles: true,
            type: "rich-text-editor-button"
          },
          {
            command: "insertUnorderedList",
            icon: "editor:format-list-bulleted",
            label: "Unordered List",
            toggles: true,
            type: "rich-text-editor-button"
          }
        ]
      }
    ];
  }

  // render function
  static get template() {
    return html`
      ${this.styleTemplate}
      <style>
        :host #floating {
          display: flex;
        }
      </style>
      <absolute-position-behavior
        auto
        id="floating"
        fit-to-visible-bounds
        for$="[[controls]]"
        position="top"
      >
        ${this.toolbarTemplate}
      </absolute-position-behavior>
    `;
  }

  // properties available to the custom element for data binding
  static get properties() {
    return {
      /**
       * Sticky is not available on the mini toolbar
       */
      sticky: {
        name: "sticky",
        type: Boolean,
        value: false,
        readOnly: true
      }
    };
  }
  /**
   * Store the tag name to make it easier to obtain directly.
   */
  static get tag() {
    return "rich-text-editor-toolbar-mini";
  }
}

export { RichTextEditorToolbarMini };

window.customElements.define(
  RichTextEditorToolbarMini.tag,
  RichTextEditorToolbarMini
);
