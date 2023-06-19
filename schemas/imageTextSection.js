export default {
  name: 'ImageTextSection',
  title: 'Section image et texte',
  Description: 'Une section simple avec une image et un texte',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Image de la section',
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
      description: "Texte associé à l'image",
    },
  ],
  preview: {
    select: {
      title: 'text',
      media: 'image',
    },
  },
}
