import {MdCompare as Icon} from 'react-icons/md'

export default {
  name: 'beforeAfterImages',
  title: 'Section avant / après',
  Description: 'Comparateur des photos avant et après la réalisation des travaux',
  type: 'object',
  fields: [
    {
      name: 'imageBefore',
      title: 'Photo avant les travaux',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'imageAfter',
      title: 'Photo après les travaux',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'text',
      title: 'Description',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'text',
    },
    prepare(selection) {
      return {
        title: selection.title,
        media: Icon,
      }
    },
  },
}
