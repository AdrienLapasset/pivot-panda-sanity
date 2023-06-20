import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: 'pp1ujuyb',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
})

export default {
  name: 'project',
  type: 'document',
  title: 'Projets',
  fields: [
    {
      title: "Projet sur la page d'accueil",
      description: "Projet visble dans le carrousel de la page d'accueil (3 max.)",
      name: 'isFeaturedProject',
      type: 'boolean',
      validation: (Rule) =>
        Rule.custom(async (value, context) => {
          const documentId = context.document._id
          let currentCount = 0
          if (value === true) currentCount = 1
          const featuredProject = await client.fetch(`*[_type == 'project' && isFeaturedProject]`)
          // console.log('featuredProjectLenght =>', featuredProject.length)
          const isFeaturedProject = featuredProject.some((project) => project._id === documentId)
          if (isFeaturedProject) {
            // console.log('isfeaturedProject')
            return true
          } else if (currentCount + featuredProject.length > 3) {
            return "Vous avez dépassé la limite de projet sur la page d'accueil (3 max.)"
          }
          return true
        }),
    },
    {
      name: 'name',
      type: 'string',
      title: 'Nom du projet',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'URL du projet',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'category',
      type: 'string',
      title: 'Catégorie du projet',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {title: 'Bar Restaurant', value: 'Bar-Restaurant'},
          {title: 'Bureaux', value: 'Bureaux'},
          {title: 'Coworking', value: 'Coworking'},
          {title: 'Hôtel', value: 'Hôtel'},
          {title: 'Logements', value: 'Logements'},
        ],
      },
    },
    {
      name: 'city',
      type: 'string',
      title: 'Ville du projet',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'surface',
      type: 'number',
      title: 'Surface du projet (m²)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image du projet',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mission',
      type: 'string',
      title: 'Mission réalisée par Pivot Panda',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'year',
      type: 'date',
      title: 'Année',
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: 'YYYY',
      },
    },
    {
      name: 'address',
      type: 'string',
      title: 'Adresse',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'ImageTextSections',
      title: 'Section image et texte',
      type: 'array',
      of: [{type: 'ImageTextSection'}],
    },
    {
      name: 'beforeAfterImages',
      title: 'Section avant / après travaux',
      type: 'array',
      of: [{type: 'beforeAfterImages'}],
    },
    {
      name: 'projectCarousel',
      title: 'Galerie photo',
      type: 'array',
      of: [{type: 'projectCarousel'}],
    },
  ],
  initialValue: {
    featuredProject: false,
  },
}
