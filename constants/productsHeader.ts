interface Header {
    title: string,
    description: string,
};

type ProductHeader = Record<string, Header>;

export const PRODUCTS_HEADERS: ProductHeader = {
    guitar: {
        title: 'Electric and Acoustic Guitars',
        description: 'Discover our selection of guitars for all levels. Premium brands, incredible tones, and top quality to help you find your perfect sound.'
    },
    bass: {
        title: 'Electric and Acoustic Basses',
        description: 'Set the rhythm with our bass collection. From classic to modern models, find the deep tone and comfort your band needs.'
    },
    drum: {
        title: 'Professional Drums and Percussion',
        description: 'Acoustic and electronic drum kits from top brands. Feel the power and keep the beat with equipment designed to last.'
    },
    accessories: {
        title: 'Musical Instrument Accessories',
        description: 'Complete your setup with our range of accessories: strings, cables, cases, pedals, drumsticks, and tuners. Everything the discerning musician needs.'
    },
    default: {
        title: 'Fermin Musical Instrument Store',
        description: 'Explore our complete catalog of guitars, basses, drums, and accessories. Find the perfect instrument to take your music to the next level.'
    }
}