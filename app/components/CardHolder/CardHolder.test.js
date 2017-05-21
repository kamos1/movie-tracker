import React from 'react';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock'
import   { CardHolder }  from './CardHolder';

describe('CardHolder', () => {

  it('renders card-holder', () => {
    const wrapper = shallow(<CardHolder movies={{}}  />)
    expect(wrapper.find('.card-holder').length).toEqual(1)

  })

  it('should have a single card if a single movie is passed in', () => {
    const movie = { 'Star Wars': {
      movie_id: 66,
      poster_path: 'posterURL',
      overview: 'The battle between the light and the dark',
      title: 'Star Wars',
      release_date: '20151215',
      vote_average: '10',
      }
    }

    const wrapper = mount(<CardHolder movies={movie} user={{}} />)
    let movieInfo = wrapper.find('Card').props().movies
    expect(movieInfo).toEqual(movie)
  })
})
