import React, {useState} from 'react'
import {TabStyled, TabContentStyled, TabsContainer, TabsContentContainer} from './styling'

export const Tabs = ({children, centered}) => {
	const initialTab = children[0].props.label
	const [activeTab, setActiveTab] = useState(initialTab)

	const onClick = (tab) => {
		setActiveTab(tab)
	}

	return (
		<div>
			<TabsContainer centered={centered}>
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
}

export const Tab = (props) => {
	const { children } = props

	return (
		<TabStyled {...props}>
			{children}
		</TabStyled>
	)
}