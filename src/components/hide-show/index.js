import React, {useEffect, useState} from 'react'
import {MoreTextStyled} from './styling'
import IconMore from '../../../src/utils/icons/icon-dots-horizontal.svg'
import {Capsule} from "../capsule"

export const MoreText = (props) => {
	const {children, maxLength} = props
	const [maxRenderLength, setMaxRenderLength] = useState(1000)
	const contentLength = children.length

	useEffect(() => {
		setMaxRenderLength(maxLength);
	}, [setMaxRenderLength, maxLength])

	const handleOnClick = (expandText = true) => {
		setMaxRenderLength(expandText ? 1000 : maxLength)
	}

	return (
		<MoreTextStyled {...props}>
			{contentLength > maxRenderLength ?
				<div>
					{children.substring(0,maxLength)}...
					<Capsule onClick={() => handleOnClick()} iconOnly>
						<IconMore/>
					</Capsule>
				</div>
			:
				<div>
					{children}
					<Capsule onClick={() => handleOnClick(false)} iconOnly>
						<IconMore/> less
					</Capsule>
				</div>
			}
		</MoreTextStyled>
	)
}