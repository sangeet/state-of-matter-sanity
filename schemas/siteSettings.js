export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  __experimental_actions: ["create", "update", /*'delete',*/ "publish"],
  fields: [
    {
      title: "About Us Text",
      name: "aboutUsText",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "defaultHeaderImage",
      title: "Default Header Image",
      type: "image",
    },
    {
      name: "blocks",
      title: "Blocks",
      type: "array",
      of: [{ type: "customBlock" }],
    },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [{ type: "link" }],
    },
    {
      name: "genericPageExceptions",
      title: "Generic Page Exceptions",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "page" }],
        },
      ],
    },
  ],
};
