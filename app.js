let total = 0;
let depositTotal = 0;
let spentTotal = 0;
let depositeId = 0
let spentId = 0

let salary =[];
let deposites =[];
let savings =[];
let depositeOthers =[];

let travel =[];
let education =[];
let food =[];
let spentOthers =[];

const ctx = document.getElementById('myChart');
const ctx2 = document.getElementById('myChart2');
const ctx3 = document.getElementById('myChart3');

const date = new Date();

let monthArrayDeposite  = [
  [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
  [860,1140,1060,1060,1370,1110,1330,2210,7830,2478],
  [860,1140,1060,1060,1270,1110,1330,2210,7830,2478],
  [860,1140,1060,1060,1370,1110,1330,2210,7830,2478],
  [860,1140,1060,1060,2370,1110,1330,2210,7830,2478],
  [860,1140,1060,1060,4470,1110,1330,2210,7830,2478],
  [860,1140,1060,1060,1570,1110,1330,2210,7830,2478],
  [860,1140,1060,1060,77870,1110,1330,2210,7830,2478],
  [860,1140,1060,1060,1270,1110,1330,2210,7830,2478],
  [860,1140,1060,1060,880,1110,1330,2210,7830,2478],
  [860,1140,1060,1060,8970,1110,1330,2210,7830,2478],
  [860,1140,1060,1060,2370,1110,1330,2210,7830,2478],
]; 

let savingArray =[5000,4600,700,7000,9000,6000,7000,3000,5000,10000,8000,4000];

function deposite(){

  console.log(date.getMonth());
  

  total += Number(document.getElementById("depositeValue").value);
  depositTotal += Number(document.getElementById("depositeValue").value);
  monthArrayDeposite[date.getMonth()][date.getDate()] +=  Number(document.getElementById("depositeValue").value);
  

  document.getElementById("totalAmount").innerHTML = total;
  let temp = {
    title:document.getElementById("title").value,
    id:depositeId++,
    date:date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate(),
    price:Number(document.getElementById("depositeValue").value)
  };
   if(document.getElementById("depositeCatogory").value=="salary"){
    salary.push(temp);
    updateSalaryList();
  }else if(document.getElementById("depositeCatogory").value=="deposits"){
    deposites.push(temp);
    updatedepositesList();
  }else if(document.getElementById("depositeCatogory").value=="saving"){
    savings.push(temp);
    updatesavingsList();
    savingArray[date.getMonth()] +=  Number(document.getElementById("depositeValue").value);
  }else if(document.getElementById("depositeCatogory").value=="others"){
    depositeOthers.push(temp);
    updatedepositsOthersList();
  }


}

function spent(){

  total -= Number(document.getElementById("spentValue").value);
  spentTotal += Number(document.getElementById("spentValue").value);
  document.getElementById("totalAmount").innerHTML = total;

  let temp = {
    title:document.getElementById("title").value,
    id:spentId++,
    date:date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate(),
    price:Number(document.getElementById("depositeValue").value)
  };
   if(document.getElementById("spentCatogory").value=="food"){
    food.push(temp);
    updatefoodList();
    }else if(document.getElementById("spentCatogory").value=="travel"){
    travel.push(temp);
    updateTravelList();
  }else if(document.getElementById("spentCatogory").value=="education"){
    education.push(temp);
    updateEducationList();
  }else if(document.getElementById("spentCatogory").value=="spentOthers"){
    spentOthers.push(temp);
    updateSpentOthersList();
  }
  console.log(food);
  

}

function viewMyTot(){
  
const xValues = ["Earning","Spents"];
const barColors = ["#b91d47", "#00aba9"];

new Chart(ctx, {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: [depositTotal,spentTotal]
    }]
  },
  options: {
    title: {
      display: true,
      text: "Your Total Incomes And Spents"
    }
  }
});
}

function viewByMonths(){
  const xValues = ["January","February","March","Aparil","May","June","July","Augeust","September","October","November","December"];

new Chart(ctx2, {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      data:  monthArrayDeposite[0],
      borderColor: "red",
      fill: false
    },{
      data:  monthArrayDeposite[1],
      borderColor: "green",
      fill: false
    },{
      data:  monthArrayDeposite[2],
      borderColor: "yellow",
      fill: false
    },{
      data:  monthArrayDeposite[3],
      borderColor: "purple",
      fill: false
    },{
      data:  monthArrayDeposite[4],
      borderColor: "blue",
      fill: false
    },{
      data:  monthArrayDeposite[5],
      borderColor: "blue",
      fill: false
    },{
      data:  monthArrayDeposite[6],
      borderColor: "blue",
      fill: false
    },{
      data:  monthArrayDeposite[7],
      borderColor: "blue",
      fill: false
    },{
      data:  monthArrayDeposite[8],
      borderColor: "blue",
      fill: false
    },{
      data:  monthArrayDeposite[9],
      borderColor: "grey",
      fill: false
    },{
      data:  monthArrayDeposite[10],
      borderColor: "orange",
      fill: false
    },{
      data:  monthArrayDeposite[11],
      borderColor: "black",
      fill: false
    }
  ],
  },
  options: {
    legend: {display: false}
  }
});
}


function savingGallProgress(){
  const xValues = ["January","February","March","Aparil","May","June","July","Augeust","September","October","November","December"];

  new Chart(ctx3, {
    type: "line",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor:"rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: savingArray
      }]
    },
    options:{
    title: {
      display: true,
      text: "Your Monthly  Saving Progrress"
    }}
  })
  
}

function updateSalaryList(){

  salary.forEach(element => {
    document.getElementById("salaryList").innerHTML += ` <a href="#" class="list-group-item ">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${element.title}</h5>
            <small>${element.price}</small>
          </div>
          <p class="mb-1">Some placeholder content in a paragraph.</p>
          <small>${element.date}</small>
        </a>`
  });

}

function updatedepositesList(){

  deposites.forEach(element => {
    document.getElementById("depositesList").innerHTML += ` <a href="#" class="list-group-item ">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${element.title}</h5>
            <small>${element.price}</small>
          </div>
          <p class="mb-1">Some placeholder content in a paragraph.</p>
          <small>${element.date}</small>
        </a>`
  });

}

function updatesavingsList(){

  savings.forEach(element => {
    document.getElementById("savings").innerHTML += ` <a href="#" class="list-group-item ">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${element.title}</h5>
            <small>${element.price}</small>
          </div>
          <p class="mb-1">Some placeholder content in a paragraph.</p>
          <small>${element.date}</small>
        </a>`
  });

}

function updatedepositsOthersList(){

  depositeOthers.forEach(element => {
    document.getElementById("depositsOthers").innerHTML += ` <a href="#" class="list-group-item ">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${element.title}</h5>
            <small>${element.price}</small>
          </div>
          <p class="mb-1">Some placeholder content in a paragraph.</p>
          <small>${element.date}</small>
        </a>`
  });

}


function updateTravelList(){

  travel.forEach(element => {
    document.getElementById("travel").innerHTML += ` <a href="#" class="list-group-item ">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${element.title}</h5>
            <small>${element.price}</small>
          </div>
          <p class="mb-1">Some placeholder content in a paragraph.</p>
          <small>${element.date}</small>
        </a>`
  });

}

function updateEducationList(){

  education.forEach(element => {
    document.getElementById("education").innerHTML += ` <a href="#" class="list-group-item ">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${element.title}</h5>
            <small>${element.price}</small>
          </div>
          <p class="mb-1">Some placeholder content in a paragraph.</p>
          <small>${element.date}</small>
        </a>`
  });

}

function updatefoodList(){

  food.forEach(element => {
    document.getElementById("food").innerHTML += ` <a href="#" class="list-group-item ">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${element.title}</h5>
            <small>${element.price}</small>
          </div>
          <p class="mb-1">Some placeholder content in a paragraph.</p>
          <small>${element.date}</small>
        </a>`
  });

}

function updateSpentOthersList(){

  spentOthers.forEach(element => {
    document.getElementById("spentOthers").innerHTML += ` <a href="#" class="list-group-item ">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">heading</h5>
            <small>${element.price}</small>
          </div>
          <p class="mb-1">Some placeholder content in a paragraph.</p>
          <small>${element.date}</small>
        </a>`
  });

}
