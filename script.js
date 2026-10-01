

const quotes = [
    {
        text: "One page at a time. One lesson at a time.",
        category: "📚 Study"
    },

    {
        text: "Keep going. Your effort matters.",
        category: "✨ Motivation"
    },

    {
        text: "Progress doesn't have to be perfect.",
        category: "🌱 Growth"
    },

    {
        text: "Rest is part of the process, too.",
        category: "☀️ Student Life"
    },

    {
        text: "Small steps today can make tomorrow easier.",
        category: "📚 Study"
    },

    {
        text: "You are closer than you think.",
        category: "✨ Motivation"
    },

    {
        text: "Learn from yesterday. Grow today.",
        category: "🌱 Growth"
    },

    {
        text: "It's okay to pause. Just don't give up.",
        category: "☀️ Student Life"
    },

    {
        text: "Focus on what you can do right now.",
        category: "📚 Study"
    },

    {
        text: "Your hard work is building something.",
        category: "✨ Motivation"
    }
];


function newQuote() {

    const randomIndex = Math.floor(
        Math.random() * quotes.length
    );

    document.getElementById("quote").textContent =
        quotes[randomIndex].text;

    document.getElementById("category").textContent =
        quotes[randomIndex].category;
}


/* Automatically generate a quote when the page opens */

newQuote();

