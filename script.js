const sheetURL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQUY-1uySRTKIGcRER9mLcCtRuboUX2Xu4Qdu_yIY2JZDG9F4cy5KfLOzg7EozHQOne7pOz2VAsK4cP/pub?output=csv";

let quotes = [];

// Load quotes from Google Sheets
async function loadQuotes() {
    try {
        const response = await fetch(sheetURL);
        const csvText = await response.text();

        quotes = parseCSV(csvText);

        if (quotes.length > 0) {
            newQuote();
        } else {
            document.getElementById("quote").textContent =
                "No quotes found.";
        }

    } catch (error) {
        console.error("Error loading quotes:", error);

        document.getElementById("quote").textContent =
            "Unable to load quotes.";
    }
}


// Convert CSV into quote objects
function parseCSV(csv) {
    const lines = csv.trim().split("\n");

    // Remove header row
    lines.shift();

    return lines.map(line => {
        const values = line.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g);

        if (!values || values.length < 3) {
            return null;
        }

        return {
            id: values[0].replace(/^"|"$/g, "").trim(),
            text: values[1].replace(/^"|"$/g, "").trim(),
            category: values[2].replace(/^"|"$/g, "").trim()
        };
    }).filter(quote => quote !== null);
}


// Show a random quote
function newQuote() {

    if (quotes.length === 0) {
        return;
    }

    const randomIndex =
        Math.floor(Math.random() * quotes.length);

    const randomQuote = quotes[randomIndex];

    document.getElementById("quote").textContent =
        randomQuote.text;

    document.getElementById("category").textContent =
        randomQuote.category;
}


// Load quotes when the page opens
loadQuotes();
