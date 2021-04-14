export default {
  title: 'Post',
  name: 'post',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Date',
      name: 'date',
      type: 'date',
    },
    {
      title: 'Body',
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tag' }],
        },
      ],
    },
    {
      title: 'Category',
      name: 'category',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'category' }],
        },
      ],
    },
    {
      title: 'Author',
      name: 'author',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'profile' }],
        },
      ],
    },
    {
      title: 'Translated By',
      name: 'translator',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'profile' }],
        },
      ],
    },
    {
      title: 'Link To Podcast',
      name: 'podcastLink',
      type: 'url',
    },
  ],
};

//Ability to create new tags directly from the list, if possible
//Default date of today
