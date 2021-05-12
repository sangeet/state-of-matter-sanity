import React from "react";
import { Link } from "part:@sanity/base/router";

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
      title: "Month",
      name: "month",
      type: "string",
      options: {
        list: [
          { title: "January", value: "1" },
          { title: "February", value: "2" },
          { title: "March", value: "3" },
          { title: "April", value: "4" },
          { title: "May", value: "5" },
          { title: "June", value: "6" },
          { title: "July", value: "7" },
          { title: "August", value: "8" },
          { title: "September", value: "9" },
          { title: "October", value: "10" },
          { title: "November", value: "11" },
          { title: "December", value: "12" },
        ],
      },
    },
    {
      title: "Year",
      name: "year",
      type: "number",
      options: {
        list: Array(new Date().getFullYear() - 2021 + 2)
          .fill()
          .map((_, i) => 2021 + i)
      },
    },
    {
      title: "Posts",
      name: "posts",
      type: "array",
      description: (
        <span>
          Post to be added here must be created first in the{" "}
          <Link href={"/intent/create/type=post;template=post/"}>
            Post List
          </Link>
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
