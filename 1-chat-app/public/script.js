const socket = io();

const form = document.getElementById("form");
const input = document.getElementById("input");
const messages = document.getElementById("messages");

const emojis = {
    react: "⚛️",
    woah: "😮",
    hey: "👋",
    lol: "😂",
    like: "❤️",
    congratulations: "🎉",
};

const replaceWordsWithEmojis = (message) => {
    const words = message.split(" ");
    const newWords = words.map((word) => {
        // Removing punctuation from the word before checking for emoji replacement
        const cleanedWord = word.replace(/[.,!?]/g, "");

        if (emojis?.[cleanedWord]) {
            return emojis[cleanedWord] + (/[.,!?]/.test(word) ? word[word.length - 1] : "");
            // Reattach punctuation if it was removed
        }
        return word;
    });
    return newWords.join(" ");
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const message = input?.value;
    if (message) {
        socket.emit("chat message", replaceWordsWithEmojis(message));
        input.value = "";
    }
});

socket.on("chat message", (msg) => {
    const li = document.createElement("li");
    li.textContent = msg;
    messages.appendChild(li);
});
