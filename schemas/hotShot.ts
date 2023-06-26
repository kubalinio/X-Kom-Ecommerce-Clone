import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'hotShot',
  title: 'Hot Shot',
  type: 'document',
  fields: [
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),

    defineField({
      name: 'oldPrice',
      title: 'Old Price',
      type: 'number',
    }),

    defineField({
      name: 'promotionGainTextLines',
      title: 'Promotion Gain TextLines',
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
        },
        {
          name: 'value',
          type: 'string',
          title: 'Value Sale',
        },
      ],
    }),

    defineField({
      name: 'promotionTotalCount',
      title: 'Promotion Total Count',
      type: 'number',
    }),

    defineField({
      name: 'maxBuyCount',
      title: 'Max Buy Count',
      type: 'number',
    }),

    defineField({
      name: 'promotionName',
      title: 'Promotion Name Product',
      type: 'string',
    }),

    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
  ],
})
