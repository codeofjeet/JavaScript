let res = document.querySelector('#result');
let allcode = document.querySelectorAll('.left textarea'); 
let hcode, csscode;
let jscode='';

allcode.forEach((ta, index) =>{
    ta.addEventListener("keyup", () =>{
        if(index==0){
            hcode=ta.value;
        }

        if(index==1){
            csscode=ta.value;
        }

        if(index==2){
            jscode=ta.value;
            // jscode= `<script>${ta.value}<\/script>`;
        }

        res.contentDocument.body.innerHTML=hcode;
        res.contentDocument.head.innerHTML=`<style>${csscode}</style>`;
        res.contentWindow.eval(jscode);
        // res.srcdoc=jscode;
        // const doc = res.contentDocument || res.contentWindow.document;
        // doc.open();
        // doc.write('<script>' + jscode + '<\/script>');
        // doc.close();
    })

});


