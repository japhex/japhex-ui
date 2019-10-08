import React from 'react'
import {CardStyled, Header, Footer, Content} from './styling'

export const Card = (props) => {
	const {titleContent, children} = props

	return (
		<CardStyled {...props}>
			<Header>
				{titleContent}
			</Header>
			{children}
		</CardStyled>
	)
}

export const CardContent = (props) => {
	const { children } = props

	return (
		<Content {...props}>
			{children}
		</Content>
	)
}

export const CardFooter = (props) => {
	const { children } = props

	return (
		<Footer {...props}>
			{children}
		</Footer>
	)
}