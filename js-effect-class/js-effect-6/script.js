function validateForm()
    {
        var fn=document.getElementById("fn").value;
            if(fn=="")
            {
                resetErrorMsg();
                document.getElementById('errormsg').innerHTML = "Please Enter First Name";
                document.getElementById("fn").focus();
                document.getElementById('errormsg').style.display = "block";
                return false;
            }else{
                document.getElementById('errormsg').style.display = "none";
            }
            
        var ln=document.getElementById("ln").value;
            if(ln=="")
            {
                resetErrorMsg();
                document.getElementById('errormsg').innerHTML = "Please Enter Lirst Name";
                document.getElementById("ln").focus();
                document.getElementById('errormsg').style.display = "block";
                return false;
            }else{
                document.getElementById('errormsg').style.display = "none";
            }

        var dt=document.getElementById("dt").value;
            if(dt=="")
            {
                resetErrorMsg();
                document.getElementById('errormsg').innerHTML = "Please Enter DOB";
                document.getElementById("dt").focus();
                document.getElementById('errormsg').style.display = "block";
                return false;
            }else{
                document.getElementById('errormsg').style.display = "none";
            }

        var ct=document.getElementById("city").value;
            if(ct=="")
            {
                resetErrorMsg();
                document.getElementById('errormsg').innerHTML = "Please Select City";
                document.getElementById("city").focus();
                document.getElementById('errormsg').style.display = "block";
                return false;
            }else{
                document.getElementById('errormsg').style.display = "none";
            }

        var st=document.getElementById("state").value;
            if(st=="")
            {
                resetErrorMsg();
                document.getElementById('errormsg').innerHTML = "Please Select State";
                document.getElementById("state").focus();
                document.getElementById('errormsg').style.display = "block";
                return false;
            }else{
                document.getElementById('errormsg').style.display = "none";
            }

        var country=document.getElementById("country").value;
            if(country=="")
            {
                resetErrorMsg();
                document.getElementById('errormsg').innerHTML = "Please Select Country";
                document.getElementById("country").focus();
                document.getElementById('errormsg').style.display = "block";
                return false;
            }else{
                document.getElementById('errormsg').style.display = "none";
            }

    var telephone=document.getElementById("tel").value;
    var a=parseInt(telephone);
    var c=parseInt(a/100000000)
    
    if(isNaN(telephone))//if(typeof c1==="number")
    {
        resetErrorMsg();
        document.getElementById('errormsg').innerHTML = "Please Enter Valid Telephone NO";
        document.getElementById("tel").focus();
        document.getElementById('errormsg').style.display = "block";
        return false;
    }
    else if(telephone.length<10)
    {
            resetErrorMsg();
            document.getElementById('errormsg').innerHTML = "Please Enter 10 Digit Telephone No";
            document.getElementById("tel").focus();
            document.getElementById('errormsg').style.display = "block";
            return false;  
    }
    else if((c!=99) && (c!=88) && (c!=78) && (c!=98) && (c!=94))
    {
        resetErrorMsg();
        document.getElementById('errormsg').innerHTML = "Please Start Right Telephone No";
        document.getElementById("tel").focus();
        document.getElementById('errormsg').style.display = "block";
        return false;
    }
    else 
    { 
        document.getElementById('errormsg').style.display = "none";
    }

    var email=document.getElementById("email").value
    var y = email.indexOf("@");
    var z = email.indexOf(".");
        if(y<1 || z<y+2 || z+2>=email.length)
        {
           resetErrorMsg();
            document.getElementById('errormsg').innerHTML = "Please Enter Right E-Mail";
            document.getElementById("email").focus();
            document.getElementById('errormsg').style.display = "block";
            return false;
        }
        var cotp=document.getElementById("cotp").value;
        var lotp=document.getElementById("otp").innerHTML;
            if(cotp!=lotp)
            {
                resetErrorMsg();
                document.getElementById('errormsg').innerHTML = "OTP Not Match";
                document.getElementById("cotp").focus();
                document.getElementById('errormsg').style.display = "block";
                return false;
            }
           var detail = fn + " " + ln;
            localStorage.setItem('dtl', detail);
            
    }

   function showpassword()
    {
        var x = document.getElementById("password");
            if(x.type==="password")
            {
                x.type="text";
            }
            else
            {
                x.type="password";
            }
    }

    function showcpassword()
    {
        var x = document.getElementById("cpassword");
            if(x.type==="password")
            {
                x.type="text";
            }
            else
            {
                x.type="password";
            }
    }

    function otp()
{
    var otp=Math.floor(Math.random()*1000000);  
    document.getElementById("otp").style.fontFamily="arial";
    document.getElementById("otp").style.fontSize="20px";
    document.getElementById("otp").innerHTML=otp;

    setInterval(flashText,1000);
        
    function flashText()
    {
        const oelem = document.getElementById("otp");
        //oelem.className = oelem.className === "green ? "red" : "green";
        if(oelem.className==="green")
        {
            oelem.className="red";
        }

        else if(oelem.className==="red")
        {
            oelem.className="blue";
        }

        else if(oelem.className==="blue")
        {
            oelem.className="brown";
        }
        else
        {
            oelem.className="green";
        }
    }
}

function resetErrorMsg()
{
    document.getElementById('errormsg').style.display = "none";
}