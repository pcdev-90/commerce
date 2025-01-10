import { defineType } from 'sanity';

export default defineType({
  name: 'template',
  title: 'Template',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Título',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Descrição',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Preço (em centavos)',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Imagem do Template',
      options: {
        hotspot: true, // Permite recorte no Sanity Studio
      },
    },
    {
      name: 'editableFields',
      type: 'array',
      of: [{ type: 'string' }],
      title: 'Campos Editáveis',
    },
  ],
});
