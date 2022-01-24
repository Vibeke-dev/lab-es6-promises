// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));
*/

// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${'Mashed potatoes are ready!'}</li>`;
          
          let img = document.getElementById('mashedPotatoesImg');
          img.style.display = "block";
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 1)
  })
  .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction('steak', 2)
  })
  .then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction('steak', 3)
  })
  .then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return obtainInstruction('steak', 4)
  })
  .then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction('steak', 5)
  })
  .then( (step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return obtainInstruction('steak', 6)
  })
  .then( (step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    return obtainInstruction('steak', 7)
  })
  .then( (step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`    
    document.querySelector("#steak").innerHTML += `<li>${'Stake is ready!'}</li>`
    
    let img = document.getElementById('steakImg');
    img.style.display = "block";  
  })
  .catch((error) => console.log(error));

// Iteration 3 using async/await
async function makeBroccoli() {
  try {
    step0 = await obtainInstruction('broccoli', 0);
    document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`    
    step1 = await obtainInstruction('broccoli', 1);
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`    
    step2 = await obtainInstruction('broccoli', 2);
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`    
    step3 = await obtainInstruction('broccoli', 3);
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`    
    step4 = await obtainInstruction('broccoli', 4);
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`    
    step5 = await obtainInstruction('broccoli', 5);
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`    
    step6 = await obtainInstruction('broccoli', 6);
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`    
    document.querySelector("#broccoli").innerHTML += `<li>${'Broccoli is ready!'}</li>`
    
    let img = document.getElementById('broccoliImg');
    img.style.display = "block";  

  } catch(error) {
    console.log(error)
  } 
}

makeBroccoli();

// Bonus 2 - Promise all
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[0]}</li>`), 1000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[1]}</li>`), 1000);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[2]}</li>`), 1000);
});
const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[3]}</li>`), 1000);
});
const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[4]}</li>`), 1000);
});
const promise6 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[5]}</li>`), 1000);
});
const promise7 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[6]}</li>`), 1000);
});
const promise8 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[7]}</li>`), 1000);
});
const promise9 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(document.querySelector("#brusselsSprouts").innerHTML += `<li>${'Brussels sprouts are ready!'}</li>`), 1000);
});

Promise.all([promise1, promise2, promise3, promise4, promise5, promise6, promise7, promise8])
  .then(() => document.getElementById('brusselsSproutsImg').style.display = "block")
  .catch((error)=> console.log("catch()", error));

  
