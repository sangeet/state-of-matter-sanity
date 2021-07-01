export default {
  title: 'Profile',
  name: 'profile',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Nationality',
      name: 'nationality',
      type: 'string',
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string',
    },
    {
      title: "Bio",
      name: "bio",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
