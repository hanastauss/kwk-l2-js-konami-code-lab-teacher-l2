const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0;

docunment.body.addEventListener("keydown", (thingPressed) => {
  const key = thingPressed.key 
  console.log(key) 
  
  if (codes[index] == key) {
    ++idx 
  } 
  
  else {
    idx = 0 
  }
  
  console.log(index)
  if (index == 10) {
    alert("Hurray!");
    index = 0 
  }
}
