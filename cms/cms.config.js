// Usage with script tag
const { CMS, initCMS: init } = window

initCMS({
    config: {
      backend: {
        name: "github",
        branch: "main",
        repo: "digital-land/content",
        base_url: "https://dl-cms-oauth-service.herokuapp.com",
      },
      // prevents NetlifyCMS from attempting to load a local YAML config file
      load_config_file: false,
      local_backend: (location.hostname === "localhost" || location.hostname === "127.0.0.1"),
      logo_url: "cms/assets/dl-logo.svg",
      public_folder: "/cms/assets/uploads",
      media_folder: "cms/assets/uploads",
      collections: [
        {
          name: "project",
          label: "Projects",
          label_singular: "Project",
          folder: "project",
          create: true,
          slug: "{{slug}}",
          preview_path: "project/{{slug}}",
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
        },
      ],
    },
  });