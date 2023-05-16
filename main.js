// Declare sounds in arrays
const Initial = ['sh','sh','th','y','b','j','c','r','sm','wh','pl','m','st'];
const Medial = ['a','e','i','o','u'];
const Final = ['ch','ng','ed','n','b','x','p','nk','ff','ll','t'];

//Function to randomly select sound from an array
const soundSelector = batch => {
    let sound = batch[Math.floor(Math.random()* batch.length)] ;
    return sound;
};

const wordGenerator = () => {
    let soundOne = soundSelector(Initial)
    let soundTwo = soundSelector(Medial)
    let soundThree=soundSelector(Final)
    console.log(`Your word to pronounce: ${soundOne}${soundTwo}${soundThree}, sounded as ${soundOne}-${soundTwo}-${soundThree}`)
};

wordGenerator();