import React, {useState} from 'react'
import {Tabs, Tab} from "../src/components/tabs"

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