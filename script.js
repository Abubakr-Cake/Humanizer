document.getElementById("humanizeButton").addEventListener("click", function () {
    let inputText = document.getElementById("inputText").value;
    let humanizedText = humanizeText(inputText);
    document.getElementById("outputText").textContent = humanizedText;
});

function humanizeText(text) {
    if (!text.trim()) return "Please enter some text to humanize.";

    // List of simple synonym replacements
    let synonyms = {
        "amazing": "incredible",
        "good": "great",
        "bad": "poor",
        "happy": "joyful",
        "sad": "downcast",
        "important": "crucial",
        "fast": "quick",
        "slow": "lethargic",
        "big": "massive",
        "small": "tiny"
    };

    // Replace synonyms
    let words = text.split(" ").map(word => {
        let cleanWord = word.toLowerCase().replace(/[^a-z]/g, "");
        return synonyms[cleanWord] ? synonyms[cleanWord] : word;
    });

    let humanizedText = words.join(" ");

    // Simple sentence restructuring
    humanizedText = restructureSentences(humanizedText);

    // Adding slight variations for human-like imperfections
    humanizedText = addVariations(humanizedText);

    return humanizedText;
}

function restructureSentences(text) {
    let sentences = text.split(". ");
    return sentences.map(sentence => {
        let words = sentence.split(" ");
        if (words.length > 5) {
            let firstWord = words.shift();
            words.push(firstWord);
            return words.join(" ") + ", isn't it?";
        }
        return sentence;
    }).join(". ");
}

function addVariations(text) {
    let phrases = [
        "To be honest, ",
        "I believe that ",
        "In my opinion, ",
        "Interestingly, ",
        "Without a doubt, "
    ];
    
    let sentences = text.split(". ");
    return sentences.map(sentence => {
        if (Math.random() > 0.5) {
            return phrases[Math.floor(Math.random() * phrases.length)] + sentence;
        }
        return sentence;
    }).join(". ");
}
