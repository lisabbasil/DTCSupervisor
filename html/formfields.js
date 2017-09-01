function displayACFfields() {
    var calibration = document.getElementById("Calibration");
    var pedenoise = document.getElementById("Pedestal&Noise");
    var commission = document.getElementById("Commissioning");
    var pulseshape = document.getElementById("Pulseshape");
    var hybrid = document.getElementById("Hybridtest");
    var systemtest = document.getElementById("Systemtest");

    if(calibration.checked || pedenoise.checked || commission.checked || pulseshape.checked || hybrid.checked) {
        if(commission.checked) {
            //document.getElementById("commission_fieldset").style.display="inline";
            document.getElementById("commission_legend").style.display="inline";
            document.getElementById("commission_table").style.display="inline";
        }
        else {
            //document.getElementById("commission_fieldset").style.display="none";
            document.getElementById("commission_legend").style.display="none";
            document.getElementById("commission_table").style.display="none";
        }
            document.getElementById("result_directory").style.display="inline";
            document.getElementById("result_directory_label").style.display="inline";
            document.getElementById("settings_fieldset").style.display="inline";
            document.getElementById("settings_fieldset_legend").style.display="inline";
            document.getElementById("settings_table").style.display="inline";
    }
    else {
            document.getElementById("result_directory").style.display="none";
            document.getElementById("result_directory_label").style.display="none";
            document.getElementById("settings_fieldset").style.display="none";
            document.getElementById("settings_fieldset_legend").style.display="none";
            document.getElementById("settings_table").style.display="none";
            document.getElementById("commission_table").style.display="none";
    }
}


function submitACFForm() {
    var acfform = document.getElementById("acfform");
    console.log(acfform)
    acfform.submit();
    //acfform.addEventListener("blur",acfform.submit());
    //document.forms["acfform"].submit();
}

function addLoadEvent(func) { 
  var oldonload = window.onload; 
  if (typeof window.onload != 'function') { 
    window.onload = func; 
  } else { 
    window.onload = function() { 
      if (oldonload) { 
        oldonload(); 
      } 
      func(); 
    } 
  } 
} 

addLoadEvent(displayACFfields); 
//addLoadEvent(submitHWFile); 
//addLoadEvent(function() { 