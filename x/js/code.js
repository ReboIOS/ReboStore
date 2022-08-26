var code, getIt, errorMessage;

getIt = document.getElementById("get");
errorMessage = document.getElementById("P-For-Errors");

getIt.addEventListener("click", callLinks);

function callLinks (){
  code = document.getElementById("code").value;

  switch (code){
      
      
    case "92":
      window.location.href = "https://apps.apple.com/us/app/filmic-pro-video-camera/id436577167"
      break;

    case "63":
      window.location.href = "https://apps.apple.com/us/app/3d-anatomy/id695187101"
      break;

  
    }
  }
