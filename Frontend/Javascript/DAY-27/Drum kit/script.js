// 1️⃣ Object mapping: key -> sound file
const sounds = {
  "A": "sounds/clap.wav",
  "S": "sounds/hihat.wav",
  "D": "sounds/kick.wav",
  "F": "sounds/openhat.wav",
  "G": "sounds/boom.wav",
  "H": "sounds/ride.wav",
  "J": "sounds/snare.wav",
  "K": "sounds/tom.wav",
  "L": "sounds/tink.wav"
};

//data-key--->data attribute very flexible
function play(key){
    //select --> data attribute
    //.box[data-key="${key}"] ---> [] tab use krte hai jab html se koi attribute select krna ho
   let keyyy = document.querySelector(`.box[data-key="${key}"]`);
    console.log(keyyy);
   //keyyy variable me key present hai tuh ab kro animation border me
  if (keyyy) {
    //classList
    //active--> class ka name hai jo add kra
    keyyy.classList.add('active');
    //150ms ke badd active class remove hojayegi
    setTimeout(() => keyyy.classList.remove('active'), 150); // remove after 150ms-->jab key press hogi tuh css se vo key highlight hogi 150ms ke lie
  }
  
    //console.log("Playing sound for key:", key);

   //because sounds object bhi uppercase key use kar rha hai
   //key.toUpperCase()-->treats like an index
    const soundFile = sounds[key.toUpperCase()]; // key ko uppercase kar do
  if (soundFile) {
      

    //new Audio()---> js ka built in constructor hai jo audio object bnata hai
    const audio = new Audio(soundFile);
    audio.play();

  } else {
    console.log("No sound mapped for key:", key);
  }


 }

 document.addEventListener('keydown', function(event) {
  console.log(event);
  //event object ke andar key field hai usse pta chal jayga konsi key press hue but vo small letter me ati hai--->key:"a"
  //tabhi humne use upperCase me kra
  const key = event.key.toUpperCase();
  play(key); // ab yeh key argument me jayegi
});




