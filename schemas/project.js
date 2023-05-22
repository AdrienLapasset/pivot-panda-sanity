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
      options: {
        list: [
          {title: 'Bars Restaurants', value: 'bars-restaurants'},
          {title: 'Bureaux', value: 'bureaux'},
          {title: 'Coworking', value: 'coworking'},
          {title: 'Hôtels', value: 'hotels'},
          {title: 'Logements', value: 'logements'},
        ],
      },
    },
    {
      name: 'city',
      type: 'string',
      title: 'Ville du projet',
    },
    {
      name: 'surface',
      type: 'number',
      title: 'Surface du projet (m²)',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image du projet',
    },
  ],
}
