export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61b36edb1a2fcc3e647b6d28',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-f17gb38f',
                  apiId: '495262eb-1279-44b0-bf9f-70512736fc34'
                },
                {
                  buildHookId: '61b36edbf7d543507b89617d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-1kf4u1yz',
                  apiId: 'd8c073df-0263-47c8-913a-1b37119e5420'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SandeshPokharel32/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-1kf4u1yz.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
