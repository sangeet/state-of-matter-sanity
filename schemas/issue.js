export default {
  title: 'Issues',
  name: 'issues',
  type: 'document',
  fields: [
    {
      title: 'Number',
      name: 'number',
      type: 'number',
    },
    {
      title: 'Posts',
      name: 'posts',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'post' }],
        },
      ],
    },
    {
      title: 'Editor',
      name: 'editor',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'profile' }],
        },
      ],
    },
  ],
};
