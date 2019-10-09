import React from 'react'
import styled from 'styled-components';
import {IconAdd, IconAddCircle, IconAddSquare, IconAirplane, IconAnnouncement, IconApplication, IconArchive, IconArrowsMerge, IconArrowsSplit, IconArrowThickDownCircle, IconArrowThickLeftCircle, IconArrowThickRightCircle, IconArrowThickUpCircle, IconArrowThinDownCircle, IconArrowThinLeftCircle, IconArrowThinRightCircle, IconArrowThinUpCircle, IconAsterix, IconAt, IconAttach, IconBatteryFull, IconBatteryHalf, IconBolt, IconBookClosed, IconBookOpen, IconBox, IconBrick, IconBug, IconBuoy, IconCalculator, IconCalendar, IconCalendarAdd, IconCalendarDate, IconCalendarRemove, IconCamera, IconCertificate, IconChart, IconChat, IconChatGroup, IconChatGroupAlt, IconCheck, IconChevronDown, IconChevronDownCircle, IconChevronLeftCircle, IconChevronRightCircle, IconChevronSelection, IconChevronUp, IconChevronUpCircle, IconClickTarget, IconClose, IconCloseCircle, IconCloseSquare, IconCloudDownload, IconClouds, IconCloudUpload, IconCode, IconCog, IconCollection, IconCompass, IconCreditCard, IconCurrencyDollar, IconCurrencyEuro, IconDashboard, IconDeliver, IconDesktop, IconDeviceSmartphone, IconDeviceTablet, IconDiscount, IconDocument, IconDocumentAdd, IconDocumentNotes, IconDocumentRemove, IconDoorEnter, IconDoorExit, IconDotsHorizontal, IconDotsVertical, IconDuplicate, IconEdit, IconExternalWindow, IconFactory, IconFastForward, IconFastRewind, IconFilm, IconFlag, IconFolder, IconFolderAdd, IconFolderRemove, IconGlobe, IconHardDrive, IconHeadphones, IconHeart, IconHelp, IconHistory, IconHome, IconHourGlass, IconIdentification, IconImportant, IconInboxCheck, IconInboxDownload, IconInboxFull, IconInboxUpload, IconInformation, IconInterface, IconKey, IconLaunch, IconLayers, IconLibrary, IconLight, IconLink, IconLocationPin, IconLock, IconLockOpen, IconMail, IconMap, IconMenu, IconMicrophone, IconMoney, IconMonitor, IconMoodHappy, IconMoodNeutral, IconMoodSad, IconNews, IconNotification, IconNotificationOff, IconOffice, IconOrderHorizontal, IconOrderVertical, IconPackage, IconPaint, IconPause, IconPhoneIncomingCall, IconPhoneOutgoingCall, IconPhoneRing, IconPhoto, IconPieChart, IconPin, IconPlay, IconPresentation, IconPresentationPlay, IconPrint, IconPuzzle, IconReceipt, IconRefresh, IconRemove, IconRemoveCircle, IconRemoveSquare, IconScale, IconSearch, IconSecurity, IconSecurityCheck, IconSecurityImportant, IconSend, IconServer, IconShoppingBag, IconShoppingBasket, IconShoppingCart, IconSign, IconSortAscending, IconSortDescending, IconStar, IconStop, IconStore, IconSurvey, IconSwatch, IconTag, IconTarget, IconTextCursor, IconThermostatFull, IconThermostatHalf, IconThumbsDown, IconThumbsUp, IconTicket, IconTime, IconTranslate, IconTrash, IconTrendingDown, IconTrendingUp, IconTrophy, IconTune, IconUmbrella, IconUser, IconUserAdd, IconUserCheck, IconUserCircle, IconUserCouple, IconUserGroup, IconUserRemove, IconVideocam, IconViewHidden, IconViewVisible, IconVolumeDown, IconVolumeMute, IconVolumeUp, IconWallet, IconWidgetAdd, IconWifi, IconWifiOff, IconWork, IconZoomIn, IconZoomOut} from './../build/index'
import {motion} from "framer-motion"

export default {
  title: 'Icons'
}

const IconContainer = styled(motion.div)`
	display:flex;
	flex-wrap: wrap;
	
	svg {
		height:40px;
		margin:5px;
	}
`

export const Base = () => (
	<IconContainer>
		<IconAdd />
		<IconAddCircle />
		<IconAddSquare />
		<IconAirplane />
		<IconAnnouncement />
		<IconApplication />
		<IconArchive />
		<IconArrowsMerge/>
		<IconArrowsSplit />
		<IconArrowThickDownCircle />
		<IconArrowThickLeftCircle />
		<IconArrowThickRightCircle />
		<IconArrowThickUpCircle />
		<IconArrowThinDownCircle />
		<IconArrowThinLeftCircle />
		<IconArrowThinRightCircle />
		<IconArrowThinUpCircle />
		<IconAsterix />
		<IconAt />
		<IconAttach />
		<IconBatteryFull />
		<IconBatteryHalf />
		<IconBolt />
		<IconBookClosed />
		<IconBookOpen />
		<IconBox />
		<IconBrick />
		<IconBug />
		<IconBuoy />
		<IconCalculator />
		<IconCalendar />
		<IconCalendarAdd />
		<IconCalendarDate />
		<IconCalendarRemove />
		<IconCamera />
		<IconCertificate />
		<IconChart />
		<IconChat />
		<IconChatGroup />
		<IconChatGroupAlt />
		<IconCheck />
		<IconChevronDown />
		<IconChevronDownCircle/>
		<IconChevronLeftCircle />
		<IconChevronRightCircle />
		<IconChevronSelection />
		<IconChevronUp />
		<IconChevronUpCircle />
		<IconClickTarget/>
		<IconClose />
		<IconCloseCircle />
		<IconCloseSquare />
		<IconCloudDownload />
		<IconClouds />
		<IconCloudUpload />
		<IconCode />
		<IconCog />
		<IconCollection />
		<IconCompass />
		<IconCreditCard />
		<IconCurrencyDollar />
		<IconCurrencyEuro />
		<IconDashboard />
		<IconDeliver />
		<IconDesktop />
		<IconDeviceSmartphone />
		<IconDeviceTablet />
		<IconDiscount />
		<IconDocument />
		<IconDocumentAdd />
		<IconDocumentNotes />
		<IconDocumentRemove />
		<IconDoorEnter />
		<IconDoorExit />
		<IconDotsHorizontal />
		<IconDotsVertical />
		<IconDuplicate />
		<IconEdit />
		<IconExternalWindow />
		<IconFactory />
		<IconFastForward />
		<IconFastRewind />
		<IconFilm />
		<IconFlag />
		<IconFolder />
		<IconFolderAdd />
		<IconFolderRemove />
		<IconGlobe />
		<IconHardDrive />
		<IconHeadphones />
		<IconHeart />
		<IconHelp />
		<IconHistory />
		<IconHome />
		<IconHourGlass />
		<IconIdentification />
		<IconImportant />
		<IconInboxCheck />
		<IconInboxDownload />
		<IconInboxFull />
		<IconInboxUpload />
		<IconInformation />
		<IconInterface />
		<IconKey />
		<IconLaunch />
		<IconLayers />
		<IconLibrary />
		<IconLight />
		<IconLink />
		<IconLocationPin />
		<IconLock />
		<IconLockOpen />
		<IconMail />
		<IconMap />
		<IconMenu />
		<IconMicrophone />
		<IconMoney />
		<IconMonitor />
		<IconMoodHappy />
		<IconMoodNeutral />
		<IconMoodSad />
		<IconNews />
		<IconNotification />
		<IconNotificationOff />
		<IconOffice />
		<IconOrderHorizontal />
		<IconOrderVertical />
		<IconPackage />
		<IconPaint />
		<IconPause />
		<IconPhoneIncomingCall />
		<IconPhoneOutgoingCall />
		<IconPhoneRing />
		<IconPhoto />
		<IconPieChart />
		<IconPin />
		<IconPlay />
		<IconPresentation />
		<IconPresentationPlay />
		<IconPrint />
		<IconPuzzle />
		<IconReceipt />
		<IconRefresh />
		<IconRemove />
		<IconRemoveCircle />
		<IconRemoveSquare />
		<IconScale />
		<IconSearch />
		<IconSecurity />
		<IconSecurityCheck />
		<IconSecurityImportant />
		<IconSend />
		<IconServer />
		<IconShoppingBag />
		<IconShoppingBasket />
		<IconShoppingCart />
		<IconSign />
		<IconSortAscending />
		<IconSortDescending />
		<IconStar />
		<IconStop />
		<IconStore />
		<IconSurvey />
		<IconSwatch />
		<IconTag />
		<IconTarget />
		<IconTextCursor />
		<IconThermostatFull />
		<IconThermostatHalf />
		<IconThumbsDown />
		<IconThumbsUp />
		<IconTicket />
		<IconTime />
		<IconTranslate />
		<IconTrash />
		<IconTrendingDown />
		<IconTrendingUp />
		<IconTrophy />
		<IconTune />
		<IconUmbrella />
		<IconUser />
		<IconUserAdd />
		<IconUserCheck />
		<IconUserCircle />
		<IconUserCouple />
		<IconUserGroup />
		<IconUserRemove />
		<IconVideocam />
		<IconViewHidden />
		<IconViewVisible />
		<IconVolumeDown />
		<IconVolumeMute />
		<IconVolumeUp />
		<IconWallet />
		<IconWidgetAdd />
		<IconWifi />
		<IconWifiOff />
		<IconWork />
		<IconZoomIn />
		<IconZoomOut />
	</IconContainer>
)