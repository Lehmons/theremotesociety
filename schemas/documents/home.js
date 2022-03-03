export default {
  name: "home",
  title: "Home",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "blocks",
      title: "Blocks",
      type: "array", // this is an array type field that contains multiple items
      of: [
        { type: "imageBlock" }, // we say we want it to have multiple image blocks, understand? Yes
      ],
    },
  ],
};

// this is the home page so the name and title will be home
// fields is an array of objects
// import it into schema.js and use it
