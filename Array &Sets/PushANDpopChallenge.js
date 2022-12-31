// Challenge: 
// 1. Create an array - favouriteSongs[] -  and add your 3 favourite songs using push()
// 2. Log out the last song in the array, and make it so that your solution will log out the last one regardless of how many items there are in the array
// 3. Invoke the pop method on your created array. What values do you have left in the array? 

const favouriteSongs = [];

favouriteSongs.push("Like a rolling stone");
favouriteSongs.push("Blowing in the wind");
favouriteSongs.push("Mr Tambourine man");
favouriteSongs.push("It aint me");

console.log(favouriteSongs);

console.log(favouriteSongs[favouriteSongs.length - 1])

favouriteSongs.pop();

console.log(favouriteSongs[favouriteSongs.length - 1])

//******************************************************************* */

// method chaning
const temperatures = [
    { degrees: 69, isRecordTemp: false },
    { degrees: 82, isRecordTemp: true },
    { degrees: 73, isRecordTemp: false },
    { degrees: 64, isRecordTemp: false }
  ];
  
  const newTemps = temperatures.map(temperature => 
  temperature.degrees > 70 ? { ...temperature, isHigh: true } : temperature 
  );
  
  newTemps.forEach(temperature => {
     if (temperature.isHigh) {
       console.log(`Temperature ${temperature.degrees} was a record high last week!`);  
     }
  })
  // console.log(newTemps);