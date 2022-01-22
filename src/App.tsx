/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/img-redundant-alt */
import {
	Button,
	Container,
	Grid,
	List,
	ListItem,
	ListItemIcon,
	Paper,
	Theme,
	Typography,
	Divider,
	ListSubheader,
} from "@material-ui/core"

import { makeStyles } from "@material-ui/styles"
import React from "react"
import Layout from "./layout"
let useStyle = makeStyles((theme: Theme) => ({
	videoBox: {
		position: "absolute",
		width: "100%",
		height: "100%",
		objectFit: "cover",
		top: "0",
		zIndex: 0,
	},
	containerVideo: {
		color: "#FFF",
		zIndex: 1,
		position: "relative",
		paddingTop: "70px",
		height: "100%",
		"&::before": {
			content: '""',
			position: "absolute",
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			backgroundColor: "rgba(0,0,0, .6)",
		},
	},
	container: {
		color: "#FFF",
		zIndex: 1,
		position: "relative",
		paddingTop: "70px",
		height: "100%",
	},
	homeContent: {
		display: "flex",
		flexDirection: "column",
		position: "absolute",
		left: "50%",
		top: "50%",
		transform: "translate(-50%, -50%)",
		textAlign: "center",
		justifyContent: "center",
	},
	butt: {
		width: "max-content",
		margin: "0 auto",
		paddingTop: "8px",
		boxShadow: "0px 0px 10px 2px rgb(255, 184, 0, .5)",
		"&:hover": {
			boxShadow: "0px 0px 10px 5px rgb(255, 184, 0, .6)",
			backgroundColor: theme.palette.secondary.main,
		},
	},
	grid: {
		flexGrow: 1,
		marginBottom: "50px",
		[theme.breakpoints.between("xs", "sm")]: {
			marginBottom: "20px",
		},
	},
	gridItem: {
		borderRight: "2px solid #292929",
		"&:last-child": {
			borderRight: "none",
		},
		[theme.breakpoints.between("xs", "sm")]: {
			borderRight: "none",
		},
	},
	cards: {
		height: "auto",
		backgroundColor: "transparent",
		width: 400,
		[theme.breakpoints.between("xs", "lg")]: {
			width: 300,
		},
	},
	listCards: {
		height: "calc(100vh - 400px)",
		overflowY: "scroll",
		"&::-webkit-scrollbar": {
			width: "2px",
			backgroundColor: theme.palette.background.paper,
		},
		"&::-webkit-scrollbar-track": {
			width: "2px",
			backgroundColor: theme.palette.background.paper,
		},
		"&::-webkit-scrollbar-thumb": {
			width: "2px",
			backgroundColor: theme.palette.secondary.main,
		},
	},
	imgNews: {
		width: "100%",
		height: "100%",
		objectPosition: "center center",
		objectFit: "cover",
		transition: "all 0.3s linear",
		marginBottom: "5px",
	},
	wrappImage: {
		width: "100%",
		height: "100px",
		overflow: "hidden",
	},
	lastNews: {
		display: "flex",
		flexDirection: "column",
		transition: "all 0.3s linear",
		"&:hover > div > img": {
			transform: "scale(1.3)",
		},
		"&:hover > h3": {
			color: theme.palette.secondary.main,
		},
		"&:hover > span": {
			color: theme.palette.secondary.main,
		},
		"& > h3": {
			width: "100%",
			fontSize: "0.700rem",
			fontWeight: 700,
			lineHeight: 1.2,
			marginBottom: "5px",
		},
		"& > span": {
			width: "100%",
			fontSize: "0.650rem",
			fontWeight: 300,
			lineHeight: 1.2,
		},
	},
	listNews: {
		display: "flex",
		flexDirection: "column",
		marginBottom: "40px",
		[theme.breakpoints.between("xs", "lg")]: {
			marginBottom: "20px",
		},
		"&:hover > h3": {
			color: theme.palette.secondary.main,
		},
		"&:hover > span": {
			color: theme.palette.secondary.main,
		},
		"& > h3": {
			width: "100%",
			fontSize: "0.700rem",
			fontWeight: 700,
			lineHeight: 1.2,
			marginBottom: "5px",
		},
		"& > span": {
			width: "100%",
			fontSize: "0.650rem",
			fontWeight: 300,
			lineHeight: 1.2,
		},
	},
	large: {
		width: theme.spacing(13),
		height: theme.spacing(13),
		[theme.breakpoints.between("xs", "lg")]: {
			width: theme.spacing(9),
			height: theme.spacing(9),
		},
	},
	maps: {
		paddingTop: 0,
		position: "relative",
		width: 390,
		height: 290,
		zIndex: 0,
		"& > div > iframe": {
			width: 365,
			height: 260,
			[theme.breakpoints.between("xs", "lg")]: {
				width: 290,
				height: 250,
			},
		},
		[theme.breakpoints.between("xs", "lg")]: {
			width: 300,
			height: 260,
		},
		"&::before": {
			content: "''",
			position: "absolute",
			backgroundColor: theme.palette.secondary.main,
			width: 365,
			height: 260,
			[theme.breakpoints.between("xs", "lg")]: {
				width: 290,
				height: 250,
			},
			right: 0,
			bottom: 0,
			zIndex: -1,
		},
	},
	divider: {
		backgroundColor: "rgba(255,255,255, .12)",
		margin: "35px 0 25px",
		[theme.breakpoints.between("xs", "lg")]: {
			margin: "25px 0 15px",
		},
	},
}))
const App: React.FC = () => {
	const styles = useStyle()
	return (
		<Layout>
			<Paper
				square
				elevation={0}
				style={{ position: "relative", height: "100%" }}>
				<Container maxWidth={false} className={styles.containerVideo}>
					<div className={styles.homeContent}>
						<img
							src='/img/logo.png'
							alt='Logo'
							width={200}
							style={{ margin: "0 auto" }}
						/>
						<Typography
							variant='h4'
							component='h1'
							style={{
								margin: "25px 0",
								textShadow: "0px 4px 4px rgba(0, 0, 0, 0.35)",
								fontWeight: 700,
							}}>
							Делаем жизнь в нашем городе ярче!
						</Typography>
						<Button
							size='medium'
							variant='contained'
							color='secondary'
							className={styles.butt}>
							Оставить заявку
						</Button>
					</div>
				</Container>
				<video className={styles.videoBox} preload='auto' autoPlay loop muted>
					<source src='/video/1.webm' />
				</video>
			</Paper>
			<Paper
				square
				elevation={0}
				style={{
					position: "relative",
					minHeight: "100%",
					backgroundColor: "#1b1b1b",
				}}>
				<Container maxWidth={false} className={styles.container}>
					<Grid container spacing={2} className={styles.grid}>
						<Grid item xs={12}>
							<Grid
								container
								justifyContent='center'
								spacing={4}
								style={{ marginBottom: "0" }}>
								<Grid item className={styles.gridItem}>
									<Paper className={styles.cards} square elevation={0}>
										<Typography
											variant='h5'
											component='h2'
											color='secondary'
											style={{ fontWeight: 700 }}>
											Последние новости
										</Typography>
										<List>
											<ListItem disableGutters className={styles.lastNews}>
												<ListItemIcon className={styles.wrappImage}>
													<img
														className={styles.imgNews}
														src='https://source.unsplash.com/random/800x600'
														alt='Photo'
													/>
												</ListItemIcon>
												<Typography
													variant='body2'
													style={{ fontWeight: 700 }}
													component='h3'
													color='primary'>
													Донецкгорсвет проводит обработку спецтехники
												</Typography>
												<Typography
													variant='body2'
													style={{ fontWeight: 300 }}
													component='span'
													color='primary'>
													16 июня 2021, 15:53
												</Typography>
											</ListItem>
											<ListItem disableGutters className={styles.lastNews}>
												<ListItemIcon className={styles.wrappImage}>
													<img
														className={styles.imgNews}
														src='https://source.unsplash.com/random/800x600'
														alt='Photo'
													/>
												</ListItemIcon>
												<Typography
													variant='body2'
													component='h3'
													style={{ fontWeight: 700 }}
													color='primary'>
													Донецкгорсвет проводит обработку спецтехники
												</Typography>
												<Typography
													variant='body2'
													style={{ fontWeight: 300 }}
													component='span'
													color='primary'>
													16 июня 2021, 15:53
												</Typography>
											</ListItem>
											<ListItem disableGutters className={styles.lastNews}>
												<ListItemIcon className={styles.wrappImage}>
													<img
														className={styles.imgNews}
														src='https://source.unsplash.com/random/800x600'
														alt='Photo'
													/>
												</ListItemIcon>
												<Typography
													variant='body2'
													component='h3'
													style={{ fontWeight: 700 }}
													color='primary'>
													Донецкгорсвет проводит обработку спецтехники
												</Typography>
												<Typography
													variant='body2'
													style={{ fontWeight: 300 }}
													component='span'
													color='primary'>
													16 июня 2021, 15:53
												</Typography>
											</ListItem>
										</List>
									</Paper>
								</Grid>
								<Grid item className={styles.gridItem}>
									<Paper className={styles.cards} square elevation={0}>
										<Typography
											variant='h5'
											component='h2'
											color='secondary'
											style={{ fontWeight: 700 }}>
											Лента новостей
										</Typography>
										<List className={styles.listCards}>
											<ListItem disableGutters className={styles.listNews}>
												<Typography
													variant='body2'
													style={{ fontWeight: 700 }}
													component='h3'
													color='primary'>
													Донецкгорсвет проводит обработку спецтехники
												</Typography>
												<Typography
													variant='subtitle2'
													component='span'
													color='primary'>
													16 июня 2021, 15:53
												</Typography>
											</ListItem>
											<ListItem disableGutters className={styles.listNews}>
												<Typography
													variant='body2'
													style={{ fontWeight: 700 }}
													component='h3'
													color='primary'>
													Донецкгорсвет проводит обработку спецтехники
												</Typography>
												<Typography
													variant='subtitle2'
													component='span'
													color='primary'>
													16 июня 2021, 15:53
												</Typography>
											</ListItem>
											<ListItem disableGutters className={styles.listNews}>
												<Typography
													variant='body2'
													style={{ fontWeight: 700 }}
													component='h3'
													color='primary'>
													Донецкгорсвет проводит обработку спецтехники
												</Typography>
												<Typography
													variant='subtitle2'
													component='span'
													color='primary'>
													16 июня 2021, 15:53
												</Typography>
											</ListItem>
											<ListItem disableGutters className={styles.listNews}>
												<Typography
													variant='body2'
													style={{ fontWeight: 700 }}
													component='h3'
													color='primary'>
													Донецкгорсвет проводит обработку спецтехники
												</Typography>
												<Typography
													variant='subtitle2'
													component='span'
													color='primary'>
													16 июня 2021, 15:53
												</Typography>
											</ListItem>
											<ListItem disableGutters className={styles.listNews}>
												<Typography
													variant='body2'
													style={{ fontWeight: 700 }}
													component='h3'
													color='primary'>
													Донецкгорсвет проводит обработку спецтехники
												</Typography>
												<Typography
													variant='subtitle2'
													component='span'
													color='primary'>
													16 июня 2021, 15:53
												</Typography>
											</ListItem>
											<ListItem disableGutters className={styles.listNews}>
												<Typography
													variant='body2'
													style={{ fontWeight: 700 }}
													component='h3'
													color='primary'>
													Донецкгорсвет проводит обработку спецтехники
												</Typography>
												<Typography
													variant='subtitle2'
													component='span'
													color='primary'>
													16 июня 2021, 15:53
												</Typography>
											</ListItem>
											<ListItem disableGutters className={styles.listNews}>
												<Typography
													variant='body2'
													style={{ fontWeight: 700 }}
													component='h3'
													color='primary'>
													Донецкгорсвет проводит обработку спецтехники
												</Typography>
												<Typography
													variant='subtitle2'
													component='span'
													color='primary'>
													16 июня 2021, 15:53
												</Typography>
											</ListItem>
											<ListItem disableGutters className={styles.listNews}>
												<Typography
													variant='body2'
													style={{ fontWeight: 700 }}
													component='h3'
													color='primary'>
													Донецкгорсвет проводит обработку спецтехники
												</Typography>
												<Typography
													variant='subtitle2'
													component='span'
													color='primary'>
													16 июня 2021, 15:53
												</Typography>
											</ListItem>
											<ListItem disableGutters className={styles.listNews}>
												<Typography
													variant='body2'
													style={{ fontWeight: 700 }}
													component='h3'
													color='primary'>
													Донецкгорсвет проводит обработку спецтехники
												</Typography>
												<Typography
													variant='subtitle2'
													component='span'
													color='primary'>
													16 июня 2021, 15:53
												</Typography>
											</ListItem>
											<ListItem disableGutters className={styles.listNews}>
												<Typography
													variant='body2'
													style={{ fontWeight: 700 }}
													component='h3'
													color='primary'>
													Донецкгорсвет проводит обработку спецтехники
												</Typography>
												<Typography
													variant='subtitle2'
													component='span'
													color='primary'>
													16 июня 2021, 15:53
												</Typography>
											</ListItem>
											<ListItem disableGutters className={styles.listNews}>
												<Typography
													variant='body2'
													style={{ fontWeight: 700 }}
													component='h3'
													color='primary'>
													Донецкгорсвет проводит обработку спецтехники
												</Typography>
												<Typography
													variant='subtitle2'
													component='span'
													color='primary'>
													16 июня 2021, 15:53
												</Typography>
											</ListItem>
											<ListItem disableGutters className={styles.listNews}>
												<Typography
													variant='body2'
													style={{ fontWeight: 700 }}
													component='h3'
													color='primary'>
													Донецкгорсвет проводит обработку спецтехники
												</Typography>
												<Typography
													variant='subtitle2'
													component='span'
													color='primary'>
													16 июня 2021, 15:53
												</Typography>
											</ListItem>
											<ListItem disableGutters className={styles.listNews}>
												<Typography
													variant='body2'
													style={{ fontWeight: 700 }}
													component='h3'
													color='primary'>
													Донецкгорсвет проводит обработку спецтехники
												</Typography>
												<Typography
													variant='subtitle2'
													component='span'
													color='primary'>
													16 июня 2021, 15:53
												</Typography>
											</ListItem>
											<ListItem disableGutters className={styles.listNews}>
												<Typography
													variant='body2'
													style={{ fontWeight: 700 }}
													component='h3'
													color='primary'>
													Донецкгорсвет проводит обработку спецтехники
												</Typography>
												<Typography
													variant='subtitle2'
													component='span'
													color='primary'>
													16 июня 2021, 15:53
												</Typography>
											</ListItem>
											<ListItem disableGutters className={styles.listNews}>
												<Typography
													variant='body2'
													style={{ fontWeight: 700 }}
													component='h3'
													color='primary'>
													Донецкгорсвет проводит обработку спецтехники
												</Typography>
												<Typography
													variant='subtitle2'
													component='span'
													color='primary'>
													16 июня 2021, 15:53
												</Typography>
											</ListItem>
											<ListItem disableGutters className={styles.listNews}>
												<Typography
													variant='body2'
													style={{ fontWeight: 700 }}
													component='h3'
													color='primary'>
													Донецкгорсвет проводит обработку спецтехники
												</Typography>
												<Typography
													variant='subtitle2'
													component='span'
													color='primary'>
													16 июня 2021, 15:53
												</Typography>
											</ListItem>
											<ListItem disableGutters className={styles.listNews}>
												<Typography
													variant='body2'
													style={{ fontWeight: 700 }}
													component='h3'
													color='primary'>
													Донецкгорсвет проводит обработку спецтехники
												</Typography>
												<Typography
													variant='subtitle2'
													component='span'
													color='primary'>
													16 июня 2021, 15:53
												</Typography>
											</ListItem>
											<ListItem disableGutters className={styles.listNews}>
												<Typography
													variant='body2'
													style={{ fontWeight: 700 }}
													component='h3'
													color='primary'>
													Донецкгорсвет проводит обработку спецтехники
												</Typography>
												<Typography
													variant='subtitle2'
													component='span'
													color='primary'>
													16 июня 2021, 15:53
												</Typography>
											</ListItem>
											<ListItem disableGutters className={styles.listNews}>
												<Typography
													variant='body2'
													style={{ fontWeight: 700 }}
													component='h3'
													color='primary'>
													Донецкгорсвет проводит обработку спецтехники
												</Typography>
												<Typography
													variant='subtitle2'
													component='span'
													color='primary'>
													16 июня 2021, 15:53
												</Typography>
											</ListItem>
											<ListItem disableGutters className={styles.listNews}>
												<Typography
													variant='body2'
													style={{ fontWeight: 700 }}
													component='h3'
													color='primary'>
													Донецкгорсвет проводит обработку спецтехники
												</Typography>
												<Typography
													variant='subtitle2'
													component='span'
													color='primary'>
													16 июня 2021, 15:53
												</Typography>
											</ListItem>
											<ListItem disableGutters className={styles.listNews}>
												<Typography
													variant='body2'
													style={{ fontWeight: 700 }}
													component='h3'
													color='primary'>
													Донецкгорсвет проводит обработку спецтехники
												</Typography>
												<Typography
													variant='subtitle2'
													component='span'
													color='primary'>
													16 июня 2021, 15:53
												</Typography>
											</ListItem>
										</List>
									</Paper>
								</Grid>
								<Grid item className={styles.gridItem}>
									<Paper className={styles.cards} square elevation={0}>
										<List disablePadding>
											<ListItem disableGutters style={{ alignItems: "end" }}>
												<ListItemIcon>
													<img
														src='/img/users.svg'
														alt='Avatar'
														className={styles.large}
													/>
												</ListItemIcon>
												<Paper
													square
													elevation={0}
													style={{
														display: "flex",
														flexDirection: "column",
														marginLeft: "25px",
													}}>
													<Typography
														variant='subtitle2'
														component='span'
														style={{ marginBottom: "10px", fontWeight: 300 }}
														color='secondary'>
														Директор предприятия
													</Typography>
													<Typography
														variant='body1'
														component='span'
														style={{ fontWeight: 300 }}
														color='primary'>
														Моисеенков Алексей
														<br />
														Викторович
													</Typography>
												</Paper>
											</ListItem>
											<Divider className={styles.divider} />
											<ListSubheader disableGutters>
												<Typography
													variant='body1'
													component='span'
													style={{ fontWeight: 700, fontSize: "1.5rem" }}
													color='primary'>
													Контакты
												</Typography>
											</ListSubheader>
											<ListItem disableGutters>
												<ListItemIcon>
													<img
														src='/img/phone.svg'
														alt='phone'
														width={42}
														height={42}
													/>
												</ListItemIcon>
												<Paper
													square
													elevation={0}
													style={{
														display: "flex",
														flexDirection: "column",
														marginLeft: "5px",
													}}>
													<Typography
														variant='body1'
														component='span'
														style={{ fontWeight: 700, fontSize: "1.125rem" }}
														color='primary'>
														Диспетчерская
													</Typography>
													<Typography
														variant='body2'
														style={{ fontWeight: 700 }}
														component='span'
														color='secondary'>
														+380 (62) 338 07 50
													</Typography>
												</Paper>
											</ListItem>
											<ListItem disableGutters>
												<ListItemIcon>
													<img
														src='/img/email.svg'
														alt='phone'
														width={42}
														height={42}
													/>
												</ListItemIcon>
												<Paper
													square
													elevation={0}
													style={{
														display: "flex",
														flexDirection: "column",
														marginLeft: "5px",
													}}>
													<Typography
														variant='body1'
														style={{ fontWeight: 700, fontSize: "1.125rem" }}
														component='span'
														color='primary'>
														Почта
													</Typography>
													<Typography
														variant='body2'
														component='span'
														style={{ fontWeight: 700 }}
														color='secondary'>
														gorsvet_pr@mail.ru
													</Typography>
												</Paper>
											</ListItem>
											<ListItem disableGutters className={styles.maps}>
												<div
													style={{ position: "relative", overflow: "hidden" }}>
													<a
														href='https://yandex.ru/maps/142/donetsk/?utm_medium=mapframe&utm_source=maps'
														style={{
															color: "#eee",
															fontSize: "12px",
															position: "absolute",
															top: "0px",
														}}>
														Донецк
													</a>
													<a
														href='https://yandex.ru/maps/142/donetsk/house/vulytsia_horkoho_50/Z04YfgdmSEwFQFptfXV4cXlrZQ==/?ll=37.806192%2C47.990581&utm_medium=mapframe&utm_source=maps&z=16.38'
														style={{
															color: "#eee",
															fontSize: "12px",
															position: "absolute",
															top: "14px",
														}}>
														Яндекс.Карты — транспорт, навигация, поиск мест
													</a>
													<iframe
														src='https://yandex.ru/map-widget/v1/-/CCUy7ETFwB'
														width='560'
														height='400'
														frameBorder={0}
														allowFullScreen={true}
														style={{ position: "relative" }}></iframe>
												</div>
											</ListItem>
										</List>
									</Paper>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					<Paper
						style={{ width: "100%", display: "flex", margin: "25px 0" }}
						square
						elevation={0}>
						<Button
							size='medium'
							variant='contained'
							color='secondary'
							className={styles.butt}>
							Скачать приложение на{"  "}
							<img
								src='/img/android.svg'
								alt='android'
								style={{ margin: "0 5px" }}
								width={21}
								height={21}
							/>
							{"  "}и{"  "}
							<img
								src='/img/windows.svg'
								style={{ margin: "0 5px" }}
								alt='window'
								width={17}
								height={17}
							/>
						</Button>
					</Paper>
				</Container>
			</Paper>
		</Layout>
	)
}

export default App
