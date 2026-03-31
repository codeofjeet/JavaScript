function display()
  {
    let text1="WELCOME TO CODE OF JEET";
    let i=0;
    let j=0;
  
    function typeeffect1()
    {
        if(i < text1.length)
        {
          document.getElementById("welcome").innerHTML+=text1.charAt(i);
          i++;
          setTimeout(typeeffect1,100);
        }
    }
    typeeffect1();
}
display();