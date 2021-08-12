import React from 'react';
import { 
  makeStyles, 
  AppBar, 
  Toolbar, 
  IconButton, 
  Button,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  ListSubheader,
  Grid,
  Hidden,
  Switch
} from '@material-ui/core';

import { useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VideoCall from '@material-ui/icons/VideoCall';
import Apps from '@material-ui/icons/Apps';
import Notifications from '@material-ui/icons/Notifications';
import HomeIcon from '@material-ui/icons/Home';
import Subscriptions from '@material-ui/icons/Subscriptions';
import Whatshot from '@material-ui/icons/Whatshot';
import VideoLibrary from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History';
import AddCircle from '@material-ui/icons/AddCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: theme.palette.background.dark,
  },
  AppBar:{
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: 'none',
  },
  logo:{
    height: 30,
  },
  menuIcon:{
    marginRight: theme.spacing(5),
    marginLeft: theme.spacing(6),
  },
  icons:{
    marginRight: theme.spacing(5),
  },
  grow:{
    flexGrow: 1,
  },
  ListItemText:{
    fontSize: 14,
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4 
  },
  subheader:{
    textTransform: 'uppercase'
  }
}));

const videos = [
  {
    id: 1,
    title:
      'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
    channel: 'Lucas Nhimi',
    views: '11 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb1.png',
  },
  {
    id: 2,
    title:
      'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
    channel: 'Lucas Nhimi',
    views: '957 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb2.png',
  },
  {
    id: 3,
    title:
      'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
    channel: 'Lucas Nhimi',
    views: '106 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb3.png',
  },
  {
    id: 4,
    title:
      'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
    channel: 'Lucas Nhimi',
    views: '5,6 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb4.png',
  },
  {
    id: 5,
    title:
      'EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26',
    channel: 'Lucas Nhimi',
    views: '2,2 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb5.png',
  },
  {
    id: 6,
    title: 'COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01',
    channel: 'Lucas Nhimi',
    views: '233 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb6.png',
  },
  {
    id: 7,
    title:
      'PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01',
    channel: 'Lucas Nhimi',
    views: '118 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb7.png',
  },
  {
    id: 8,
    title:
      'GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04',
    channel: 'Lucas Nhimi',
    views: '1,9 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb8.png',
  },
];


function Home({darkMode, setDarkMode}) {

  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root} >
      <AppBar color="inherit" className={classes.AppBar}>
        <Toolbar>
          <IconButton  className={classes.menuIcon} >
             <MenuIcon />
          </IconButton>

          <img 
          src={
            theme.palette.type === 'dark' 
            ? '/images/branco.png'
            : '/images/preto.png'  
          } alt="logo" className={classes.logo} />

          <div  className={classes.grow} />

          <Switch 
            value={darkMode}
            onChange={()=> setDarkMode(!darkMode)}
            className={classes.icons} 
          />

          <IconButton className={classes.icons} > 
             <VideoCall />
          </IconButton>
          <IconButton  className={classes.icons} > 
             <Apps />
          </IconButton>
          <IconButton  className={classes.icons} > 
             <Notifications />
          </IconButton>
          <Button variant='outlined' color="secondary" startIcon={<AccountCircle />}>Fazer Login</Button>
        </Toolbar>
      </AppBar>

      <Box display='flex'>
      <Hidden mdDown>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <List>
                <ListItem button classes={{root: classes.listItem}}>
                  <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                  <ListItemText classes={{
                    primary: classes.ListItemText
                  }} primary={'Início'} />
                </ListItem>

                <ListItem button classes={{root: classes.listItem}}>
                  <ListItemIcon>{<Whatshot />}</ListItemIcon>
                  <ListItemText classes={{
                    primary: classes.ListItemText
                  }} primary={'Em alta'} />
                </ListItem>

                <ListItem button classes={{root: classes.listItem}}>
                  <ListItemIcon>{<Subscriptions />}</ListItemIcon>
                  <ListItemText classes={{
                    primary: classes.ListItemText
                  }} primary={'Inscrições'} />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button classes={{root: classes.listItem}}>
                  <ListItemIcon>{<VideoLibrary />}</ListItemIcon>
                  <ListItemText classes={{
                    primary: classes.ListItemText
                  }} primary={'Biblioteca'} />
                </ListItem>

                <ListItem button classes={{root: classes.listItem}}>
                  <ListItemIcon>{<History />}</ListItemIcon>
                  <ListItemText classes={{
                    primary: classes.ListItemText
                  }} primary={'Histórico'} />
                </ListItem>
            </List>
            <Divider />
            <Box p={6} >
                  <Typography variant='body2'>
                    Faça Login para curtir vídeos, comentar e se inscrever.
                  </Typography>
                  <Box mt={2}>
                    <Button variant='outlined' color='secondary' startIcon={<AccountCircle />}>
                        Fazer Login
                    </Button>
                  </Box>
            </Box>
            <Divider />
            <List 
                componet='nav'
                aria-labelledby='nested-list-subheader'
                subheader={
                  <ListSubheader
                    component='div'
                    id='nested-list-subheader'
                    className={classes.subheader}
                  >
                    O Melhor do Youtube
                  </ListSubheader>
                }
                >
                <ListItem button classes={{root: classes.listItem}}>
                  <ListItemIcon>{<AddCircle />}</ListItemIcon>
                  <ListItemText classes={{
                    primary: classes.ListItemText
                  }} primary={'Música'} />
                </ListItem>

                <ListItem button classes={{root: classes.listItem}}>
                  <ListItemIcon>{<AddCircle />}</ListItemIcon>
                  <ListItemText classes={{
                    primary: classes.ListItemText
                  }} primary={'Esportes'} />
                </ListItem>

                <ListItem button classes={{root: classes.listItem}}>
                  <ListItemIcon>{<AddCircle />}</ListItemIcon>
                  <ListItemText classes={{
                    primary: classes.ListItemText
                  }} primary={'Jogos'} />
                </ListItem>
                <ListItem button classes={{root: classes.listItem}}>
                  <ListItemIcon>{<AddCircle />}</ListItemIcon>
                  <ListItemText classes={{
                    primary: classes.ListItemText
                  }} primary={'Filmes'} />
                </ListItem>
                <ListItem button classes={{root: classes.listItem}}>
                  <ListItemIcon>{<AddCircle />}</ListItemIcon>
                  <ListItemText classes={{
                    primary: classes.ListItemText
                  }} primary={'Notícias'} />
                </ListItem>
                <ListItem button classes={{root: classes.listItem}}>
                  <ListItemIcon>{<AddCircle />}</ListItemIcon>
                  <ListItemText classes={{
                    primary: classes.ListItemText
                  }} primary={'Ao Vivo'} />
                </ListItem>
                <ListItem button classes={{root: classes.listItem}}>
                  <ListItemIcon>{<AddCircle />}</ListItemIcon>
                  <ListItemText classes={{
                    primary: classes.ListItemText
                  }} primary={'Destaques'} />
                </ListItem>
                <ListItem button classes={{root: classes.listItem}}>
                  <ListItemIcon>{<AddCircle />}</ListItemIcon>
                  <ListItemText classes={{
                    primary: classes.ListItemText
                  }} primary={'Vídeos 360'} />
                </ListItem>
                <Divider/>
                <ListItem button classes={{root: classes.listItem}}>
                  <ListItemIcon>{<AddCircle />}</ListItemIcon>
                  <ListItemText classes={{
                    primary: classes.ListItemText
                  }} primary={'Procurar mais'} />
                </ListItem>
                <Divider/>
            </List>

          </div>
        </Drawer>
      </Hidden>
        <Box p={8}>
          <Toolbar/>
          <Typography
            variant='h5'
            color='textPrimary'
            style={{fontWeight: 600}}
          >
            Recomendados
          </Typography>

          <Grid container spacing={4}>
          {videos.map((item, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box>
                  <img
                    style={{ width: '100%' }}
                    alt={item.title}
                    src={item.thumb}
                  />
                  <Box>
                    <Typography
                      style={{ fontWeight: 600 }}
                      gutterBottom
                      variant='body1'
                      color='textPrimary'
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      display='block'
                      variant='body2'
                      color='textSecondary'
                    >
                      {item.channel}
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                      {`${item.views} • ${item.date}`}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>

        </Box>

      </Box>
    </div>
  )
}

export default Home;