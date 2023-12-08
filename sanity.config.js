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
  ],

  schema: {
    types: schemaTypes,
  },
})
