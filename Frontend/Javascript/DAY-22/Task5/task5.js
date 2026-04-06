const growth = document.querySelector('.growth');
const button = document.querySelector('button');

let grow = 0;


button.addEventListener('click', () => {

   

   let interval = setInterval(() => {

        // Har step pe random 10–30
        let random = Math.floor(Math.random() * 21) + 10;

        grow += random;

        if (grow >= 100) {
            button.innerHTML='Downloaded'
            grow =100;
            growth.style.width = grow + "%";
            clearInterval(interval);
            
        } else {
            growth.style.width = grow + "%";
        }

    }, 1000);   

});