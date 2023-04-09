import { secDetail } from "./detail.js";
import { Uishow } from "./ui.js";


export class total
{
    constructor(){
      

var navlist = document.querySelectorAll('.nav-item');

for(let i=0 ; i<navlist.length ; i++)
{
    navlist[i].addEventListener('click' ,function(event)

    {
        var active =document.querySelector(".active")
        active.classList.remove("active");
        event.target.classList.add("active");
        var game= event.target.getAttribute('data-code');
        to.getGames(game);
    })
}

}


 async getGames(game)
{
    const loading = document.querySelector(".section3");
    loading.classList.remove("d-none");
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '273c25f7eemshd288b2db08d02cep184624jsne4f479d8c5a4',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    const apiResponse = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${game}`, options)
    var result = await apiResponse.json();
    loading.classList.add("d-none");
    uiobj.categoryGames(result);
    to.getid();
}

// -----------------------------------------------------
 getid()
{
    var idd =document.querySelectorAll('.items');
    for(let numItem of idd)
    {
        numItem.addEventListener('click' , function(e)
            {
                // console.log(numItem);
                var cc = numItem.getAttribute('id');
                sec1.classList.replace( 'd-block','d-none')
                sec2.classList.replace( 'd-none','d-block')
                secDetai.getDetail(cc);
                
            })
    }

};
}
var to=new total();
var secDetai = new secDetail();
var uiobj =new Uishow();
to.getGames('mmorpg');





