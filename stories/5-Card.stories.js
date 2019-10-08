import React from 'react'
import {Card, CardContent, CardFooter} from "../src/components/card"
import {Button} from "../src/components/button"

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

export const WithFooter = () => (
	<Card titleContent={'Metallica'}>
		<CardContent>
			test
		</CardContent>
		<CardFooter>
			<Button>
				test button
			</Button>
		</CardFooter>
	</Card>
)

WithFooter.story = {
	name: 'With footer'
}