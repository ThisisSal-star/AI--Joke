function displayJoke(response){
    new Typewriter('#joke', {
        strings: response.data.answer,
        autoStart: true,
        cursor: null,
        delay:40,
      });
}

function makeJoke(event) {
    event. preventDefault();
  
    let apiKey = "ad031o47ac65t5df81db4b9e365cb480";
    let context =
      "You are a funny AI assistant with knowledge of the funniest jokes ever made. The joke must be short and sweet.";
    let prompt = "Generate the funniest joke make it short and funny";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt= ${prompt}&context= ${context}&key= ${apiKey}`;
  
    let buttonElement = document.queryselector("#joke");
    buttonElement.innerHtml = "Generating a joke....please wait😊";
    axios.get(apiUrl).then(displayJoke);
  }

  let jokeButton = document.querySelector("#joke-button");
  jokeButton.addEventListener("click",makeJoke);
  