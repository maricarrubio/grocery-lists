const mainHeadingElement = document.getElementById('main-heading');
console.log(mainHeadingElement);
mainHeadingElement.textContent = 'Foo Bar';
mainHeadingElement.style.color = 'red';
mainHeadingElement.classList.add('bg-info');

const wandaPhotoElement = document.getElementById('wanda-photo')
wandaPhotoElement.width = 200;


const contentElements = document.getElementsByClassName('content');
console.log(contentElements);
console.log(contentElements[0]);

for (let contentElement of contentElements) {
    contentElement.style.color = 'blue';
}

const paragraphElements = document.getElementsByTagName('p');
console.log(paragraphElements);

for (let pe of paragraphElements) {
    pe.classList.add('fw-bold');
}

const themeBtn = document.getElementById('theme-btn');
themeBtn.onclick = () => {
    const mainContainerElement = document.getElementById('main-container');
    const isLightThemed = mainContainerElement.classList.contains('bg-light');
    
    if (isLightThemed) {
        mainContainerElement.classList.add('bg-dark');
        mainContainerElement.classList.remove('bg-light');
   }    else {
    mainContainerElement.classList.remove('bg-dark');
    mainContainerElement.classList.add('bg-light');
   }
}

const arrStudents = [
    {
        name: 'Wanda',
        grade: 100,
    },
    {
        name: 'Klane',
        grade: 90,
    },
    {
        name: 'John',
        grade: 95,
    }
];

for (let student of arrStudents) {
    const listItemElement = document.createElement('li');
    listItemElement.textContent = student.name;


    const listItemRemoveBtn = document.createElement('button');
    listItemRemoveBtn.textContent = 'Remove';
    listItemElement.appendChild(listItemRemoveBtn);

    const studentListElement = document.getElementById('student-list');
    studentListElement.appendChild(listItemElement);

    listItemRemoveBtn.onclick = () => {
        studentListElement.removeChild(listItemElement);
    }
}



const addNewStudent = () => {
const newStudentInput = document.getElementById('new-student');
const studentName = newStudentInput.value;

const studentGradeInput = document.getElementById('new-student-grade');
const studentGrade = newStudentInput.value;

    addListItemElement({
        name: studentName,
        grade: 'none',
    });

    newStudentInput.value = '';
    studentGrade
}


























// function addName() {
//   const name = prompt("Please enter a name:");
//   const nameDisplay = document.getElementById("nameDisplay");
//   nameDisplay.innerHTML = "Name: " + name;
// }

// const nameButton = document.getElementById("nameButton");
// nameButton.addEventListener("click", addName);

// let cart = {};
// //initialize an empty object to store the grocery items and their counts

// function addToCart(item) {
//   if (cart[item] === undefined) {
//     cart[item] = 1; //add new item to cart with count of 1
//   } else {
//     cart[item] += 1; //increment count of existing item
//   }
  
//   console.log(item + " added to cart"); //print a message to the console
  
//   updateCart(); //update the displayed cart on the webpage
// }

// // function updateCart() {
// //   let cartList = document.getElementById("cart");
// //   cartList.innerHTML = ""; //clear the previous cart list
  
// //   for (let item in cart) {
// //     let count = cart[item];
// //     cartList.innerHTML += "<li>" + item + ": " + count + "</li>";
// //   }
// // }
// function updateCart() {
//   let cartList = document.getElementById("cart");
//   cartList.innerHTML = ""; //clear the previous cart list
  
//   let itemCount = 0; //initialize item count to 0
  
//   for (let item in cart) {
//     let count = cart[item];
//     cartList.innerHTML += "<li>" + item + ": " + count + "</li>";
//     itemCount += count; //increment item count by the count of each item
//   }
  
//   cartList.innerHTML += "<li><strong>Total Items:</strong> " + itemCount + "</li>"; //add total item count to bottom of list
// }