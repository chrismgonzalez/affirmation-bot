const affirmations = [
  "You are beautiful",
  "You look beautiful today",
  "I love you so much!",
  "You are my heart and soul"
];

const getAffirmation = affirmations => {
  return affirmations[Math.floor(Math.random() * affirmations.length)];
};

export default getAffirmation;
