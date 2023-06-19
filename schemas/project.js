export default {
  name: 'project',
  type: 'document',
  title: 'Projets',
  fields: [
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
      title: 'Blocs de contenu',
      type: 'array',
      of: [{type: 'ImageTextSection'}],
    },
    {
      name: 'beforeAfterImages',
      title: 'Section avant / après travaux',
      type: 'array',
      of: [{type: 'beforeAfterImages'}],
    },
  ],
}
