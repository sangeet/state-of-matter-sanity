export default {
  name: "customBlock",
  title: "Custom Block",
  type: "object",
  fields: [
    {
      title: "Text",
      name: "text",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "links",
      title: "Links",
      type: "array",
      of: [{ type: "link" }],
    },
  ],
};
