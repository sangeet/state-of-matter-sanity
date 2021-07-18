export default {
  name: "content",
  title: "Content",
  type: "array",
  of: [
    { type: "block" },
    { type: "image" },
    { type: "divider" },
    { type: "centeredBlock" },
    { type: "embed" },
  ],
};
