export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '63496df8c33d2656389a1b49',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-53c5ifie',
                  apiId: '861e0225-62d0-4c21-9ada-ebc24e6ee6cf'
                },
                {
                  buildHookId: '63496df85218b8518e409400',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-5devdk18',
                  apiId: '0f55a3a0-3678-4902-b95b-34ff16f1eb0d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simonlevinsson-spinit/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-5devdk18.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
