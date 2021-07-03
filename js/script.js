


let mydata = JSON.parse(movies); // convert string into an object
console.log(movies); // prints converted object into the console

for (let i = 0 ; i < mydata.length; i++) {
  console.log (mydata[i]);
 
  a1 = "movieName" + i 
  a2 = "image" + i 
  a3 = "description" + i 
  a4 = "likes" + i 
 

 console.log (a1,a2,a3,a4);
  document.getElementById(a1).innerHTML += `${mydata[i].movieName}`;
  document.getElementById(a2).innerHTML += `<img src="${mydata[i].image}" class="card-img" alt="..."> `;
  document.getElementById(a3).innerHTML += `${mydata[i].description}`;
  document.getElementById(a4).innerHTML += `${mydata[i].likes}`;
}


