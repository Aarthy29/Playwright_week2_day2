/*Assignment Requirements:
1. Create an array with numeric values
2. Declare a variable to store the sum
3. Use a loop to iterate through the array
4. Add each element to the sum variable
5. Print the final sum*/

let numbers =[10,20,30,40,50]
let sum =0 ;
for (let i =0; i< numbers.length;i++)
{
    sum = sum + numbers[i];
}
console.log("total sum:" + sum);
