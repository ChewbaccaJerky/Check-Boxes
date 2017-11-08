let checkBoxes = document.querySelectorAll(".inbox input[type='checkbox']");
let lastChecked;

function handleCheck(e){
  // check if shift key was down
  // check that they are checking it
  let inBetween = false;

  if(e.shiftKey && this.checked) {
    // go ahead and do what we please
    checkBoxes.forEach(checkbox => {
      if(checkbox === this || checkbox === lastChecked) inBetween = !inBetween;
      if(inBetween) checkbox.checked = true;
    });
  }
  lastChecked = this;
}

checkBoxes.forEach((checkbox)=>{
  checkbox.addEventListener('click', handleCheck);
});
