import React from 'react';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock'
import   { Card }  from './Card';

describe('Card Tests', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Card
      key={'iron-man'}
      history={'history'}
      user={{}}
      favorites={{}}
      handleFavorite={'fn'}
      movies={{}}
                      />);
  });

  test('Card generates 1 card', () => {
    expect(wrapper.find('.card-box').length).toEqual(1);
  });

  test('Card renders favorite button', () => {
    expect(wrapper.find('button').length).toEqual(1);
  });
});
