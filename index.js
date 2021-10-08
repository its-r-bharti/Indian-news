// d1d41d766f5e4d43ba2332ae1b1ef200
// d1d41d766f5e4d43ba2332ae1b1ef200

// const {title} = require(process);

console.log("this is just for checking whether the javascript file is included or not");


let newscontainer = document.getElementById('newscontainer');
let apiKey = 'd1d41d766f5e4d43ba2332ae1b1ef200';
let country = 'in';
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`, true);
// xhr.getResponseHeader('Content-type','application/json');
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    // console.log(json);
    let articles = json.articles;
    let newsHTML = "";
    articles.forEach(function (element, index) 
    {
      let news = `
      <p class="my-3 mx-5 ">
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                Breaking News ${index + 1}:</b> ${element["title"]}
                </a>
                
              </p>
              <div class="collapse${index}" id="collapseExample">
                <div class="card card-body">
                 ${element["content"]}.<a href="${element['url']}" target="_blank" >Read more here</a> 
                </div>
              </div>
      `
      newsHTML += news;
    });

    newscontainer.innerHTML = newsHTML;

  }


  else 
  {
    console.log("some error occured")
  }
}



xhr.send()

