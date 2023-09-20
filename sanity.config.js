import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {dashboardTool} from '@sanity/dashboard'
import {netlifyWidget} from 'sanity-plugin-dashboard-widget-netlify'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

export default defineConfig({
  name: 'default',
  title: 'Pivot Panda',

  projectId: 'pp1ujuyb',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S, context) => {
        return S.list()
          .title('Contenu')
          .items([
            orderableDocumentListDeskItem({type: 'project', title: 'Projets', S, context}),
            S.listItem().title('Actualités').child(S.documentTypeList('news')),
          ])
      },
    }),
    dashboardTool({
      widgets: [
        netlifyWidget({
          title: 'Déploiement du site',
          sites: [
            {
              title: 'Site',
              apiId: '39f17bb4-a680-4a59-8155-35b53d758ce3',
              buildHookId: '65017de88625645fb4d8477c',
              name: 'pivotpanda',
              url: 'pivotpanda.netlify.app',
            },
          ],
        }),
      ],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
