const inputValue = document.getElementById("input");

document.querySelectorAll(".numbers").forEach(item => {
  item.addEventListener("click", (e) => {
    if (inputValue.innerText === "NaN" || inputValue.innerText === "0") {
      inputValue.innerText = "";
    }
    inputValue.innerText += e.target.innerHTML.trim();
  });
});


document.querySelectorAll(".operations").forEach(item => {
  item.addEventListener("click", (e) => {
    let lastValue = inputValue.innerText.slice(-1);
    if(e.target.innerHTML === "="){
        inputValue.innerText = eval(inputValue.innerText);
    } 
    else if(e.target.innerHTML === "AC"){
      inputValue.innerText = "0";
    }
    else if(e.target.innerHTML === 'DEL'){
      inputValue.innerText = inputValue.innerText.slice(0,inputValue.innerText.length-1);
    }
    else{
      if(isNaN(lastValue)){
        return;
      }
      else{
        inputValue.innerText += e.target.innerHTML;
      }
    }
  });
});