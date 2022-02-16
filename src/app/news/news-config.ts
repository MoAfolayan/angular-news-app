export const newsConfig = {
    topUSHeadlines: {
        displayName: 'Top US Headlines',
        url: 'https://newsapi.org/v2/top-headlines?country=us&sortBy=publishedAt&apiKey=047211f713cf4eb09e845c9739c86aa9'
    },
    businessNews: {
        displayName: 'Business',
        url: 'https://newsapi.org/v2/top-headlines?country=us&category=business&sortBy=publishedAt&apiKey=047211f713cf4eb09e845c9739c86aa9',
    },
    wallStreetJournalNews: {
        displayName: 'Wall Street Journal',
        url: 'https://newsapi.org/v2/everything?domains=wsj.com&sortBy=publishedAt&apiKey=047211f713cf4eb09e845c9739c86aa9'
    },
    techNews: {
        displayName: 'Tech',
        url: 'https://newsapi.org/v2/top-headlines?sources=techcrunch&sortBy=publishedAt&apiKey=047211f713cf4eb09e845c9739c86aa9'
    }
};