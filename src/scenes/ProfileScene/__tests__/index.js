import 'react-native'
import React from 'react'
import { ProfileScene } from './../../../scenes'
import { store } from './../../../redux/store'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

it('ProfileScene renders correctly', () => {
  const tree = renderer.create(
    <ProfileScene store={store}/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})