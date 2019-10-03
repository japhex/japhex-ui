import React, {useState} from 'react'
import {Tabs, Tab} from "../src/components/tabs"

export default {
  title: 'Tabs',
}

export const Base = () => {
	const [activeTab, setActiveTab] = useState('Tab 1')

	const onClick = (tab) => {
		setActiveTab(tab)
	}

	return (
		<Tabs onClick={onClick} activeTab={activeTab}>
			<Tab label="Tab 1">
				Tab 1 content
			</Tab>
			<Tab label="Tab 2">
				Tab 2 content
			</Tab>
			<Tab label="Tab 3">
				Tab 3 content
			</Tab>
		</Tabs>
	)
}