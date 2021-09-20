function inpValue() {
  var value = document.querySelector("input").value;
  console.log(value);
  var allColours = ["red", "blue", "green", "yellow"];
  var final = [];
  for (let i = 0; i < allColours.length; i++) {
    if (allColours[i].includes(value)) {
      final.push(allColours[i]);
    }
  }
  var length = document.getElementById("colors").children.length;
  console.log(length);
  for (let i = 0; i < length; i++) {
    var color = document.getElementById("colors").children[i];
    color.classList.add("disp");
  }
  console.log(final);
  for (let i = 0; i < final.length; i++) {
    var show = final[i];
    for (let j = 0; j < length; j++) {
      var color = document.getElementById("colors").children[j];
      if (show === color.id) {
        console.log(color);
        color.classList.remove("disp");
      }
    }
  }
}
