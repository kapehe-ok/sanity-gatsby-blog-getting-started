export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6077461199c20f2f3efcf052",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-getting-started-studio",
                  apiId: "cc787550-f447-4b67-ad56-1d02e7b5290a",
                },
                {
                  buildHookId: "60774611ed5a132ec24812fb",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-getting-started",
                  apiId: "b3420ba7-9857-4bc2-a9be-ce1bb6686d98",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/kapehe-ok/sanity-gatsby-blog-getting-started",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-getting-started.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
