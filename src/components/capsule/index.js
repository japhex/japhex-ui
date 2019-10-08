import React from 'react'
import {CapsuleStyled} from './styling'

export const Capsule = (props) => {
	const {children} = props

	return (
		<CapsuleStyled {...props}>
			{children}
		</CapsuleStyled>
	)
}