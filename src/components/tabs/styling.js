import * as React from "react";
import styled from 'styled-components';

export const TabsContainer = styled.div`
	font-family:arial;
	font-size:14px;
	display: flex;
	margin-left:10px;
	justify-content: ${props => props.centered ? 'center' : 'left'};
`

export const TabsContentContainer = styled.div`
	font-family:arial;
	font-size:14px;
`

export const Tab = styled.li`
	position:relative;
	list-style-type: none;
	padding:10px 40px;
	background:${props => props.activeTab === props.tabLabel ? '#fff' : '#f5f7fa'};
	border:1px solid #ccd2d8;
	border-bottom:0;
	cursor:pointer;
	margin-right:2px;
	border-top:${props => props.activeTab === props.tabLabel ? '3px solid #353e4a' : '1px solid #ccd2d8'};
	color:${props => props.activeTab === props.tabLabel ? '#353e4a' : '#939ba6'};
	padding-top:${props => props.activeTab === props.tabLabel ? '8px' : '10px'};
	
	&:after {
		position: absolute;
	    bottom: -1px;
	    content: '';
	    height: 1px;
	    background:${props => props.activeTab === props.tabLabel ? '#fff' : '#ccc'};
	    width: 100%;
	    left: 0;
	}
`

const TabContent = styled.li`
	padding:15px;
	list-style-type: none;
	background:#fff;
	border:1px solid #ccc;
`

export const TabStyled = (props) => <Tab {...props} />
export const TabContentStyled = (props) => <TabContent {...props} />