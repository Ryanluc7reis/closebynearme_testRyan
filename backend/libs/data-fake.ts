export const importFaqsFakeData = false;

const defaultParamsFaqs = {
  categoryId: '662e447ea56d5aa9ef6b4388',
  categoryName: 'Bounce House Rental',
  question: '',
  answer: '',
  locationId: '66324ff990ed5bfad0431ee5',
  locationName: 'New York NY',
};

export const faqsFakeData: any[] = [
  {
    question: 'What is the purpose of this FAQ section?',
    answer:
      'The purpose of this FAQ section is to provide answers to commonly asked questions.',
  },
  {
    question: 'How often will this FAQ section be updated?',
    answer:
      'This FAQ section will be updated as new questions arise or as information changes.',
  },
  {
    question: 'Can I submit a question to be included in the FAQ section?',
    answer:
      'Yes, you can submit a question through our contact form and it may be added to the FAQ section.',
  },
  {
    question: 'How can I search for a specific question in this FAQ section?',
    answer:
      'You can use the search bar at the top of the page to search for keywords or phrases.',
  },
  {
    question: 'Are the answers in this FAQ section applicable to all users?',
    answer:
      'The answers in this FAQ section are generally applicable to all users, but there may be some variations depending on your specific situation.',
  },
  {
    question: 'Can I share the content of this FAQ section with others?',
    answer:
      'Yes, you can share the content of this FAQ section with others by providing them with the link to the page.',
  },
  {
    question:
      "What should I do if I can't find the answer to my question in this FAQ section?",
    answer:
      "If you can't find the answer to your question in this FAQ section, you can contact our support team for further assistance.",
  },
  {
    question:
      'Is there a limit to the number of questions I can ask in this FAQ section?',
    answer:
      'There is no limit to the number of questions you can ask in this FAQ section.',
  },
  {
    question: 'Can I provide feedback on the answers in this FAQ section?',
    answer:
      'Yes, you can provide feedback on the answers in this FAQ section by using the feedback form at the bottom of the page.',
  },
  {
    question: 'How can I suggest an improvement to this FAQ section?',
    answer:
      'You can suggest an improvement to this FAQ section by contacting our support team and providing your suggestions.',
  },
  {
    question: 'Are the answers in this FAQ section legally binding?',
    answer:
      'The answers in this FAQ section are provided for informational purposes only and are not intended to be legally binding.',
  },
  {
    question:
      'Can I use the content of this FAQ section for commercial purposes?',
    answer:
      'No, you cannot use the content of this FAQ section for commercial purposes without obtaining permission from the appropriate rights holders.',
  },
  {
    question: 'How can I print a copy of this FAQ section?',
    answer:
      'You can print a copy of this FAQ section by using the print function in your web browser.',
  },
  {
    question:
      'Are there any known issues or limitations with this FAQ section?',
    answer:
      'There may be some known issues or limitations with this FAQ section, which will be addressed in future updates.',
  },
  {
    question:
      'Can I translate the content of this FAQ section into other languages?',
    answer:
      'Yes, you can translate the content of this FAQ section into other languages for your personal use, but you cannot distribute or publish the translated content without permission.',
  },
  {
    question: 'How can I navigate through the questions in this FAQ section?',
    answer:
      'You can navigate through the questions in this FAQ section by using the table of contents or by clicking on the previous and next buttons at the bottom of each question.',
  },
  {
    question:
      'What should I do if I find an error or inaccuracy in this FAQ section?',
    answer:
      'If you find an error or inaccuracy in this FAQ section, please contact our support team and provide details of the issue.',
  },
  {
    question: 'Can I link to specific questions in this FAQ section?',
    answer:
      'Yes, you can link to specific questions in this FAQ section by copying the URL of the question and sharing it with others.',
  },
  {
    question:
      'How can I provide feedback on the overall design and layout of this FAQ section?',
    answer:
      'You can provide feedback on the overall design and layout of this FAQ section by using the feedback form at the bottom of the page.',
  },
].map((item) => ({ ...defaultParamsFaqs, ...item }));

export const importArticlesFakeData = false;

const defaultParamsArticles = {
  title: '',
  description: '',
  categoryId: '662e447ea56d5aa9ef6b4388',
  categoryName: 'Bounce House Rental',
  locationId: '66324ff990ed5bfad0431ee5',
  locationName: 'New York NY',
  type: 'DEFAULT',
};

export const articlesFakeData: any[] = [
  {
    title: 'The Ultimate Guide to Renting a Bounce House',
    description:
      "This comprehensive guide covers everything you need to know about renting a bounce house in San Bernardino. From choosing the right size to safety tips, we've got you covered.",
  },
  {
    title: '10 Tips for a Successful Bounce House Party',
    description:
      'Planning a bounce house party in San Bernardino? Check out these 10 tips for a successful event, including how to set up the bounce house and keep the kids entertained.',
  },
  {
    title: 'The Benefits of Renting a Bounce House',
    description:
      'Renting a bounce house for your next party or event can have numerous benefits. Find out why bounce houses are a popular choice in San Bernardino and how they can make your event unforgettable.',
  },
  {
    title: 'Choosing the Right Bounce House for Your Event',
    description:
      'Not all bounce houses are created equal. This article will guide you through the process of choosing the right bounce house for your specific event in San Bernardino, taking into account factors such as age range and space requirements.',
  },
  {
    title: 'Bounce House Safety 101',
    description:
      'Safety should always be a top priority when renting a bounce house. Learn about the essential safety guidelines and precautions to follow to ensure a fun and accident-free experience in San Bernardino.',
  },
  {
    title: 'Tips for a Successful Bounce House Party',
    description:
      'Looking to throw an unforgettable bounce house party? Check out these helpful tips, including how to create a themed event, plan engaging activities, and ensure a fun and safe experience for all.',
  },
  {
    title: 'Why Choose Our Bounce House Rental Services',
    description:
      "Discover the advantages of renting a bounce house from our trusted services. From high-quality equipment to professional setup and friendly customer service, find out why we're the top choice for your next event.",
  },
  {
    title: 'Bounce House Rental FAQ',
    description:
      "Got questions about bounce house rentals? We've got answers! This frequently asked questions guide covers everything from pricing and availability to delivery and setup, so you can make an informed decision.",
  },
  {
    title: 'The Benefits of Bounce House Rentals for Kids',
    description:
      "Bounce houses aren't just fun - they also offer a range of physical, social, and cognitive benefits for children. Learn more about how these inflatable structures can promote active play and imagination.",
  },
  {
    title: 'Tips for a Successful Bounce House Party',
    description:
      "Planning a bounce house party can be exciting and fun, but it's important to make sure you have everything in order for a successful event. From choosing the right bounce house to setting up a safe and entertaining environment, here are some tips to help you plan the perfect party.",
  },
  {
    title: 'Safety Guidelines for Bounce House Rentals',
    description:
      "When renting a bounce house for your next event, it's crucial to prioritize safety. Follow these guidelines to ensure a safe and enjoyable experience for all participants, including proper setup, supervision, and usage instructions.",
  },
  {
    title: 'Choosing the Right Bounce House for Your Event',
    description:
      'With so many options available, selecting the right bounce house for your event can be overwhelming. Consider factors such as size, theme, and age appropriateness to ensure a memorable and enjoyable experience for everyone.',
  },
  {
    title: 'Benefits of Bounce House Rentals for Kids',
    description:
      'Bounce houses provide more than just entertainment for kids. They offer numerous physical, mental, and social benefits, including exercise, sensory stimulation, and opportunities for social interaction and problem-solving.',
  },
  {
    title: 'How to Clean and Maintain a Bounce House',
    description:
      'Proper cleaning and maintenance are essential to prolonging the lifespan of a bounce house and ensuring a safe and hygienic play environment. Follow these steps to keep your bounce house in top condition.',
  },
].map((item) => ({
  ...defaultParamsArticles,
  ...item,
}));
