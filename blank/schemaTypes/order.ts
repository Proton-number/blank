import {defineField, defineType} from 'sanity'

export const orderType = defineType({
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    defineField({
      name: 'user',
      title: 'Customer',
      type: 'reference',
      to: [{type: 'user'}],
    }),
    defineField({
      name: 'orderDate',
      title: 'Order Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Order Status',
      type: 'string',
      options: {
        list: ['Pending', 'Shipped', 'Delivered', 'Cancelled'],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'totalAmount',
      title: 'Total Amount',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'products',
      title: 'Ordered Products',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'product'}]}],
    }),
    defineField({
      name: 'shippingAddress',
      title: 'Shipping Address',
      type: 'string',
    }),
    defineField({
      name: 'paymentMethod',
      title: 'Payment Method',
      type: 'string',
      options: {
        list: ['Credit Card', 'PayPal', 'Bank Transfer'],
      },
    }),
  ],
})
