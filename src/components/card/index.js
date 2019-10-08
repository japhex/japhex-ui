import React from 'react'
import {CardStyled, Header, Content} from './styling'

export const Card = (props) => {
	const {title, children} = props

	return (
		<CardStyled {...props}>
			<Header>
				{title}
			</Header>
			<Content>
				{children}
			</Content>
		</CardStyled>
	)
}