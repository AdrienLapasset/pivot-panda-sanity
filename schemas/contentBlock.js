export default {
  name: 'contentBlock',
  title: 'Bloc de contenu',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Image associée au bloc de contenu (optionnel)',
      options: {hotspot: true},
    },
    {
      name: 'text',
      title: 'Texte',
      type: 'text',
      description: 'Texte associé au bloc de contenu (optionnel)',
    },
  ],
  preview: {
    select: {
      title: 'text',
      media: 'image',
    },
  },
}
