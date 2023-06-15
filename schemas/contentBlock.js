export default {
  name: 'contentBlock',
  title: 'Bloc de contenu',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Image associée au bloc de contenu',
      options: {hotspot: true},
    },
    {
      name: 'orientation',
      title: "Orientation de l'image",
      type: 'string',
      description:
        'Une image au format paysage prendra toute la largeur, au format portrait sa largeur sera limitée',
      options: {
        list: [
          {title: 'Paysage', value: 'landscape'},
          {title: 'Portrait', value: 'portrait'},
        ],
        layout: 'radio',
        defaultValue: 'landscape',
      },
    },
    {
      name: 'text',
      title: 'Texte',
      type: 'text',
      description: 'Texte associé au bloc de contenu',
    },
  ],
  preview: {
    select: {
      title: 'text',
      media: 'image',
    },
  },
}
