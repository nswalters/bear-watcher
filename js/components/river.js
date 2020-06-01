import bearsData from '../helpers/data/bearData.js';
import utils from '../helpers/utils.js';

const addFishingListeners = () => {
  $('.bear-success-icon').click(addCaughtFish);
  $('.bear-failed-icon').click(addMissedFish);
};

const addCaughtFish = (e) => {

  let bears = bearsData.getBears();

  bears.forEach(bear => {
    if (bear.id == e.target.id) {
      bear.caughtCount += 1;
      (bear.caughtTimestamps).push(Date.now());
    }
  });

  makeRiver();
}

const addMissedFish = (e) => {

  let bears = bearsData.getBears();

  bears.forEach(bear => {
    if (bear.id == e.target.id) {
      bear.missedCount += 1;
      (bear.missedTimestamps).push(Date.now());
    }
  });

  makeRiver();
}

const addTimestampData = (timestamps) => {

  let domString = '';

  for (let index = 0; index < timestamps.length; index++) {

    // Do some timestamp mangling to convert to human-readable timestamp
    const timestamp = new Date(timestamps[index]);

    const convertedTimestamp = timestamp.getFullYear() + '-' +
      ('0' + (timestamp.getMonth() + 1)).slice(-2) + '-' +
      ('0' + timestamp.getDate()).slice(-2) + ' ' +
      timestamp.getHours() + ':' +
      ('0' + timestamp.getMinutes()).slice(-2) + ':' +
      ('0' + timestamp.getSeconds()).slice(-2);

    // Start 'row' div every two timestamps
    if (index % 2 === 0) {
      domString += `<div class="row">`;
    }

    // Add timestamp content to row
    domString += `
    <div class="col col-6 px-0">
      <div>${convertedTimestamp}</div>
    </div>
    `

    // End 'row' div after every second element (every index that's odd)
    if (index % 2 !== 0) {
      domString += `</div>`
    }
  };

  // Handles adding the closing row div if an odd number of timestamps are present
  if (timestamps.length % 2 !== 0) {
    domString += `</div>`;
  }

  return domString;
}


const makeRiver = () => {
  const bears = bearsData.getBears();

  let domString = '';

  bears.forEach(bear => {
    domString += `
    <div class="card bear-card">
      <img src="${bear.imageURL}" alt="Image of Tracked Bear" class="card-img-top card-image">
      <div class="card-body d-flex p-0 bear-card-body">
        <div class="bear-name-holder d-flex justify-content-center align-items-center px-2">
          ${bear.name}
        </div>
        <div class="card-body-left col col-6">
          <div class="bear-icons d-flex justify-content-between">
            <i class="far fa-plus-square fa-2x bear-success-icon" id="${bear.id}"></i>
            <span class="bear-success-icon bear-success-count">${bear.caughtCount}</span>
            <i class="fas fa-fish fa-2x bear-success-icon right-5"></i>
          </div>
          <div class="timestamp-container container">`
    domString += addTimestampData(bear['caughtTimestamps']);

    domString += `</div>` // closes timestamp-container
    domString += `</div>` // closes card-body-left

    domString += `
        <div class="card-body-right col col-6">
          <div class="bear-icons d-flex flex-row-reverse justify-content-between">
            <i class="far fa-minus-square fa-2x bear-failed-icon" id="${bear.id}"></i>
            <span class="bear-failed-icon bear-fail-count">${bear.missedCount}</span>
            <i class="fas fa-fish fa-2x bear-failed-icon fa-flip-horizontal"></i>
          </div>
          <div class="timestamp-container container">`

    domString += addTimestampData(bear['missedTimestamps']);

    domString += `</div>` // closes timestamp-container
    domString += `</div>` // closes card-body-right

    domString += `</div>` // closes card-body
    domString += `</div>` // closes card

  });

  utils.printToDom('#bear-collection', domString);
  addFishingListeners();

};

export default {
  makeRiver
};