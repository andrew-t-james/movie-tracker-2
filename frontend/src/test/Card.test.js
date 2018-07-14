import React from 'react';
import { Card } from '../Components/Card/Card';
// import { mockCleanedMovieList } from '../mock-data/mock-clean-data'
import { shallow } from 'enzyme';

describe('Card', () => {
  test('should match snapshot when rendered', () => {
    const mockMovie = {
      average: 7.5,
      id: 284053,
      image: "/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
      overview: "Thor is on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the prophecy of destruction to his homeworld and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela.",
      title: "Thor: Ragnarok"
    };
    const wrapper = shallow(
      <Card 
        card={mockMovie}
      />);

    expect(wrapper).toMatchSnapshot();
  });
});