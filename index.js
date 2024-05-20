function rollDice(){
    const numofdice=document.getElementById("numofdice").value;
    const diceresult=document.getElementById("diceresult");
    const diceimages=document.getElementById("diceimages");
    const values=[];
    const images=[];
    for(let i=0;i<numofdice;i++){
        const val=Math.floor(Math.random()*6)+1;
        values.push(val);
        images.push(`<img src="dice_images/${val}.png">`);
    }
    diceresult.textContent=`dice: ${values.join(', ')}`;
    diceimages.innerHTML=images.join('');
}