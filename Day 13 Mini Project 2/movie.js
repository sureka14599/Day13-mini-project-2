 const apiKey = 'fae8741c'; 


async function searchMovie() {
    const title = document.getElementById('movieInput').value.trim();
    if (!title) return alert('Please enter a movie title');

    const res = await fetch(` http://www.omdbapi.com/?i=tt3896198&apikey=fae8741c`);
    const data = await res.json();

    const resultDiv = document.getElementById('result');
    if (data.Response === 'False') {
        resultDiv.innerHTML = `<p>Movie not found.</p>`;
        return;
    }

    resultDiv.innerHTML = `
    <h3>${data.Title} (${data.Year})</h3>
    <p><strong>Plot:</strong> ${data.Plot}</p>
    <img src="${data.Poster}" alt="Poster of ${data.Title}" />
  `;
}