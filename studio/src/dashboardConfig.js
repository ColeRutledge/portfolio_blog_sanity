export default {
  widgets: [
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
                  buildHookId: '5fdcbdc900dab7349db60a68',
                  title: 'Sanity Studio',
                  name: 'portfolio-blog-studio',
                  apiId: '0bbea6f1-4cce-49fc-a953-6881588cc78f'
                },
                {
                  buildHookId: '5fdcbdca6e0c5a134ed00e0d',
                  title: 'Blog Website',
                  name: 'portfolio-blog-web',
                  apiId: '82d4d8a1-473f-45e7-87f7-48651894131c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ColeRutledge/portfolio_blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://portfolio-blog-web.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
