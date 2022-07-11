class MoviesApi {
  constructor({ url }) {
    this._url = url;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getMovies() {
    return fetch(`${this._url}/beatfilm-movies`, {
      method: "GET",
      headers: {
        // Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    }).then(this._checkResponse);
  }
}

const apiMovies = new MoviesApi({
  url: "https://api.nomoreparties.co",
  headers: {
    "content-type": "application/json",
  },
});

export default apiMovies;
