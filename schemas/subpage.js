export default {
  title: "Sub Page",
  name: "subpage",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Body",
      name: "body",
      type: "content",
    },
  ],
};
