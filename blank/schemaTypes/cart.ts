import {defineField, defineType} from 'sanity'

export const cartType = defineType({
  name: 'cart',
  title: 'Shopping Cart',
  type: 'document',
  fields: [
    defineField({
      name: 'user',
      title: 'Customer',
      type: 'reference',
      to: [{type: 'user'}],
    }),
    defineField({
      name: 'products',
      title: 'Products in Cart',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'product'}]}],
    }),
    defineField({
      name: 'totalAmount',
      title: 'Total Amount',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
  ],
})
