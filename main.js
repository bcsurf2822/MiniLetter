let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
console.log(storyWords);

let overusedWords = ['really', 'very', 'basically'];
let unnecessaryWords = ['extremely', 'literally', 'actually' ];



//using .filter method to make a new array without the "overused words"
const betterWords = storyWords.filter( function( el ) {
    return overusedWords.indexOf( el ) < 0;
  } );

console.log(betterWords);


//Using .filter I'm comparing the new array with unnecessary words to let the user know which ones and how many times they were used  
const howManyOverUsed = betterWords.filter(element => unnecessaryWords.includes(element));
console.log(howManyOverUsed);


//I changed my array to a string and then counted the number of ! and . to get a sentence count
const storyString = betterWords.toString();
const countSentence = storyString => {
  const punct = '!.';
  let count = 0;
  for (let i = 0; i < storyString.length; i++) {
    if(!punct.includes(storyString[i])) {
      continue;
    };
    count++;
  };
  return count;
};


//Displaying the above information
console.log(`The total number of words is ${betterWords.length}`);
console.log(`Sentence Count is ${countSentence(storyString)}`);
console.log(`The amount of words overused is ${howManyOverUsed.length}`);
console.log(betterWords.join(" "));
