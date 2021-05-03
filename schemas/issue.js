import React from 'react';
import { Link } from 'part:@sanity/base/router';

export default {
  title: "Issues",
  name: "issues",
  type: "document",
  fields: [
    {
      title: "Number",
      name: "number",
      type: "number",
    },
    {
      title: "Posts",
      name: "posts",
      type: "array",
      description: (
        <span>
          Post to be added here must be created first in the{" "}
          <Link href={"/intent/create/type=post;template=post/"}>Post List</Link>
        </span>
      ),
      of: [
        {
          type: "reference",
          to: [{ type: "post" }],
        },
      ],
    },
    {
      title: "Editor",
      name: "editor",
      type: "array",
      description: (
        <span>
          Profile to be added here must be created first in the{" "}
          <Link href={"/intent/create/type=profile;template=profile/"}>Profile List</Link>
        </span>
      ),
      of: [
        {
          type: "reference",
          to: [{ type: "profile" }],
        },
      ],
    },
  ],
  preview: {
    select: {
      number: "number",
    },
    prepare(selection) {
      const { number } = selection;
      return {
        title: `Issue - ${number}`,
      };
    },
  },
};
