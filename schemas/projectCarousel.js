export default {
  name: 'projectCarousel',
  title: 'Galerie photos',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Ajouter une photo',
      type: 'image',
      options: {hotspot: true},
    },
  ],
  preview: {
    select: {
      image: 'image',
    },
    prepare(selection) {
      return {
        title: ' ',
        media: selection.image,
      }
    },
  },
}
