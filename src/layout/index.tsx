import {
	AppBar,
	Box,
	Container,
	Divider,
	Drawer,
	Grid,
	IconButton,
	List,
	ListItem,
	makeStyles,
	Theme,
	Toolbar,
	Typography,
} from "@material-ui/core"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import MenuIcon from "@material-ui/icons/Menu"
// import { useTheme } from "@material-ui/styles"
import React from "react"
import { Link } from "react-router-dom"

let useStyle = makeStyles((theme: Theme) => ({
	appBar: {
		backgroundColor: "transparent",
		height: "64px",
	},
	listMenu: {
		listStyle: "none",
		display: "flex",
		paddingLeft: "0",
		justifyContent: "space-between",
	},
	listMenuV: {
		listStyle: "none",
		display: "flex",
		flexDirection: "column",
		paddingLeft: "0",
		justifyContent: "center",
		height: "100%",
	},
	menuButton: {
		backgroundColor: "rgba(255,184,0, 1)",
		boxShadow: "0px 0px 10px 2px rgb(255, 184, 0, .5)",
		transition: "all .3s linear",
		height: 38,
		width: 38,
		"&:hover": {
			backgroundColor: "rgba(255,184,0, 1)",
			boxShadow: "0px 0px 10px 5px rgb(255, 184, 0, .6)",
		},
	},
	drawerHeader: {
		display: "flex",
		alignItems: "center",
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar,
		justifyContent: "flex-start",
	},
	drawerPaper: {
		width: "100%",
		backgroundColor: "rgba(55,55,55, .6)",
		backdropFilter: "blur(2px)",
	},
	listMenuItem: {
		"& > a": {
			textDecoration: "none",
			color: "#FFF",
			fontSize: "1rem",
			fontWeight: 300,
			transition: "all .3s linear",
		},
		margin: "0 25px",
		display: "block",
		height: "35px",
		"&:hover": {
			borderBottom: "2px solid #FFB800",
		},
		"&:hover > a": {
			fontWeight: 500,
		},
		"&:first-child": {
			marginLeft: "0",
		},
		"&:last-child": {
			marginRight: "0",
		},
	},
	listMenuItemV: {
		"& > a": {
			textDecoration: "none",
			color: "#FFF",
			fontSize: "1rem",
			fontWeight: 300,
			transition: "all .3s linear",
		},
		margin: "15px auto",
		display: "block",
		height: "35px",
		width: "100px",
		textAlign: "center",
		"&:hover": {
			borderBottom: "2px solid #FFB800",
		},
		"&:hover > a": {
			fontWeight: 500,
		},
	},
	footer: {
		display: "flex",
		width: "100%",
		backgroundColor: theme.palette.background.paper,
		minHeight: "40px",
		overflow: "hidden",
	},
	grid: {
		flexGrow: 1,
		marginTop: "50px",
		[theme.breakpoints.between("xs", "sm")]: {
			marginTop: "20px",
		},
	},
}))
const Layout: React.FC = ({ children }) => {
	const [open, setOpen] = React.useState<boolean>(false)
	const styles = useStyle()
	//const theme = useTheme()
	return (
		<>
			<AppBar
				position='relative'
				className={styles.appBar}
				elevation={0}
				color='transparent'>
				<Toolbar>
					<Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
						<List className={styles.listMenu}>
							<ListItem className={styles.listMenuItem} disableGutters>
								<Link to='/'>Главная</Link>
							</ListItem>
							<ListItem className={styles.listMenuItem} disableGutters>
								<Link to='/o-nas'>О Нас</Link>
							</ListItem>
							<ListItem className={styles.listMenuItem} disableGutters>
								<Link to='/vakansii'>Вакансии</Link>
							</ListItem>
							<ListItem className={styles.listMenuItem} disableGutters>
								<Link to='/uslugi'>Услуги</Link>
							</ListItem>
						</List>
					</Box>
					<Typography
						variant='subtitle1'
						component='div'
						color='secondary'
						style={{ fontWeight: 500 }}>
						<img src='/img/phone.svg' width={32} height={18} alt='Disp' />{" "}
						Диспетчерская:{" "}
						<Typography
							variant='subtitle1'
							component='span'
							style={{ fontWeight: 300 }}>
							+380 (62) 338 07 50
						</Typography>
					</Typography>
					<Box
						sx={{
							display: { xs: "flex", sm: "none" },
							ml: "auto",
							position: "relative",
						}}>
						<IconButton
							edge='start'
							className={styles.menuButton}
							color='inherit'
							onClick={() => setOpen(true)}
							aria-label='menu'>
							<MenuIcon />
						</IconButton>
					</Box>
				</Toolbar>
				<Drawer
					anchor='right'
					open={open}
					onClose={() => setOpen(false)}
					classes={{ paper: styles.drawerPaper }}>
					<div className={styles.drawerHeader}>
						<IconButton onClick={() => setOpen(false)}>
							<ChevronRightIcon color='primary' />
						</IconButton>
					</div>
					<Divider />
					<List className={styles.listMenuV}>
						<ListItem className={styles.listMenuItemV}>
							<Link to='/'>Главная</Link>
						</ListItem>
						<ListItem className={styles.listMenuItemV}>
							<Link to='/o-nas'>О Нас</Link>
						</ListItem>
						<ListItem className={styles.listMenuItemV}>
							<Link to='/vakansii'>Вакансии</Link>
						</ListItem>
						<ListItem className={styles.listMenuItemV}>
							<Link to='/uslugi'>Услуги</Link>
						</ListItem>
					</List>
				</Drawer>
			</AppBar>
			<div
				style={{
					position: "relative",
					minHeight: "100%",
					marginTop: "-64px",
					zIndex: 0,
				}}>
				{children}
			</div>
			<footer className={styles.footer}>
				<Grid container spacing={2} className={styles.grid}>
					<Grid item xs={12}>
						<Container>
							<Grid
								container
								justifyContent='space-between'
								spacing={4}
								style={{ marginBottom: "0", textAlign: "center" }}>
								<Grid item>
									<a
										href='http://gorod-donetsk.com'
										style={{ display: "flex", alignItems: "center" }}>
										<img
											src='/img/admins.svg'
											alt='Администрация'
											width={26}
											height={34}
										/>{" "}
										<Typography
											variant='caption'
											component='span'
											style={{ fontWeight: 700, marginLeft: "10px" }}
											color='primary'>
											Администрация города Донецка
										</Typography>
									</a>
								</Grid>
								<Grid item>
									<Typography
										variant='body2'
										component='span'
										color='secondary'>
										ККП администрации г. Донецка «Донецкгорсвет»
										<br />
										<Typography
											variant='caption'
											component='span'
											color='primary'>
											©2022
										</Typography>
									</Typography>
								</Grid>
								<Grid item>
									<Typography
										variant='h6'
										component='span'
										style={{ fontSize: "0.75rem", fontWeight: 400 }}
										color='secondary'>
										Разработка сайта{" "}
										<a href='https://t.me/ITVash'>
											<Typography
												variant='h6'
												component='span'
												style={{ fontSize: "0.75rem", fontWeight: 400 }}
												color='primary'>
												Vash
											</Typography>
										</a>{" "}
										&{" "}
										<a href='https://t.me/zh3ka'>
											<Typography
												variant='h6'
												component='span'
												style={{ fontSize: "0.75rem", fontWeight: 400 }}
												color='primary'>
												Zh3ka
											</Typography>
										</a>
									</Typography>
								</Grid>
							</Grid>
						</Container>
					</Grid>
				</Grid>
			</footer>
		</>
	)
}

export default Layout
