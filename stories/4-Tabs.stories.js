import React, {useState} from 'react'
import {Tabs, Tab} from "../src/components/tabs"
import {Input} from "../src/components/input"
import IconSearch from "../src/utils/icons/icon-search.svg"

export default {
  title: 'Tabs',
}

export const Base = () => (
	<Tabs>
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

// Centered
export const Centered = () => (
	<Tabs centered>
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

Centered.story = {
	name: 'Centered'
}