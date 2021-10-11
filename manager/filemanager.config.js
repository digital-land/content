// documentation for NetlifyCMS collections is here:
// https://www.netlifycms.org/docs/collection-types/

let projectsCollection = {
  name: "project",
  label: "Projects",
  label_singular: "Project",
  // this is the folder containing all the files for this collection
  folder: "project",
  create: true,
  slug: "{{slug}}",
  preview_path: "project/{{slug}}",
  // field 'widget' documentation can be found here:
  // https://www.netlifycms.org/docs/widgets/
  fields: [
    {
      label: "Title",
      name: "title",
      widget: "string",
      hint: "The document title and primary heading",
    },
    {
      label: "Hidden",
      name: "hidden",
      widget: "boolean",
      default: false,
      hint: "Hides this content from the site. Defaults to false.",
    },
    {
      label: "Description",
      name: "description",
      widget: "text",
      hint: "A summary of the content in this page",
    },
    {
      label: "Project start date",
      name: "startdate",
      widget: "datetime",
      hint: "When did this project start?",
    },
    {
      label: "Project status",
      name: "status",
      widget: "select",
      hint: "What is the status of this project?",
      options: [
        {
          label: "In progress",
          value: "In progress",
        },
        {
          label: "Ongoing",
          value: "Ongoing",
        },
        {
          label: "Backlog",
          value: "Backlog",
        },
        {
          label: "Completed",
          value: "Completed",
        },
      ],
    },
    {
      label: "Body",
      name: "body",
      widget: "markdown",
    },
    {
      label: "Updates",
      name: "updates",
      widget: "list",
      collapsed: true,
      minimize_collapsed: false,
      summary: "{{fields.title}}",
      fields: [
        {
          label: "Title",
          name: "title",
          widget: "string",
        },
        {
          label: "Date",
          name: "date",
          widget: "datetime",
        },
        {
          label: "Category",
          name: "type",
          widget: "select",
          options: [
            {
              label: "Decision",
              value: "decision",
            },
            {
              label: "Update",
              value: "update",
            },
            {
              label: "Learning",
              value: "learning",
            },
          ],
        },
        {
          label: "Text",
          name: "text",
          widget: "markdown",
          editor_components: [],
          buttons: [
            "bold",
            "italic",
            "link",
            "numbered-list",
            "bulleted-list",
          ],
        },
      ],
    },
    {
      label: "Related",
      name: "related",
      widget: "list",
      collapsed: false,
      minimize_collapsed: false,
      summary: "{{fields.title}}",
      fields: [
        {
          label: "Title",
          name: "title",
          widget: "string",
        },
        {
          label: "Links",
          name: "items",
          widget: "list",
          collapsed: false,
          minimize_collapsed: false,
          summary: "{{fields.text}}",
          fields: [
            {
              label: "Text",
              name: "text",
              widget: "string",
            },
            {
              label: "URL",
              name: "url",
              widget: "string",
            },
          ],
        },
      ],
    },
  ],
}

// any collections you create as named objects, add or remove them from this array
dlConfig.collections = [
  projectsCollection,
]