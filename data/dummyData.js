// src/data/dummyData.js
export const habits = [
  {
    id: 'h1',
    name: 'Read for 30 minutes',
    category: 'health',
    isCompleted: false,
    isHighlighted: true,
    isRecurring: false,
    priority: true,
    deadline: '2023-08-15T00:00:00.000Z',
    reminder: '2023-08-14T20:00:00.000Z',
    color: 'green',
    description: 'Develop a daily reading habit to expand your knowledge and improve focus.',
    benefits: [
      'Improves vocabulary and language skills',
      'Reduces stress and promotes relaxation',
      'Enhances creativity and imagination'
    ],
    tips: [
      'Choose a specific time each day for reading',
      'Start with books or articles that interest you',
      'Set realistic goals and gradually increase reading time'
    ],
    relatedProducts: [
      {
        name: 'Kindle Paperwhite',
        description: 'Waterproof e-reader with a glare-free display',
        affiliateLink: 'https://example.com/kindle-paperwhite'
      },
      {
        name: 'Book Light',
        description: 'Rechargeable LED reading light',
        affiliateLink: 'https://example.com/book-light'
      }
    ],
    videoContent: {
      title: 'The Benefits of Reading',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
  },
  {
    id: 'h2',
    name: 'Meditate for 10 minutes',
    category: 'health',
    isCompleted: true,
    isHighlighted: true,
    isRecurring: false,
    priority: true,
    deadline: '2023-08-15T00:00:00.000Z',
    reminder: '2023-08-14T20:00:00.000Z',
    color: 'green',
    description: 'Practice mindfulness meditation to reduce stress and improve focus.',
    benefits: [
      'Reduces stress and anxiety',
      'Improves focus and concentration',
      'Enhances emotional well-being'
    ],
    tips: [
      'Start with guided meditations',
      'Find a quiet, comfortable space',
      'Be consistent with your practice'
    ],
    relatedProducts: [
      {
        name: 'Meditation Cushion',
        description: 'Comfortable cushion for meditation practice',
        affiliateLink: 'https://example.com/meditation-cushion'
      },
      {
        name: 'Meditation App Subscription',
        description: 'Access to guided meditations and mindfulness exercises',
        affiliateLink: 'https://example.com/meditation-app'
      }
    ],
    videoContent: {
      title: 'Introduction to Mindfulness Meditation',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
  },
  {
    id: 'h3',
    name: 'Excersise for 30 minutes',
    category: 'health',
    isCompleted: false,
    isHighlighted: true,
    isRecurring: false,
    priority: true,
    deadline: '2023-08-15T00:00:00.000Z',
    reminder: '2023-08-14T20:00:00.000Z',
    color: 'green',
    description: 'Engage in physical activity to improve overall health and fitness.',
    benefits: [
      'Improves cardiovascular health',
      'Boosts mood and reduces stress',
      'Helps maintain a healthy weight'
    ],
    tips: [
      'Choose activities you enjoy',
      'Start with shorter sessions and gradually increase',
      'Mix cardio and strength training exercises'
    ],
    relatedProducts: [
      {
        name: 'Fitness Tracker',
        description: 'Monitor your activity and heart rate',
        affiliateLink: 'https://example.com/fitness-tracker'
      },
      {
        name: 'Resistance Bands Set',
        description: 'Versatile equipment for home workouts',
        affiliateLink: 'https://example.com/resistance-bands'
      }
    ],
    videoContent: {
      title: 'Full Body 30-Minute Workout',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
  }
];

export const todos = [
  { id: 't1', title: "Check or uncheck any todo", isCompleted: false, isRecurring: false, hasNotes: false },
  { id: 't2', title: "This card has notes", isCompleted: true, isRecurring: false, hasNotes: true },
  { id: 't3', title: "Toggle icons to make recurring, edit or delete", isCompleted: false, isRecurring: true, hasNotes: false },
  { id: 't4', title: "Open the back of this card to write notes", isCompleted: false, isRecurring: false, hasNotes: false },
  { id: 't5', title: "Check or uncheck any todo", isCompleted: false, isRecurring: false, hasNotes: false },
  { id: 't6', title: "This card has notes", isCompleted: true, isRecurring: false, hasNotes: true },
  { id: 't7', title: "Toggle icons to make recurring, edit or delete", isCompleted: false, isRecurring: true, hasNotes: false },
  { id: 't8', title: "Open the back of this card to write notes", isCompleted: false, isRecurring: false, hasNotes: false },
];
