export const dataSteps = [
  {
    question: 'E-mail *',
    textArea: true,
  },
  {
    question: 'Name of your Business *',
    textArea: true,
  },
  {
    question: `Contact Person's Name *`,
    textArea: true,
  },
  {
    question: `Phone *`,
    textArea: true,
  },
  {
    question: 'Rentals Offered',
    option: [
      'Bonnce House',
      'Chairs',
      'DJ',
      'Dresses & Costumes',
      'Entertainer',
      'Generator',
      'Helium Tanks',
      'Limos',
      'Party Bus',
      'Party Halls',
      'Photo Booths',
      'Porta Potty',
      'Tables',
      'Waters Slides',
      'Personal Information.',
    ],
    textArea: true,
  },
  {
    question: 'Service areas',
    option: ['Los Angeles County'],
    textArea: true,
  },
  {
    question: 'Do you have a physical location for your business *',
    option: ['Yes', 'No'],
  },
  {
    question: 'How do you currently advertise your rentals *',
    option: ['Google Search', 'Social Media', 'Print'],
    textArea: true,
  },
  {
    question: 'Website (if any) *',
    textArea: true,
  },
];

export const fieldMapping = {
  0: 'email',
  1: 'companyName',
  2: 'contactPersonName',
  3: 'phone',
  4: 'rentalsOffers',
  5: 'serviceArea',
  6: 'physicalLocation',
  7: 'rentalsAdvertises',
  8: 'website',
};
