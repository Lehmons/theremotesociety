// import and use it in schema

export default {
  type: "object",
  name: "imageBlock",
  title: "Image Block",
  fields: [
    {
      title: "Use portrait crop on mobile",
      name: "portraitMobileCrop",
      type: "boolean",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
        layout: "grid",
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt",
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
        },
      ],
    },
    {
      title: "Caption",
      name: "caption",
      type: "string",
    },
  ],
  preview: {
    select: {
      media: "image",
      caption: "caption",
    },
    prepare({ caption, media }) {
      const title = caption ? caption : "No caption defined";
      return {
        title,
        media,
      };
    },
  },
};
