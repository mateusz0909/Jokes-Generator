document.getElementById('button').addEventListener('click', getJoke)

function getJoke(e) {
  //GET NUMBER FROM INPUT
  const number = document.querySelector('input[type= "number"]').value
  //JOKE REQUEST
  const xhr = new XMLHttpRequest();
  //GIF REQUEST
  const xhr2 = new XMLHttpRequest();

  xhr.open('GET', `https://api.icndb.com/jokes/random/${number}`, true);
  xhr2.open('GET', 'https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=chuck+norris', true)

  //GET JOKE
  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      let output = '';

      if (response.type = "success") {
        response.value.forEach(function (chuck) {
            output += `<li>${chuck.joke}</li>`
          }

        )
      }
      document.querySelector('.jokes').innerHTML = output;
    }

  }
//GET GIF
  xhr2.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      let image = '';
      if (response.meta.msg === 'OK') {
        image = `<img src = "${response.data.image_original_url}" class="rounded img-fluid" alt="Responsive image">`;
              }
      document.querySelector('#image').innerHTML = image
    }
  }


  xhr.send();
  xhr2.send();

  e.preventDefault();
}