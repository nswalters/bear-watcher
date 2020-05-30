import bearsData from '../helpers/data/bearData.js';
import utils from '../helpers/utils.js';

const makeRiver = () => {
  console.log(bearsData.getBears());

  const bears = bearsData.getBears();

  let domString = '';

  bears.forEach(bear => {
    domString += `
    <div class="card">
      <img src="${bear.imageURL}" alt="Image of Tracked Bear" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">${bear.name}</h5>
        <p class="card-txt"></p>
      </div>
    </div>
    `
  });

  utils.printToDom('#bear-collection', domString);
};

export default {
  makeRiver
};