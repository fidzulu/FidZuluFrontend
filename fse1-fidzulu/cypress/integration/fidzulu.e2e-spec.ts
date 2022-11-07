import fidzuluPage from 'cypress/support/fidzulu.po';

let app: fidzuluPage;
beforeEach(() => {
  app = new fidzuluPage();
});

describe('Get main FidZulu Page', () => {
  it('Properly loads page', () => {
    app.navigate('');
    app.checkTableExists();
  });
});

describe('Load Food Data', () => {
  it('Respective food content should be displayed', () => {
    app.navigate('');
    app.clickServiceLink('Get Food');
    app.checkTableExists();
    app.checkFoodTablePopulated();
  });
});

describe('Load Bike Data', () => {
  it('Respective bike content should be displayed', () => {
    app.navigate('');
    app.clickServiceLink('Get Bikes');
    app.checkTableExists();
    app.checkBikeTablePopulated();
  });
});

describe('Load Toys Data', () => {
  it('Respective toy content should be displayed', () => {
    app.navigate('');
    app.clickServiceLink('Get Toys');
    app.checkTableExists();
    app.checkToysTablePopulated();
  });
});
