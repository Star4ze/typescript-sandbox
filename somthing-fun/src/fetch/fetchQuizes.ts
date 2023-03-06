
function fetchQuizes(category: string) {
    let quizes;
    let c: string;

    switch (category) {
        case ('movies'):
            c = "film_and_tv";
            break;
        case ('genknw'):
            c = "general_knowledge";
            break;
        case ('music'):
            c = "music";
            break;
        default:
            c = "film_and_tv";
            break;
    }

    const URL = `https://the-trivia-api.com/api/questions?categories=${c}&limit=10&difficulty=easy`;

    fetch(URL).then(r => r.json()).then(q => quizes = q);

    return quizes;
}

export default fetchQuizes;
