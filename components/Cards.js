// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const axiosPromise = axios.get("https://lambda-times-api.herokuapp.com/articles")
.then((res)=>{
    console.log(res.data);


    res.data.articles.bootstrap.forEach(article => {
        document.querySelector('.cards-container').appendChild(cardMaker(article));
    });

})
axios.get("https://lambda-times-api.herokuapp.com/articles")
.then((res)=>{
    console.log(res.data);


    res.data.articles.javascript.forEach(article => {
        document.querySelector('.cards-container').appendChild(cardMaker(article));
    });

})
axios.get("https://lambda-times-api.herokuapp.com/articles")
.then((res)=>{
    console.log(res.data);


    res.data.articles.jquery.forEach(article => {
        document.querySelector('.cards-container').appendChild(cardMaker(article));
    });

})
axios.get("https://lambda-times-api.herokuapp.com/articles")
.then((res)=>{
    console.log(res.data);


    res.data.articles.node.forEach(article => {
        document.querySelector('.cards-container').appendChild(cardMaker(article));
    });

})
axios.get("https://lambda-times-api.herokuapp.com/articles")
.then((res)=>{
    console.log(res.data);


    res.data.articles.technology.forEach(article => {
        document.querySelector('.cards-container').appendChild(cardMaker(article));
    });

})

const cardMaker = (param) => {
    const divCreator = document.createElement('div');
    const divCreator2 = document.createElement('div');
    const divCreator3 = document.createElement('div');
    const divCreator4 = document.createElement('div');
    const imgCreator = document.createElement('img');
    const spanCreator = document.createElement('span');

    divCreator.classList.add('card');
    divCreator2.classList.add('headline');
    divCreator3.classList.add('author');
    divCreator4.classList.add('img-container');

    imgCreator.src = `${param.authorPhoto}`

    spanCreator.textContent = `By ${param.authorName}`;
    divCreator2.textContent = `${param.headline}`;

    divCreator.addEventListener('click',function(){
        console.log(`${param.headline}`);
    })


    document.querySelector('.cards-container').appendChild(divCreator);
    divCreator.appendChild(divCreator2);
    divCreator.appendChild(divCreator3);
    divCreator.appendChild(divCreator4);
    divCreator.appendChild(imgCreator);
    divCreator.appendChild(spanCreator);

    return divCreator;
}