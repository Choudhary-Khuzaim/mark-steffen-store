import { IMAGES } from './images'

export const PRODUCTS = {
  1: {
    id: '1',
    title: 'The Constitution of God',
    subtitle: 'by Mark H. Steffen · 14 chapters',
    badge: 'New',
    reviews: 128,
    about: [
      'A sweeping exploration of divine principles, the fall of Adam, and the American Constitution — asking why we are here, and how sacred law still shapes a free people.',
      'Written to be read with an open mind, kept close when certainty feels scarce, and shared in study groups searching for a clearer foundation.',
    ],
    toc: 'Fourteen chapters spanning divine law, the fall of Adam, covenant, and the American Constitution — ending with study prompts for groups and solo readers.',
    thumbs: [
      { id: 'mockup-2', label: 'Cover mockup', src: IMAGES.book1Mockup2, scale: 1.35 },
      { id: 'mockup-01', label: 'Standing mockup', src: IMAGES.bookMockup01, scale: 1.2 },
      { id: 'mockup-1', label: 'Angle mockup', src: IMAGES.book1Mockup, scale: 1.35 },
    ],
    formats: [
      { id: 'hardcover', label: 'Hardcover', price: 50 },
      { id: 'paperback', label: 'Paperback', price: 28 },
      { id: 'audiobook', label: 'Audiobook', price: 24 },
      { id: 'ebook', label: 'E-book', price: 14 },
    ],
  },
  2: {
    id: '2',
    title: 'A Guidebook for Living and Dying',
    subtitle: 'by Mark H. Steffen · Companion volume',
    badge: 'Companion',
    reviews: 86,
    about: [
      "Life's purpose, the meaning of death, and what may await beyond physical existence — a companion volume for readers still asking what it means to live well and leave well.",
      'Pair it with The Constitution of God for the full journey: foundations of faith, then practical wisdom for the road ahead.',
    ],
    toc: 'Guided chapters on purpose, mortality, hope, and legacy — written for personal reflection and group study alongside The Constitution of God.',
    thumbs: [
      { id: 'mockup', label: 'Cover mockup', src: IMAGES.book2Mockup, scale: 1.12 },
      { id: 'mockup-2', label: 'Angle mockup', src: IMAGES.book2Mockup2, scale: 1.7 },
      { id: 'front', label: 'Front cover', src: IMAGES.markCon2Var2Front, scale: 1 },
    ],
    formats: [
      { id: 'hardcover', label: 'Hardcover', price: 42 },
      { id: 'paperback', label: 'Paperback', price: 24 },
      { id: 'audiobook', label: 'Audiobook', price: 20 },
      { id: 'ebook', label: 'E-book', price: 12 },
    ],
  },
}

export function getProduct(id) {
  return PRODUCTS[id] ?? PRODUCTS[1]
}
