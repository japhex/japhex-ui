import React from 'react'
import {MoreText} from "../src/components/more-text"
import {Capsule as CapsuleStyled} from "../src/components/capsule"

export default {
  title: 'Utils',
}

export const Base = () => (
	'Utils'
)

export const MoreTextTrigger = () => (
	<MoreText maxLength={4}>
		test text
	</MoreText>
)

export const Capsule = () => (
	<CapsuleStyled type='primary'>
		test
	</CapsuleStyled>
)

Capsule.story = {
	name: 'Capsule'
}

MoreTextTrigger.story = {
	name: 'More text trigger'
}