let countEl = document.getElementById("count-el");

let saveEl = document.getElementById("save-el");

let count = 0;

function increment() {
  count = count + 1;
  countEl.innerText = count;
}

function decrement() {
  count = count - 1;
  countEl.innerText = count;
}

function save() {
  let countStr = count + " - ";
  // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
  // 3. Render the variable in the saveEl using innerText
  saveEl.innerText += countStr;
  // NB: Make sure to not delete the existing content of the paragraph
  console.log(count);
}
