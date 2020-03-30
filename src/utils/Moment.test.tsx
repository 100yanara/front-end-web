import Moment from './Moment';

describe('Calendar Class', () => {
  const date = new Moment('en');
  it('올바른 월의 이름을 반환해야 한다', () => {
    expect(date.getMonth()).toEqual('March');
  });
});
