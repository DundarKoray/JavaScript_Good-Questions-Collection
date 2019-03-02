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