 class MainApi {
    constructor({ url }) {
      this._url = url;
    }
  
    _checkResponse(res) {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
      }
    
      register(name, password, email) {
        return fetch(`${this._url}/signup`, {
          
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify({
            name: name,
            email: email,
            password: password
            })
        })
      .then(this._checkResponse)
    };


    authorization(password, email) {
        return fetch(`${this._url}/signin`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            password: password,
            email: email
          })
        })
        .then(this._checkResponse)
      };


      
      checkToken(jwt) {
        return fetch(`${this._url}/users/me`, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json',
            "Authorization" : `Bearer ${jwt}`
          }
        })
        .then(this._checkResponse)
      };


      patchUserInfo(name, email, jwt) {
        return fetch(`${this._url}/users/me`, {
          method: "PATCH",
          headers: {
            
            "Authorization": `Bearer ${jwt}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
          }),
        }).then(this._checkResponse);
      }

      getUserInfo(jwt) {
        return fetch(`${this._url}/users/me`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${jwt}`,
            "Content-Type": "application/json",
          },
        }).then(this._checkResponse);
      }

    
      saveMovie(movies, jwt) {
      return fetch(`${this._url}/movies`, {
          method: "POST",
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${jwt}`,

          },
          body: JSON.stringify({
              country: movies.country || 'World',
              director: movies.director || 'no info',
              duration: movies.duration || '0000',
              year: movies.year || "0000",
              description: movies.description || 'no info',
              image: `https://api.nomoreparties.co${movies.image.url}`,
              trailerLink: movies.trailerLink || 'https://www.youtube.com/',
              nameRU: movies.nameRU || movies.nameEN,
              nameEN: movies.nameEN ||movies.nameRU,
              thumbnail: movies.thumbnail || `https://api.nomoreparties.co${movies.image.url}`,
              movieId: movies.id,
              liked: movies.liked
          }),
      })
          .then(this._checkResponse)  }
  

    removeMovie(id, jwt) {
        return fetch(`${this._url}/movies/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`,
            },
        })
            .then(this._checkResponse)
            
    }


    getSavedMovies(jwt) {
        return fetch(`${this._url}/movies`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`,
            },
        })
            .then(this._checkResponse)
    }



    
} 

const mainApi = new MainApi({
    url: 'https://api.diplom.praime.nomoredomains.xyz'
    
  });

  export default mainApi




