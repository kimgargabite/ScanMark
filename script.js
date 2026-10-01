const sheetURL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQUY-1uySRTKIGcRER9mLcCtRuboUX2Xu4Qdu_yIY2JZDG9F4cy5KfLOzg7EozHQ0ne7p0z2VAsK4cP/pub?output=csv";

async function loadQuotes() {
    try {
        const response = await fetch(sheetURL);

        console.log("Status:", response.status);
        console.log("Content Type:", response.headers.get("content-type"));

        const csvText = await response.text();

        console.log("Google Sheets response:");
        console.log(csvText);

    } catch (error) {
        console.error("Error:", error);
    }
}

loadQuotes();
