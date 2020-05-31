import bearsData from '../helpers/data/bearData.js';
import utils from '../helpers/utils.js';

const makeRiver = () => {
  const bears = bearsData.getBears();

  let domString = '';

  bears.forEach(bear => {
    domString += `
    <div class="card bear-card">
      <img src="${bear.imageURL}" alt="Image of Tracked Bear" class="card-img-top card-image">
      <div class="bear-name-holder d-flex justify-content-center align-items-center px-2">
        ${bear.name}
      </div>
      <div class="card-body d-flex p-0 bear-card-body">
        <div class="card-body-left col col-6">
          <div class="bear-icons d-flex justify-content-between">
            <i class="far fa-plus-square fa-2x bear-success-icon"></i>
            <span class="bear-success-icon bear-success-count">110</span>
            <i class="fas fa-fish fa-2x bear-success-icon right-5"></i>
          </div>
          <div class="timestamp-container container">
            <div class="row">
                <div class="col col-6">
                  <div>2020-05-30 21:41</div>
                </div>
                <div class="col col-6">
                  <div>2020-05-30 21:41</div>
                </div>
            </div>
            <div class="row">
                <div class="col col-6">
                  <div>2020-05-30 21:41</div>
                </div>
                <div class="col col-6">
                  <div>2020-05-30 21:41</div>
                </div>
            </div>
            <div class="row">
                <div class="col col-6">
                  <div>2020-05-30 21:41</div>
                </div>
                <div class="col col-6">
                  <div>2020-05-30 21:41</div>
                </div>
            </div>
            <div class="row">
                <div class="col col-6">
                  <div>2020-05-30 21:41</div>
                </div>
                <div class="col col-6">
                  <div>2020-05-30 21:41</div>
                </div>
            </div>
            <div class="row">
                <div class="col col-6">
                  <div>2020-05-30 21:41</div>
                </div>
                <div class="col col-6">
                  <div>2020-05-30 21:41</div>
                </div>
            </div>
            <div class="row">
                <div class="col col-6">
                  <div>2020-05-30 21:41</div>
                </div>
                <div class="col col-6">
                  <div>2020-05-30 21:41</div>
                </div>
            </div>
            <div class="row">
              <div class="col col-6">
                <div>2020-05-30 21:41</div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body-right col col-6">
          <div class="bear-icons d-flex flex-row-reverse justify-content-between">
            <i class="far fa-minus-square fa-2x bear-failed-icon"></i>
            <span class="bear-failed-icon bear-fail-count">54</span>
            <i class="fas fa-fish fa-2x bear-failed-icon fa-flip-horizontal"></i>
          </div>
          <div class="timestamp-container container">
            <div class="row">
                <div class="col col-6">
                  <div>2020-05-30 21:41</div>
                </div>
                <div class="col col-6">
                  <div>2020-05-30 21:41</div>
                </div>
            </div>
            <div class="row">
                <div class="col col-6">
                  <div>2020-05-30 21:41</div>
                </div>
                <div class="col col-6">
                  <div>2020-05-30 21:41</div>
                </div>
            </div>
            <div class="row">
                <div class="col col-6">
                  <div>2020-05-30 21:41</div>
                </div>
                <div class="col col-6">
                  <div>2020-05-30 21:41</div>
                </div>
            </div>
            <div class="row">
                <div class="col col-6">
                  <div>2020-05-30 21:41</div>
                </div>
                <div class="col col-6">
                  <div>2020-05-30 21:41</div>
                </div>
            </div>
            <div class="row">
                <div class="col col-6">
                  <div>2020-05-30 21:41</div>
                </div>
                <div class="col col-6">
                  <div>2020-05-30 21:41</div>
                </div>
            </div>
            <div class="row">
                <div class="col col-6">
                  <div>2020-05-30 21:41</div>
                </div>
                <div class="col col-6">
                  <div>2020-05-30 21:41</div>
                </div>
            </div>
            <div class="row">
                <div class="col col-6">
                  <div>2020-05-30 21:41</div>
                </div>
                <div class="col col-6">
                  <div>2020-05-30 21:41</div>
                </div>
            </div>
            <div class="row">
                <div class="col col-6">
                  <div>2020-05-30 21:41</div>
                </div>
                <div class="col col-6">
                  <div>2020-05-30 21:41</div>
                </div>
            </div>
            <div class="row">
                <div class="col col-6">
                  <div>2020-05-30 21:41</div>
                </div>
                <div class="col col-6">
                  <div>2020-05-30 21:41</div>
                </div>
            </div>
            <div class="row">
              <div class="col col-6">
                <div>2020-05-30 21:41</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  });

  utils.printToDom('#bear-collection', domString);
};

export default {
  makeRiver
};