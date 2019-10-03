import React, {useState} from 'react'
import {TabStyled, TabContentStyled, TabsContainer, TabsContentContainer} from './styling'

export const Tabs = ({children}) => {
	const [activeTab, setActiveTab] = useState('Tab 1')

	const onClick = (tab) => {
		setActiveTab(tab)
	}

	return (
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
}

export const Tab = (props) => {
	const { children } = props

	return (
		<TabStyled {...props}>
			{children}
		</TabStyled>
	)
}