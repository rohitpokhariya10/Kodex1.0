keydown--->keyboard ki key press krene par event trigger hoga
click--> jab mouse seclick krenege tab event trigger hoga


Q1)data attributes
>data-key basically ek custom attribute hai HTML me. Custom attributes wo hote hain jo data- se start hote hain, aur tum apni marzi ka koi bhi naam de sakte ho, jaise data-key, data-id, data-type, etc.

Iska fayda yeh hai ki tum apne HTML elements ko kuch extra data attach kar sakte ho jo tumhare JavaScript me use ho sakta hai. Jaise humne data-key use kiya taaki hume pata chale ki kaunsa box kis keyboard key se linked hai.

Isse tumhare code me clarity rehti hai aur tum easily JavaScript me is attribute ko read karke uske hisaab se action le sakte ho


Usecase--->
Example: data-key use in code

Maan lo tumne apne HTML me har box ko data-key attribute diya hai:

<div class="box" data-key="A">A</div>
<div class="box" data-key="S">S</div>


Ab tum JavaScript me yeh kar sakte ho:

document.querySelectorAll('.box').forEach(box => {
  box.addEventListener('click', function() {
    const key = box.dataset.key; // Yeh data-key ko read karega
    console.log("You clicked the box for key:", key);
  });
});

Matlab:

Jab tum box pe click karoge, to JavaScript us box ke data-key value ko read kar lega.

Tumhe exact pata chal jayega ki kaunsa box kis key ko represent kar raha hai.

Is tarah tum apne elements ke saath kuch bhi custom logic bana sakte ho bina har element ko alag-alag identify kiye. Yeh basically ek tarika hai element ko pehchaan dene ka, jise JavaScript samajh sakta hai.






>classList se class ko handle kar skta hu-->clas ko add , remove , toggle

Basically, syntax kuch aisa hota hai:

element.classList.add('class-name')


element wo element hai jiske upar tum yeh apply kar rahe ho.

classList us element ki class list ko represent karta hai.

add('class-name') us element me ek nayi class add kar deta hai.

Iske alawa tum remove('class-name') ya toggle('class-name') bhi use kar sakte ho, jo class ko remove ya toggle kar deta hai.








-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
>Jab tum new Audio() ka use karte ho, to yeh JavaScript ko batata hai ki "mujhe ek naya audio player jaisa object do." Yani tum samajh lo ki yeh browser ke andar ek chhota sa audio player bana deta hai.
>Is object ko tumhe batana padta hai ki kaun si sound file bajani hai, isliye hum usme sound file ka path dete hain. Fir audio.play() ka matlab hai us audio ko bajana shuru kar do. Toh hum basically teen step kar rahe hain: ek audio object bana rahe hain, usme sound file set kar rahe hain, aur us audio ko play kar rahe hain.

👉 Sound play karne ke liye browser me hum Audio object use karte hain

Basic syntax:

const sound = new Audio("sound.mp3");
sound.play();


Bas itna hi hai 🔥
Ab isko tum apne play(key) function ke andar use karoge.

example approach1-->
function play(key) {
  if (key === "a" || key === "A") {
    const clap = new Audio("sounds/clap.wav");
    clap.play();
  } 
  else if (key === "s" || key === "S") {
    const hihat = new Audio("sounds/hihat.wav");
    hihat.play();
  }
}


object Mapping

