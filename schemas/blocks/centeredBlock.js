export default {
  name: "centeredBlock",
  title: "Centered Block",
  type: "object",
  fields: [
    {
      name: "content",
      title: "Content",
      type: "content",
    },
    {
      title: "Width",
      name: "width",
      type: "width",
    },
    {
      title: "Box Align",
      name: "boxAlign",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "" },
          { title: "Center", value: "mx-auto" },
          { title: "Right", value: "ml-auto" },
        ],
      },
    },
    {
      title: "Text Align",
      name: "textAlign",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "text-left" },
          { title: "Center", value: "text-center" },
          { title: "Right", value: "text-right" },
        ],
      },
    },
  ],
};
