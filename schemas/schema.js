// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import issue from "./issue";
import post from "./post";
import profile from "./profile";
import tag from "./tag";
import category from "./category";
import contentWarning from "./contentWarning";
import page from "./page";
import subpage from "./subpage";
import link from "./link";
import customBlock from "./customBlock";
import siteSettings from "./siteSettings";

import content from "./content";
import divider from "./blocks/divider";
import centeredBlock from "./blocks/centeredBlock";
import embed from "./blocks/embed";

import width from "./parts/width";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    siteSettings,
    issue,
    post,
    profile,
    tag,
    category,
    contentWarning,
    page,
    link,
    customBlock,
    subpage,

    //Blocks
    content,
    divider,
    centeredBlock,
    embed,

    //Parts
    width,
  ]),
});
