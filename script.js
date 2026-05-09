function calculateBPI() {

    // Input Values
    let name = document.getElementById("name").value;

    let balls = parseFloat(document.getElementById("balls").value);
    let wickets = parseFloat(document.getElementById("wickets").value);
    let dots = parseFloat(document.getElementById("dots").value);
    let fours = parseFloat(document.getElementById("fours").value);
    let sixes = parseFloat(document.getElementById("sixes").value);

    let ecoOvers = parseFloat(document.getElementById("ecoOvers").value);
    let expOvers = parseFloat(document.getElementById("expOvers").value);

    // Validation
    if (balls <= 0) {
        document.getElementById("result").innerHTML =
            "Please enter valid balls bowled.";
        return;
    }

    // Factors
    let WF = wickets / balls * 6;

    let DF = dots / balls * 6;

    let BF = ((fours * 0.67) + (sixes * 1.33))
             / balls * 6;

    let E = ecoOvers - expOvers;

    // Final BPI Formula
    let BPI = (8 * WF + 2 * DF - 4.511 * BF + 1.5 * E)
              / 14;

    // Rating Logic
    let verdict = "";

    if (BPI >= 1)
        verdict = "🔥 Elite Spell";

    else if (BPI >= 0.7)
        verdict = "✅ Excellent Spell";

    else if (BPI >= 0.4)
        verdict = "👍 Good Spell";

    else if (BPI >= 0)
        verdict = "⚠️ Average Spell";

    else
        verdict = "💀 Poor Spell";
    // Display Result
    document.getElementById("result").innerHTML = `

        <div class="resultCard">

            <h2>${name}</h2>

            <div class="scoreBox">
                ${BPI.toFixed(3)}
            </div>

            <p class="verdict">${verdict}</p>

            <div class="stats">
                <p><strong>WF:</strong> ${WF.toFixed(3)}</p>
                <p><strong>DF:</strong> ${DF.toFixed(3)}</p>
                <p><strong>BF:</strong> ${BF.toFixed(3)}</p>
                <p><strong>E:</strong> ${E}</p>
            </div>

        </div>
    `;

    // Display Result
    /*document.getElementById("result").innerHTML = `
        <h2>${name}</h2>

        <p><strong>WF:</strong> ${WF.toFixed(3)}</p>
        <p><strong>DF:</strong> ${DF.toFixed(3)}</p>
        <p><strong>BF:</strong> ${BF.toFixed(3)}</p>

        <hr>

        <p><strong>Final BPI:</strong> ${BPI.toFixed(3)}</p>

        <p><strong>Verdict:</strong> ${verdict}</p>
    `;
    */
}
function clearFields() {

    document.getElementById("name").value = "";
    document.getElementById("balls").value = "";
    document.getElementById("wickets").value = "";
    document.getElementById("dots").value = "";
    document.getElementById("fours").value = "";
    document.getElementById("sixes").value = "";
    document.getElementById("ecoOvers").value = "";
    document.getElementById("expOvers").value = "";

    document.getElementById("result").innerHTML =
        "Your BPI result will appear here.";
}
