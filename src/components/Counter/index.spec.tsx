/// <reference types="jest" />

import enzyme from 'enzyme';
import React from 'react';
import Counter from '.';

it('renders zero (0) when no count is given', () => {
  const counter = enzyme.shallow(<Counter />);
  expect(counter.find('.counter-value').props().value).toEqual(0);
});

it('renders the correct number when an an explicit count of 1 is given', () => {
  const counter = enzyme.shallow(<Counter count={1} />);
  expect(counter.find('.counter-value').props().value).toEqual(1);
});

it('renders the correct number when an an explicit count of 5 is given', () => {
  const counter = enzyme.shallow(<Counter count={5} />);
  expect(counter.find('.counter-value').props().value).toEqual(5);
});

it('throws when the count is negative', () => {
  expect(() => {
    enzyme.shallow(<Counter count={-1} />);
  }).toThrow();
});
