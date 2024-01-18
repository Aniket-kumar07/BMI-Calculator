const myForm = document.querySelector('form')
myForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const myHeight = parseInt(document.querySelector('#input1').value);
  const myWeight = parseInt(document.querySelector('#input2').value);
  const myResult = document.querySelector('#result')

  if (myHeight === '' || myHeight < 0 || isNaN(myHeight)) {
    myResult.innerHTML = "Please give a valid Height"
  }

  else if (myWeight === '' || myWeight < 0 || isNaN(myWeight)) {
    myResult.innerHTML = "Please give a valid Weight"
  }

  else {
    let BMI = Math.round((myWeight / ((myHeight * myHeight) / 10000)))
    myResult.innerHTML = `<span>${BMI}</span>`

    if (BMI <= 19) {
      myResult.innerHTML = "Under Weight";
    }
    else if (BMI >= 20 && BMI <= 25) {
      myResult.innerHTML = "Normal Weight";
    }
    else {
      myResult.innerHTML = "Over Weight";
    }
  }
})

