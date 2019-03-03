/*****************************
* QUESTION
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's (height 1.69m, mass 78kg) and John's (height 1.95m, 92kg) mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
*/

/*********************
* ANSWER
*/

 function bmiCalc(height, mass){
    let bmi = mass / (height ** 2);
    return bmi;
 }

 console.log(bmiCalc(1.83, 83)) // Testing to see if bmiCalc is working.

 let johnMass = 92;
 let johnHeight = 1.95;
 
 let markMass = 78;
 let markHeight = 1.69;

 let bmiJohn = bmiCalc(1.95, 92);
 let bmiMark = bmiCalc(1.69, 78);

 console.log(bmiJohn, bmiMark) // 24.194608809993426 27.309968138370508

 bmiMarkHigher = bmiMark > bmiJohn;
 console.log(`Is Mark's BMI higher than Johns? ${bmiMarkHigher}`)

//-----------------------------------------------------------------------





/*************
* QUESTION
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.
Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
*/

/************
* ANSWER 
*/

var john = {
   fullName: 'John Smith',
   mass: 93,
   height: 1.95,
   calculateBMI: function() {
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
   }
}

var mark = {
   fullName: 'Mark Miller',
   mass: 78,
   height: 1.69,
   calculateBMI: function() {
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
   }
}

console.log(john, mark)

// NOTE down below we can also write if (john.bmi > mark.bmi) but before we need to run the functions.

if (john.calculateBMI() > mark.calculateBMI()) {
   console.log(`${john.fullName} has a higher BMI of ${john.bmi}`);
} else if (mark.bmi > john.bmi) {
   console.log(`${mark.fullName} has a higher BMI of ${mark.bmi}`);
} else {
   console.log('They have the same BMI.')
}

//---------------------------------------------------------


