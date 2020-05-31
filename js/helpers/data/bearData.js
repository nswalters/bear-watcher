let bears = [];

const getBears = () => bears;

const setBears = (bearName, bearImageURL) => {
  const bear = {
    id: Date.now(),
    name: bearName,
    imageURL: bearImageURL,
    caughtCount: 0,
    missedCount: 0,
  }

  bears.push(bear);

};

export default {
  getBears,
  setBears
};