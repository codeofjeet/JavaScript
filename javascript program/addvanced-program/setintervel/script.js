let res = document.getElementById('display');
let stopdisplay;
let i=0;

const disno = function(no){
    res.innerHTML=no;
    
}


const startbtn = document.getElementById('start').addEventListener('click', function(){

  let setno = function nodisplay(){
        i++;
        disno(i);

    }
       stopdisplay=setInterval(setno, 1000);
});



const stopbtn = document.getElementById('stop').addEventListener('click', function(){
    clearInterval(stopdisplay);
});