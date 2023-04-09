 export class Uishow{
    constructor(){}
  categoryGames(result) 
{
   
    var cartona=``;
    for(let i=0 ; i<result.length ; i++)
    {
        var x =result[i].short_description.split(' ', 8);
        cartona+=`<div class="col-xl-3 col-lg-4 col-md-6 items" id="${result[i].id}">
        <div class="card" style="width: 100%; margin: auto;" >
            <img src="${result[i].thumbnail}" class="card-img-top p-3 img3" alt="..."  >
            <div class="card-body" >
              <h3 class="card-title text-white" >${result[i].title}</h3>
              <span class="badge text-bg-primary p-2" >Free</span>
              <div class="clr"></div>
              <p class="card-text text-center" > ${x}</p>
            </div>
            <div class="card-footer small hstack justify-content-between" >

                <span class="badge f-badge" >${result[i].genre}</span>
                <span class="badge  f-badge" >${result[i].platform}</span>
    
            </div>
          </div>

    </div>`
    }
    document.getElementById('rowitem').innerHTML=cartona;
    
    
    
}
   

// ----------------------------------------------------

detailsGame(resultDetails)
{
   var cartona2=` <div class="col-md-4">
    <img src="${resultDetails.thumbnail}" class="w-100" alt="image details">
 </div>
 <div class="col-md-8 text-white">
    <h3>Title: ${resultDetails.title}</h3>
    <p>Category: <span class="badge text-bg-info float-none"> ${resultDetails.genre}</span> </p>
    <p>Platform: <span class="badge text-bg-info float-none">${resultDetails.platform}</span> </p>
    <p>Status: <span class="badge text-bg-info float-none">${resultDetails.status}</span> </p>
    <p style="font-size: 14px;">${resultDetails.description}
    </p>
    <a class="btn btn-outline-warning text-white" target="_blank" href="${resultDetails.game_url}">Show Game</a>
 </div>`;
 document.getElementById('details_sec').innerHTML=cartona2;
 
 
}}
