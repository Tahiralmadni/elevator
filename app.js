// Assingment Opretors

// = : variable ki value ko plus karne kalia jab koi sign nahi hoti to automatically plus hojata hai

// += : plus equals to jordega

// -= : minus equals to cad dega

// *= : multiply by equals to multiply karega

// /= divide equals to divde karega

// %= discount equals to divide form value

// EXAMPLE HERE...

// let Assingment = 56; // ek variable banaya opretors chalane ke lia

/*Assingment **=6;

console.log(Assingment)*/
let currentFloor = 1;

function moveToFloor(floor) {
    const elevatorInside = document.querySelector('.elevator-inside');
    
    if (floor < 1 || floor > 3 || floor === currentFloor) return;

    // Calculate the distance to move
    const distance = (currentFloor - floor) * 100;
    
    elevatorInside.style.transform = `translateY(${distance}px)`;
    currentFloor = floor;
}
