import {defineField, defineType} from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.positive().required(),
    }),
    defineField({
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
    }),
    defineField({
      name: 'size',
      title: 'Size',
      type: 'string',
      options: {
        list: ['S', 'M', 'L', 'XL', 'XXL'],
      },
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
      options: {
        list: ['Red', 'Blue', 'Green', 'Black', 'White'],
      },
    }),
    defineField({
      name: 'stock',
      title: 'Stock Availability',
      type: 'number',
      validation: (Rule) => Rule.min(0).integer(),
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured Product',
      type: 'boolean',
      description: 'Mark this product as featured on the homepage',
    }),
  ],
})
