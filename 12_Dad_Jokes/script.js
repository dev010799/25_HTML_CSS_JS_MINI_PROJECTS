const jokeE1 = document.getElementById('joke')
const jokeE2 = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// Using Async/Await
async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }
const res = await fetch('https://icanhazdadjoke.com', config)

const data = await res.json()

jokeE1.innerHTML = data.joke
}

