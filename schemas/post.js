import React from "react";
import { Link } from "part:@sanity/base/router";

export default {
  title: "Post",
  name: "post",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
      },
    },
    {
      title: "Date",
      name: "date",
      type: "date",
    },
    {
      title: "Body",
      name: "body",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },
    {
      title: "Tags",
      name: "tags",
      type: "array",
      description: (
        <span>
          Tag to be added here must be created first in the{" "}
          <Link href={"/intent/create/type=tag;template=tag/"}>Tag List</Link>
        </span>
      ),
      of: [
        {
          type: "reference",
          to: [{ type: "tag" }],
        },
      ],
    },
    {
      title: "Category",
      name: "category",
      type: "array",
      description: (
        <span>
          Category to be added here must be created first in the{" "}
          <Link href={"/intent/create/type=category;template=category/"}>
            Category List
          </Link>
        </span>
      ),
      of: [
        {
          type: "reference",
          to: [{ type: "category" }],
        },
      ],
    },
    {
      title: "Content Warning",
      name: "contentWarning",
      type: "array",
      description: (
        <span>
          Tag to be added here must be created first in the{" "}
          <Link
            href={"/intent/create/type=contentWarning;template=contentWarning/"}
          >
            Content Warning
          </Link>
        </span>
      ),
      of: [
        {
          type: "reference",
          to: [{ type: "contentWarning" }],
        },
      ],
    },
    {
      title: "Author",
      name: "author",
      type: "array",
      description: (
        <span>
          Profile to be added here must be created first in the{" "}
          <Link href={"/intent/create/type=profile;template=profile/"}>
            Profile List
          </Link>
        </span>
      ),
      of: [
        {
          type: "reference",
          to: [{ type: "profile" }],
        },
      ],
    },
    {
      title: "Translated By",
      name: "translator",
      type: "array",
      description: (
        <span>
          Profile to be added here must be created first in the{" "}
          <Link href={"/intent/create/type=profile;template=profile/"}>
            Profile List
          </Link>
        </span>
      ),
      of: [
        {
          type: "reference",
          to: [{ type: "profile" }],
        },
      ],
    },
    {
      title: "Link To Podcast",
      name: "podcastLink",
      type: "url",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};

//Ability to create new tags directly from the list, if possible
//Default date of today
