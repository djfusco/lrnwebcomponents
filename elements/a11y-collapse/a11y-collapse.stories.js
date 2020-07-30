import { html } from "lit-element/lit-element.js";
import { A11yCollapseGroup } from "@lrnwebcomponents/a11y-collapse/lib/a11y-collapse-group.js";
import { A11yCollapse } from "@lrnwebcomponents/a11y-collapse/a11y-collapse.js";
import {
  withKnobs,
  withWebComponentsKnobs,
  text,
  boolean
} from "@open-wc/demoing-storybook";
import { StorybookUtilities } from "@lrnwebcomponents/storybook-utilities/storybook-utilities.js";

export default {
  title: "Navigation|Collapse",
  component: "a11y-collapse-group",
  decorators: [withKnobs, withWebComponentsKnobs],
  parameters: {
    options: { selectedPanel: "storybookjs/knobs/panel" }
  }
};
const utils = new StorybookUtilities();
export const A11yCollapseGroupStory = () => {
  let props = utils.getElementProperties(
    A11yCollapseGroup.properties,
    A11yCollapseGroup.haxProperties
  );
  return utils.makeElementFromClass(
    A11yCollapseGroup,
    {
      id: "group",
      emptyslot: [1, 2, 3]
        .map(
          i =>
            `<a11y-collapse id="Item ${i}">
          <p slot="heading">${utils.getRandomText()}</p>
          <div slot="content">${utils.getRandomTextarea()}</div>
          </a11y-collapse>`
        )
        .join("")
    },
    [
      { css: "--a11y-collapse-group-margin", title: "Collapse group's margin" },
      { css: "--a11y-collapse-margin", title: "Collapse item's margin" }
    ]
  );
};
export const A11yCollapseStory = () => {
  return utils.makeElementFromClass(
    A11yCollapse,
    {
      heading: `<p>${utils.getRandomText()}</p>`,
      content: utils.getRandomTextarea(),
      icon: "add"
    },
    [
      { css: "--a11y-collapse-margin" },
      { css: "--a11y-collapse-border" },
      {
        css: "--a11y-collapse-horizontal-padding",
        title: "default horizontal-padding"
      },
      { css: "--a11y-collapse-padding-left" },
      { css: "--a11y-collapse-padding-right" },
      {
        css: "--a11y-collapse-vertical-padding",
        title: "default vertical-padding"
      },
      { css: "--a11y-collapse-padding-top", title: "padding-top" },
      { css: "--a11y-collapse-padding-bottom", title: "padding-bottom" },
      {
        css: "--a11y-collapse-border-between",
        title: "vorder between heading and content"
      },
      { css: "--a11y-collapse-heading-font-weight" },
      { css: "--a11y-collapse-heading-color" },
      { css: "--a11y-collapse-heading-background-color" },
      { css: "--a11y-collapse-overflow-y" },
      { css: "--a11y-collapse-max-height" }
    ]
  );
};
