import React, {useState} from 'react'
import {Card} from "../src/components/card"
import {Tab, Tabs} from "../src/components/tabs"

export default {
  title: 'Card',
}

export const Base = () => (
	<Card titleContent={'Metallica'}>
		test
	</Card>
)

// Centered
export const Multiple = () => (
	<div style={{display:'flex', flexFlow: 'row wrap'}}>
		<Card titleContent={'Metallica'}>test</Card>
		<Card titleContent={'Metallica'}>test</Card>
		<Card titleContent={'Metallica'}>test</Card>
		<Card titleContent={'Metallica'}>test</Card>
		<Card titleContent={'Metallica'}>test</Card>
		<Card titleContent={'Metallica'}>test</Card>
	</div>
)

Multiple.story = {
	name: 'Multiple'
}