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
      name: 'slug',
      type: 'slug',
      title: 'URL du projet',
      options: {
        source: 'name',
        auto: true,
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
}
