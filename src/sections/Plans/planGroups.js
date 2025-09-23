const planGroups = [
  {
    title: 'Monthly',
    isActive: true,
    items: [
      {
        title: 'Basic Plan',
        description: 'Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.',
        price: {
          value: '$9.99',
          label: '/month',
        },
      },
      {
        title: 'Standard Plan',
        description: 'Access to a wider selection of movies and shows, including most new releases and exclusive content',
        price: {
          value: '$12.99',
          label: '/month',
        },
      },
      {
        title: 'Premium Plan',
        description: 'Access to a widest selection of movies and shows, including all new releases and Offline Viewing',
        price: {
          value: '$14.99',
          label: '/month',
        },
      },
    ]
  },
  {
    title: 'Yearly',
    items: [
      {
        title: 'Basic Plan',
        description: 'Enjoy a broad catalog of films and series with fresh titles landing regularly throughout the year.',
        price: {
          value: '$99.99',
          label: '/year',
        },
      },
      {
        title: 'Standard Plan',
        description: 'Unlock a larger library with many new releases plus selected exclusives and early access drops',
        price: {
          value: '$129.99',
          label: '/year',
        },
      },
      {
        title: 'Premium Plan',
        description: 'Get our fullest collection with every new release, premium extras, and offline viewing for trips',
        price: {
          value: '$149.99',
          label: '/year',
        },
      },
    ]
  },
]

export default planGroups
