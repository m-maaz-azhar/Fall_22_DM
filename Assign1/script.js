let InputBox = document.getElementById("inputBox");
let Output = document.getElementById("output");
let nodes;

function GenerateInputFields(e) {
  InputBox.innerHTML = "";
  nodes = parseInt(e.value);
  for (let i = 0; i < nodes; i++) {
    for (let i = 0; i < nodes; i++) {
      InputBox.innerHTML += "<input class='valueInput' />";
    }
    InputBox.innerHTML += "<br/>";
  }
}

function GenerateMatrix() {
  let Inputs = document.getElementsByClassName("valueInput");
  let InputValues = [];
  let Matrix = [];
  for (const element of Inputs) {
    InputValues.push(parseInt(element.value));
  }
  while (InputValues.length) Matrix.push(InputValues.splice(0, nodes));
  return Matrix;
}

function CalculateTransitiveClosure() {
  let graph = GenerateMatrix();
  let result = [...graph];

  for (let k = 0; k < nodes; k++) {
    for (let i = 0; i < nodes; i++) {
      for (let j = 0; j < nodes; j++) {
        result[i][j] = result[i][j] || (result[i][k] && result[k][j]);
      }
    }
  }
  Output.innerHTML = "";
  for (const element of result) {
    for (let j = 0; j < result.length; j++) {
      Output.innerHTML += element[j];
    }
    Output.innerHTML += "<br/>";
  }
}
