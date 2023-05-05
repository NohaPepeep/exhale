import React from 'react';
import renderer from 'react-test-renderer';
import DoctorCard from '../components/DoctorCard/DoctorCard';

it('renders correctly', () => {
  const tree = renderer
    .create(<DoctorCard name={' '} specialty= {' '} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});