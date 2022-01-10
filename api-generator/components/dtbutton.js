const dtButtonProps = [
  {
    name: "tag",
    type: "string",
    default: "button",
    description: "Button tag",
  },
  {
    name: "type",
    type: "string",
    default: "button",
    description: "Button type",
  },
  {
    name: "role",
    type: "string",
    default: "button",
    description: "Button role",
  },
  {
    name: "block",
    type: "Boolean",
    default: false,
    description: "Button block",
  },
  {
    name: "pill",
    type: "Boolean",
    default: false,
    description: "Button pill",
  },
  {
    name: "variant",
    type: String,
    default: "btn-secondary",
    description: "Button variant",
  },
  {
    name: "rounded",
    type: Boolean,
    default: false,
    description: "Button rounded",
  },
  {
    name: "floating",
    type: Boolean,
    default: false,
    description: "Button floating",
  },
  {
    name: "toggler",
    type: Boolean,
    default: false,
    description: "Button toggler",
  },
  {
    name: "picker",
    type: Boolean,
    default: false,
    description: "Button picker",
  },
];

module.exports = {
  dtbutton: {
    name: "dtButton",
    description:
      "dtButton is an extension to standard button element with icons and theming.",
    props: dtButtonProps,
  },
};
