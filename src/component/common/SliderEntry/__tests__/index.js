import 'react-native'
import React from 'react'
import { SliderEntry } from './../../SliderEntry'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <SliderEntry data={{ thumbnail: '' }}/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
