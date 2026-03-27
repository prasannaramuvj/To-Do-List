let input = document.getElementsByTagName("input")[0];
let btn = document.getElementsByTagName('button')[0];
listcontainer = document.querySelector(".listcontainer")

btn.addEventListener('click', () => {

  let task = input.value;

  if(task === ""){
    alert("enter the task")
  }

  else{

  let li = document.createElement('li');
  li.innerHTML = task;
  listcontainer.appendChild(li);
  let span = document.createElement('span');
  span.innerHTML = "del"
  li.appendChild(span)

  }

  input.value="";
  saveData();
  
});


listcontainer.addEventListener('click',(e)=>{
  if(e.target.tagName === 'LI'){
    e.target.classList.toggle("checked");
    saveData()
  }
  else if(e.target.tagName === 'SPAN'){
    e.target.parentElement.remove();
    saveData()
  }
},false);



function saveData(){
  localStorage.setItem('data',listcontainer.innerHTML);
}

function showData(){
  listcontainer.innerHTML = localStorage.getItem('data');
}
showData()