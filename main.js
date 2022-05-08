const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const container = document.querySelector(".container");
const baza = document.querySelector(".baza");
const xbutton = document.querySelector(".xbutton");
const button3 = document.querySelector(".img1");
const button4 = document.querySelector(".img2");
const button5 = document.querySelector(".button-86");
const button6 = document.querySelector(".searchbar");
const editButton = document.querySelector(".editButton")



const listArr = [];

button2.addEventListener("click", mainfunc);
button1.addEventListener("click", func1);
xbutton.addEventListener("click", func2);




input.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    mainfunc();
  }
});

function mainfunc() {
  if (input.value != "") {
    let collaj = document.createElement("div");
    collaj.classList.add("collaj");
    let paragraf = document.createElement("p");
    let deleteButton = document.createElement("div");
    let editButton = document.createElement("img");
    paragraf.classList.add("text");

    paragraf.innerText = input.value;
    baza.appendChild(paragraf);
    baza.style.display = "block";
    input.style.display = "none";
    xbutton.style.display = "none";


    listArr.push(input.value);
    input.value = "";
    console.log(listArr);

    deleteButton.classList.add("deleteButtonnew");
    deleteButton.innerText = "x";
    collaj.appendChild(deleteButton)
    editButton.classList.add("editButton");
    editButton.src = './img/pencil.png';
    collaj.appendChild(editButton)
    baza.appendChild(collaj)

    //delete
    deleteButton.addEventListener("click", function () {
      baza.removeChild(collaj);
      baza.removeChild(paragraf)
    });

    //edit
    editButton.addEventListener("click", function () {
      let value = document.querySelectorAll("p");
      value.forEach((item) => {
        item.contentEditable = true;
      });
    });
  }
}
//search


button6.addEventListener('keyup', function my(e) {
  let deyer = button6.value
  let allp = document.querySelectorAll('p');
  for (let i = 0; i < allp.length; i++) {
    for (let j = 0; j < allp[i].innerText.length; j++) {
      if (allp[i].textContent.toLowerCase().includes(deyer.toLowerCase())) {
        allp[i].style.display = "";
      } else {
        allp[i].style.display = "none";
        console, log('not found')

      }

    }

  }

})


function func1() {
  input.style.display = "flex";
  xbutton.style.display = "inline-block";
}
function func2() {
  input.style.display = "flex";
  editButton.style.display = "inline-block";
}

//alldelete
button5.addEventListener("click", function (event) {
  console.log('salam')
  const baza = document.querySelector(".baza");

  let p = document.querySelectorAll("p");
  let collaj = document.querySelectorAll("img");
baza.removeChild(collaj)

  for(i=0;i<listArr.length;i++){
    listArr[i]=''
    collaj=""
    
    
  }
});

//sort
button3.addEventListener("click", function (event) {
  listArr.forEach(item=>{
 let regem=parseInt(item, 10)
 console.log(isNaN(regem))

 if(isNaN(regem)==false){
 let newarr= listArr.sort(function(a, b) {
  return a - b;
});

  let p = document.querySelectorAll("p");
  p.forEach((item, index) => {
    item.innerText = newarr[index];
  })}

  else{

    let newarr= listArr.sort()
    
      let p = document.querySelectorAll("p");
      p.forEach((item, index) => {
        item.innerText = newarr[index];
      })


    
  }  })
});

button4.addEventListener("click", function (event) {
  listArr.forEach(item=>{
 let regem=parseInt(item, 10)

 if(isNaN(regem)==false){
 let newarr= listArr.sort(function(a, b) {
  return a - b;
});
let reverse1=newarr.reverse()

  let p = document.querySelectorAll("p");
  p.forEach((item, index) => {
    item.innerText = reverse1[index];
  })}

  else{

    let newarr= listArr.sort()
    let reverse2=newarr.reverse()

      let p = document.querySelectorAll("p");
      p.forEach((item, index) => {
        item.innerText = reverse2[index];
      })


    
  }  })
});