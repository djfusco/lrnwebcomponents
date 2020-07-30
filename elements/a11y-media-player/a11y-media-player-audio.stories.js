import { html } from "lit-element/lit-element.js";
import { A11yMediaPlayer } from "@lrnwebcomponents/a11y-media-player/a11y-media-player.js";
import { withKnobs, withWebComponentsKnobs } from "@open-wc/demoing-storybook";
import { StorybookUtilities } from "@lrnwebcomponents/storybook-utilities/storybook-utilities.js";
import "@lrnwebcomponents/simple-search/simple-search.js";
import "@polymer/paper-slider/paper-slider.js";
import "@polymer/iron-icons/iron-icons.js";
import "@polymer/iron-icons/av-icons.js";
import "@polymer/paper-toast/paper-toast.js";
import "@lrnwebcomponents/simple-fields/lib/simple-fields-field.js";
import "@polymer/paper-toggle-button/paper-toggle-button.js";
import "@lrnwebcomponents/simple-tooltip/simple-tooltip.js";
import "@lrnwebcomponents/a11y-media-player/lib/a11y-media-play-button.js";
import "@lrnwebcomponents/absolute-position-behavior/absolute-position-behavior.js";

export default {
  title: "Media|Audio",
  component: "a11y-media-player",
  decorators: [withKnobs, withWebComponentsKnobs],
  parameters: {
    options: { selectedPanel: "storybookjs/knobs/panel", escapeHTML: false }
  }
};
const utils = new StorybookUtilities(),
  defaults = {
    accentColor: utils.getRandomColor(),
    audioOnly: true,
    dark: utils.getRandomBool(),
    disableInteractive: utils.getRandomBool(),
    disableSearch: utils.getRandomBool(),
    hideTimestamps: utils.getRandomBool(),
    linkable: utils.getRandomBool(),
    standalone: utils.getRandomBool(),
    stickyCorner: utils.getRandomOption([
      "none",
      "top-left",
      "top-right",
      "bottom-left",
      "bottom-right"
    ])
  },
  fields = [
    {
      property: "accentColor",
      title: "Accent color",
      inputMethod: "colorpicker"
    },
    {
      property: "dark",
      title: "Dark theme",
      inputMethod: "boolean"
    },
    {
      property: "mediaTitle",
      title: "Title",
      inputMethod: "textfield"
    },
    {
      property: "source",
      title: "Source",
      inputMethod: "haxupload"
    },
    {
      property: "track",
      title: "Closed captions",
      inputMethod: "haxupload"
    },
    {
      property: "thumbnailSrc",
      title: "Thumbnail image",
      inputMethod: "haxupload"
    },
    {
      property: "linkable",
      title: "Share Link",
      inputMethod: "boolean"
    },
    {
      property: "disableSearch",
      title: "Disable Transcript Search",
      inputMethod: "boolean"
    },
    {
      property: "disableInteractive",
      title: "Disable Interactive Transcript",
      inputMethod: "boolean"
    },
    {
      property: "hideTimestamps",
      title: "Remove Transcript Timestamps",
      inputMethod: "boolean"
    },
    {
      property: "crossorigin",
      title: "Crossorigin",
      inputMethod: "select",
      options: {
        "": "",
        anonymous: "anonymous",
        "use-credentials": "use-credentials"
      }
    },
    {
      property: "darkTranscript",
      title: "Dark theme for transcript",
      inputMethod: "boolean"
    },
    {
      property: "disableInteractive",
      title: "Disable Interactive",
      inputMethod: "boolean"
    },
    {
      property: "hideTimestamps",
      title: "Hide timestamps",
      inputMethod: "boolean"
    },
    {
      property: "hideTranscript",
      title: "Hide Transcript",
      inputMethod: "boolean"
    },
    {
      property: "lang",
      title: "Language",
      inputMethod: "textfield"
    },
    {
      property: "linkable",
      title: "Include a share link?",
      inputMethod: "boolean"
    },
    {
      property: "stickyCorner",
      title: "Sticky Corner",
      inputMethod: "select",
      options: {
        none: "none/off",
        "top-left": "top-left",
        "top-right": "top-right",
        "bottom-left": "bottom-left",
        "bottom-right": "bottom-right"
      }
    },
    {
      property: "preload",
      title: "Preload source(s).",
      inputMethod: "select",
      options: {
        preload: "Preload all media",
        metadata: "Preload media metadata only",
        none: "Don't preload anything"
      }
    },
    {
      property: "sources",
      title: "Other sources",
      inputMethod: "array"
    },
    {
      property: "tracks",
      title: "Track list",
      inputMethod: "array"
    },
    {
      property: "height",
      title: "Height",
      inputMethod: "textfield"
    },
    {
      property: "width",
      title: "width",
      inputMethod: "textfield"
    },
    {
      slot: "",
      title: "<audio>",
      inputMethod: "code-editor"
    },
    {
      property: "audioOnly",
      title: "Set to audio-only",
      inputMethod: "boolean"
    }
  ];

export const A11yMediaPlayerAudio = () => {
  return utils.makeElement(
    A11yMediaPlayer,
    utils.getKnobs(fields, {
      ...defaults,
      emptyslot: `
          <audio>
              <source src="${new URL(
                `demo/samples/bueller.mp3`,
                import.meta.url
              )}" type="audio/mp3">
              <track label="English" kind="subtitles" srclang="en" src="${new URL(
                `demo/samples/bueller.vtt`,
                import.meta.url
              )}" default>
          </audio>`
    })
  );
};
