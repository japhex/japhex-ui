import React from 'react'
import {TabStyled, TabContentStyled, TabsContainer, TabsContentContainer} from './styling'

export const Tabs = ({children, onClick, activeTab}) => (
	<div>
		<TabsContainer>
			{children.map(tab => (
				<TabStyled onClick={() => onClick(tab.props.label)} activeTab={activeTab} tabLabel={tab.props.label}>{tab.props.label}</TabStyled>
			))}
		</TabsContainer>
		<TabsContentContainer>
			{children.map(tab => (
				activeTab === tab.props.label && (<TabContentStyled>{tab.props.children}</TabContentStyled>)
			))}
		</TabsContentContainer>
	</div>
)

export const Tab = (props) => {
	const { children } = props

	return (
		<TabStyled {...props}>
			{children}
		</TabStyled>
	)
}