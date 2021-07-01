import React from "react";
export default {
  name: "link",
  title: "Link",
  type: "object",
  fields: [
    {
      name: "text",
      title: "Text",
      type: "string",
    },
    {
      name: "url",
      title: "URL",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      description: <span>Optional (preferrable svg)</span>,
    },
  ],
};
