export default {
  name: "divider",
  title: "Section Divider",
  type: "object",
  fields: [
    {
      name: "color",
      title: "Color (Optional)",
      type: "string",
    },
    {
      title: "Width",
      name: "width",
      type: "width",
    },
    {
      title: "Thickness (px, optional)",
      name: "thickness",
      type: "string",
      options: {
        list: [
          { title: "1", value: "1px" },
          { title: "2", value: "2px" },
          { title: "4", value: "4px" },
          { title: "8", value: "8px" },
        ],
      },
    },
  ],
};
