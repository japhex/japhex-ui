import React from 'react'
import {CardStyled, Header, Content} from './styling'

export const Card = (props) => {
	const {titleContent, children} = props

	return (
		<CardStyled {...props}>
			<Header>
				{titleContent}
			</Header>
			<Content>
				{children}
			</Content>
		</CardStyled>
	)
}