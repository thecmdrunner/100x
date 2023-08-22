const socket = io();

const form = document.getElementById("form");
const input = document.getElementById("input");
const messages = document.getElementById("messages");
const chat = document.getElementById("chat");

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
        const caseInsensitiveWord = cleanedWord.toLowerCase();

        if (emojis?.[caseInsensitiveWord]) {
            return (
                // replace word with emoji, and reattach punctuation if it was removed
                emojis[caseInsensitiveWord] +
                (/[.,!?]/.test(word) ? word[word.length - 1] : "")
            );
        }
        return word;
    });
    return newWords.join(" ");
};

const scrollToBottom = () => messages.scrollTo(0, messages.scrollHeight);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const message = input?.value;
    input.value = "";

    // Handle empty message
    if (!message) {
        return alert("Please enter a message.");
    }

    // Handle slash commands
    if (message in slashCommands) {
        slashCommands[message].execute();
        return scrollToBottom();
    }

    // Handle regular message sent to server
    socket.emit("chat message", replaceWordsWithEmojis(message));
});

socket.on("chat message", (msg) => {
    const listItem = document.createElement("li");
    listItem.textContent = msg;
    messages.appendChild(listItem);
    return scrollToBottom();
});

const slashCommands = {
    "/clear": {
        description: "Clear all messages",
        execute: () => {
            while (messages?.firstChild) {
                messages.removeChild(messages.firstChild);
            }
        },
    },
    "/help": {
        description: "List all slash commands",
        execute: () => {
            const helpMsg = `Available commands:
${Object.keys(slashCommands)
                    .map((cmd) => `${cmd}: ${slashCommands[cmd].description}\n`)
                    .join("")}
            `;

            return alert(helpMsg);
        },
    },
    "/random": {
        description: "Generate a random number",
        execute: () => {
            const randomNumber = Math.floor(Math.random() * 100000);
            const listItem = document.createElement("li");
            const boldTag = document.createElement("b");
            const italicTag = document.createElement("i");
            italicTag.textContent = `🧑‍🏫 Your random number is ${randomNumber} (only you can view this message)`;

            boldTag.appendChild(italicTag);
            listItem.appendChild(boldTag);
            messages.appendChild(listItem);
        },
    },
};
