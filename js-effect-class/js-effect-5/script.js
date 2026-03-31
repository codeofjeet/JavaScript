var no;
window.onload = function() {
      no=1;
    };


window.onscroll = function() {
    myFunction()
};

function myFunction() {
    if((document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) && (document.body.scrollTop < 1800 || document.documentElement.scrollTop < 1800) && (no == 1))
      {
        timeshow();
      }

}

function timeshow() 
  {
    var i=1;
    var j=1;
    var k=1;
    var l=1;
    showText();
function showText()
      {
        document.getElementById("A1").innerHTML=i+ " +";
        document.getElementById("B1").innerHTML=j;
        document.getElementById("C1").innerHTML=k;
        document.getElementById("D1").innerHTML=l;
        i++;
          if(i % 3 ==0)
          {
            if(j<250)
            {
              j++;
            }
          }
          if(i % 10 ==0)
          {
            if(k<100)
            {
              k++;
            }
          }
          if(i % 40 ==0)
          {
            if(l<25)
            {
              l++;
            }
          }
          if(i>1000)
          {
            no = 2;
            return;
          }
          setTimeout(showText,3);
                            
        }
    }