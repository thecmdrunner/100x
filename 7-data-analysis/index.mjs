const URL = `https://one00x-data-analysis.onrender.com/assignment?email=pranavkulkarni195@gmail.com`;

/** @param {string} URL */
const getMarketingJargon = async (URL) => {
    let response = await fetch(URL);

    // Retry if the server returns a 500
    if (response.status === 500) {
        console.log("Retrying request...");
        return getMarketingJargon(URL);
    }

    const assignmentId = response.headers.get("X-Assignment-ID");
    /** @type {string[]} */ const words = await response.json()

    return { assignmentId, words };
};

/** @param {string[]} words */
const getFrequencyOfWords = (words) => {
    const wordsWithFrequency = {};

    words.forEach((word) => {
        if (wordsWithFrequency[word]) {
            const newCount = wordsWithFrequency[word] + 1;
            wordsWithFrequency[word] = newCount;
        } else {
            wordsWithFrequency[word] = 1;
        }
    });

    return wordsWithFrequency;
};

/** * @param {Record<string, number>} wordsWithFrequency */
const getMostFrequentWord = (wordsWithFrequency) => {
    let mostFrequentWord = "";
    let maxFrequency = 0;

    Object.keys(wordsWithFrequency).forEach((word) => {
        if (wordsWithFrequency[word] > maxFrequency) {
            maxFrequency = wordsWithFrequency[word];
            mostFrequentWord = word;
        }
    });

    return mostFrequentWord;
};

/**
 * @param {string} URL
 * @param {{assignment_id: string; answer:string}} body */
const submitResponse = async (URL, body) => {
    console.log("Submitting Answer:", body);

    const finalRes = await fetch(URL, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
        },
    });

    console.log(`Response for answer:`, await finalRes.json());
};

const main = async () => {
    const { words, assignmentId } = await getMarketingJargon(URL);
    const wordsWithFrequency = getFrequencyOfWords(words);
    const mostFrequentWord = getMostFrequentWord(wordsWithFrequency);

    const body = {
        assignment_id: assignmentId,
        answer: mostFrequentWord,
    };

    await submitResponse(URL, body);
};

main().catch((err) => console.error(err));
