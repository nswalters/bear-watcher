import river from './river.js';
import bears from '../helpers/data/bearData.js';

const addBearButtonListener = () => {
  $('#add-bear-button').click(addToRiverEvent);
};

const addToRiverEvent = (e) => {
  e.preventDefault();

  let bearName = $('#formBearName').val();
  let bearImageURL = $('#formBearImageURL').val();

  bears.setBears(bearName, bearImageURL);

  river.makeRiver();
  $('#bearForm').trigger("reset");
  location.href = "#river";
};

export default {
  addBearButtonListener
};