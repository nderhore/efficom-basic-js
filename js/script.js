function syracuse(){

    //recuperation de la saisie depuis le HTML
    let saisie = document.getElementById("saisieNombre").value;
    let compteur = 0;

    //nous allons commencer notre iteration
    while(saisie != 1){
        compteur = compteur +1; //compteur++

        //verification si saisie est pair ou impair
        if(saisie % 2 == 0){
            saisie = saisie / 2; // saisie /=2
        }
        else{
            saisie = 3 * saisie + 1;
        }
    }
    console.log(compteur);
}