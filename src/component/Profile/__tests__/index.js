import 'react-native'
import React from 'react'
import { Profile } from './..'
import { UserInfo } from './../UserInfo'
import { UserFeedPhoto } from './../UserFeedPhoto'
import { PopularFeedPhoto } from './../PopularFeedPhoto'

import renderer from 'react-test-renderer'

it('Profile renders correctly', () => {
  const tree = renderer.create(
    <Profile userInfo={{}} userFeedPhoto={{}} popularFeedPhoto={{}}/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('UserInfo renders correctly', () => {
  const tree = renderer.create(
    <UserInfo data={{}}/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('UserFeedPhoto renders correctly', () => {
  const tree = renderer.create(
    <UserFeedPhoto data={{}}/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('PopularFeedPhoto renders correctly', () => {
  const tree = renderer.create(
    <PopularFeedPhoto data={{}}/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})