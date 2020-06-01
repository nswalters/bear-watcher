import river from './river.js';
import bearsData from '../helpers/data/bearData.js';

const addBearButtonListener = () => {
  $('#add-bear-button').click(addToRiverEvent);
};

const addToRiverEvent = (e) => {
  e.preventDefault();

  let bearName = $('#formBearName').val();
  let bearImageURL = $('#formBearImageURL').val();

  bearsData.setBears(bearName, bearImageURL);

  river.makeRiver();
  $('#bearForm').trigger("reset");
  location.href = "#river";
};

export default {
  addBearButtonListener
};