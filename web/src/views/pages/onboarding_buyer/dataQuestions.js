export const dataSteps = [
  [
    {
      question: 'Personal Information.',

      hasOverInput: true
    }
  ],
  [
    {
      question: 'What areas of your life are you seeking guidance on? (Select up to 3)',
      option: 'Love and Relationships'
    },
    { option: 'Career and Finances' },
    { option: 'Personal Growth and Spirituality' },
    { option: 'Family and Friendships' },
    { option: 'Health and Well-being' },
    { option: 'Decision-Making', hasCustomInput: true }
  ],
  [
    {
      question: 'What type of psychic service are you most interested in?',
      option: 'Tarot Card Reading'
    },
    { option: 'Astrology Reading' },
    { option: 'Numerology' },
    { option: 'Intuitive Energy Reading' },
    { option: 'Mediumship (Connecting with loved ones who have passed)' },
    { option: 'Crystal Healing' },
    { option: 'Dream Interpretation' },
    { option: 'General Guidance (No specific preference)' }
  ],
  [
    {
      question:
        'What do you hope to gain from your session? Example: “Clarity on my career path,” “Reassurance about my current relationship,” or “Insight into my personal growth journey.”',
      textArea: true
    }
  ],
  [
    {
      question: 'Have you ever consulted a psychic or spiritual guide before?',
      option: 'Yes, regularly'
    },
    { option: 'Yes, occasionally' },
    { option: 'No, this is my first time' }
  ],
  [
    {
      question:
        'How are you feeling about the area you’re seeking guidance in?(Scale of 1–5, where 1 is “Very Stuck/Confused” and 5 is “Confident but Seeking Validation”)',
      option: '1'
    },
    { option: '2' },
    { option: '3' },
    { option: '4' },
    { option: '5' }
  ],
  [
    {
      question: 'How would you describe your spiritual preferences or beliefs?',
      option: 'Open to all types of spiritual guidance'
    },
    {
      option: 'Focused on specific practices (e.g., astrology, energy work)'
    },
    {
      option: 'Prefer practical, non-spiritual advice',
      hasCustomInput: true
    }
  ],
  [
    {
      question: 'How would you like your session to be delivered?',
      option: 'Live Video/Phone Call'
    },
    { option: 'Recorded Reading (Delivered via email)' },
    { option: 'Written Report or Reading' },
    { option: 'Chat-based Guidance (Text only)' }
  ],
  [
    {
      question: 'What type of psychic personality do you feel most comfortable with?',
      option: 'Direct and straightforward'
    },
    { option: 'Warm and empathetic' },
    { option: 'Mystical and spiritual' },
    { option: 'Fun and lighthearted', hasCustomInput: true }
  ],
  [
    {
      question: 'When are you typically available for sessions? (Select all that apply)',
      option: 'Mornings'
    },
    { option: 'Afternoons' },
    { option: 'Evenings' },
    { option: 'Weekends' }
  ],
  [
    {
      question:
        'Is there anything specific you’d like your psychic to know before the session? Example: “I recently ended a long-term relationship” or “I’ve been feeling uncertain about my job.”',
      textArea: true
    }
  ],
  [
    {
      question: 'Would you like to receive daily or weekly insights, affirmations, or spiritual exercises?',
      option: 'Yes, daily'
    },
    { option: 'Yes, weekly' },
    { option: 'No, just my scheduled sessions' }
  ]
]

export const fieldMapping = {
  0: 'Personal_Information',
  1: 'Areas_Of_Interest',
  2: 'Preferred_Psychic_Services',
  3: 'Goals_And_Expectations',
  4: 'Experience_Level',
  5: 'Emotional_State',
  6: 'Spiritual_Preferences',
  7: 'Delivery_Method',
  8: 'Personality_Match',
  9: 'Scheduling_Preferences',
  10: 'Additional_Details',
  11: 'Subscription_Preferences'
}
