export default {
  name: 'news',
  type: 'document',
  title: 'Actualités',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titre',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      type: 'text',
      title: 'Contenu',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'date',
      type: 'date',
      title: 'Date',
      placeholder: new Date().toLocaleDateString('fr-FR'),
      options: {
        dateFormat: 'DD/MM/YYYY',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'thumbImg',
      type: 'image',
      title: 'Vignette',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Lien de l'article LinkedIn",
      description: "Sur LinkedIn 'Copier le lien vers le post' sur les ... du post",
      name: 'linkedinUrl',
      type: 'url',
    },
  ],
}
