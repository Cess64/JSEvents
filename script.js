//=============================================================================//
//==================  Fonctionnalité N°I et I-bis  ============================//
//=============================================================================//

let footerClick = document.querySelector('footer') 
let nbclics = 0;  // comptage clics : création d'une variable nbre de clics + voir HTML l.160 !

footerClick.addEventListener("click", clique);

  function clique(){
	console.log("Et de " + nbclics + "!!!")
};


//=============================================================================//
//=========================  Fonctionnalité N°II  =============================//
//=============================================================================//

let menuBtn = document.querySelector("button");

menuBtn.addEventListener('click', function(){

 collapse = document.getElementById("navbarHeader");
 collapse.classList.toggle("collapse")

});

//=============================================================================//
//========================  Fonctionnalité N°III  =============================//
//=============================================================================//

let card = document.getElementsByClassName("card"); 
let card1 = card[0];                               // on get the good card

let editBtn = document.getElementsByClassName("btn btn-sm btn-outline-secondary");
let editBtn1 = editBtn[0];                         // on get the good button

editBtn1.addEventListener("click", editRouge);

  function editRouge(){
	card1.style.color = "red" ;                   // Et on voit la vie en ROUGE !!
};

//=============================================================================//
//========================  Fonctionnalité N°IV  ==============================//
//=============================================================================//

let card2 = card[1];                               // on get the good card, il connait déjà (card)

let editBtn2 = editBtn[1];                         // on get the good button, il connait déjà (Btn)

let editBtn2Status = false;

editBtn2.addEventListener("click", editGreen);

  function editGreen(){
  		if ( editBtn2Status == false ) {
	card2.style.color = "green" ;                  // Et on voit la vie en ROUGE !!
	editBtn2Status = true;
}
		else if (editBtn2Status == true){
    card2.style.color = "black" ;
    editBtn2Status = false;
}
};

//=============================================================================//
//=========================  Fonctionnalité N°V  ==============================//
//=============================================================================//

var lnk = document.querySelector("link");
let nav = document.getElementById("navbarHeader");

deleteBootstrap = false ;

  nav.addEventListener("dblclick", function(){
  		if ( deleteBootstrap == false ) {
  			lnk.disabled = true;
	deleteBootstrap = true;
        }
		else if (deleteBootstrap == true) {
			lnk.disabled = false;
    deleteBootstrap = false;
        }
});
// Pour supprimer le bootstrap il faut dble cliquer au niveau du michel hamburger !!
// Aussi, une fois que Bootstrap est dégagoss, on sait pas trop ou appuyer, mais à force d'appuyer vers
// en hat, je tombe au bon endroit, et ça remet le bootstrap !!

//=============================================================================//
//=========================  Fonctionnalité N°VI  =============================//
//=============================================================================//