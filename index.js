let input = document.querySelector("#prompt")
let savebtn = document.querySelector(".save")


function add() {
    document.querySelector(".ul").innerHTML += (`
      <div class="mtrl">
          <li class="para">${input.value}</li>
          <div class="btns">
            <button onclick="edit(this)" class="btn">Edit</button>
            <button onclick="dele(this)" class="btn">Dele</button>
          </div>
      </div>    
      `)
      input.value = "";
      document.querySelector(".main").style.display = "flex";
}
function edit(button) {
    let path = button.parentNode.parentNode;
    let text = path.querySelector(".para").innerHTML;
    console.log("ans = ",text)
    input.value = text;
    path.remove();
}
function dele(button) {
    let path = button.parentNode.parentNode;
    path.remove(); 
}

savebtn.addEventListener("click", ()=> {
if (input.value != ""){
    add()
}else {
    input.placeholder = "Add any task!"
}
})

input.addEventListener("input", ()=> {
        console.log(input.value)
})





