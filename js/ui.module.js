export class Ui {
    constructor() {

    }
    displayDataGame(data) {
        let gamesBox = ``
        for (let i = 0; i < data.length; i++) {
            gamesBox += `<div class="card-group ">
            <div class="card bg-transparent" data-id="${data[i].id}">
              <div class="card-body p-3">
                <img src="${data[i].thumbnail}" class="card-img-top w-100 " alt="...">
                <div class="d-flex justify-content-between pt-3">
                  <h3 class="text text-black">${data[i].title}</h3>
                  <span class="free text-bg-primary  py-1 px-1">Free</span>
                </div>
                <p class="card-text text-center ">${data[i].short_description
                }</p>
              </div>
              <div class="card-footer">
                <small class="text-muted d-flex justify-content-between">
                  <span class="">${data[i].genre}</span>
                  <span class="">${data[i].platform}</span>
                </small>
              </div>
            </div>
          </div>`
        }
        document.getElementById("gameData").innerHTML = gamesBox
    }



    displayDetails(data){
        let content =`<div class="col-md-4">
        <img src="${data.thumbnail}" class="w-100" alt="image details">
      </div>
      <div class="col-md-8">
        <h3>Title:${data.title}</h3>
        <p class="fs-4">Category: <span class="badge text-bg-info">${data.genre}</span> </p>
        <p class="fs-4">Platform: <span class="badge text-bg-info">${data.platform}</span> </p>
        <p class="fs-4">Status: <span class="badge text-bg-info">${data.status}</span> </p>
        <p class="small">${data.description}</p>
          <a class="btn btn-outline-warning mb-4" target="_blank" href="${data.freetogame_profile_url}">Show Game</a>
      </div>`
      document.getElementById("detailsContent").innerHTML = content
    }
}