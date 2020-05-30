let bears = [];

const getBears = () => bears;

const setBears = (bearName, bearImageURL) => {
  const bear = {
    name: bearName,
    imageURL: bearImageURL
  }

  bears.push(bear);

};

export default {
  getBears,
  setBears
};