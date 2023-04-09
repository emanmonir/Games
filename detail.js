import {Uishow} from "./ui.js";

export class secDetail {
    constructor(){
       

    var btnClose = document.getElementById('btnClose');
    var sec2 = document.getElementById('sec2');
    var sec1 = document.getElementById('sec1');
    
    btnClose.addEventListener('click' , function()
    {
        // console.log('lllllllllllll');
        sec2.classList.replace( 'd-block','d-none')
        sec1.classList.replace( 'd-none','d-block')
        
    })
   
   }
   async getDetail(id)
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
    
        const apiDetails =await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
        var resultDetails =await apiDetails.json();
        console.log(resultDetails);
        uiobj.detailsGame(resultDetails);
        loading.classList.add("d-none");
        
    

    }}
    
    var uiobj =new Uishow();
    
 
    

   