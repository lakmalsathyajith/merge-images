import minimist from "minimist";
import Cat from "./models/cat.js";
import { getWhatCatSay } from "./actions/catActions.js";
import mergeCatSays from "./utilities/catMerger.js";

// Default cat labels
const defaultGreetings = {
  greeting: "Hello",
  who: "You",
};

/**
 * Execution of modules goes here,
 *
 * Create separate cat images and merge them to create a single one
 *
 * Will prompt any custom error type when any operation failed in the middle,
 * need to handle accordingly in the catch block.
 *
 * Arguments wil destructure as follows
 * node index.js --greeting 'hello' --who 'cat' --width '3000' --height '5000' --color 'Pink' --size '100'
 */
(async () => {
  // eslint-disable-next-line no-undef
  const { greeting, who, ...options } = minimist(process.argv.slice(2));
  const cat1Greeting = greeting ?? defaultGreetings.greeting;
  const cat2Greeting = who ?? defaultGreetings.who;
  const cat1 = new Cat(cat1Greeting, options);
  const cat2 = new Cat(cat2Greeting, options);
  const cat1Say = await getWhatCatSay(cat1);
  const cat2Say = await getWhatCatSay(cat2);
  mergeCatSays(cat1Say, cat2Say, cat1.width);
})().catch((error) => {
  // Any error handling goes here by the error type
  console.log(error);
});
