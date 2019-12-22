import React, { FunctionComponent } from 'react';

import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { Omit } from '@material-ui/types';
import clsx from 'clsx';

import { NavLink } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import Drawer, { DrawerProps } from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import IconAspectRatio from '@material-ui/icons/AspectRatio';
import IconList from '@material-ui/icons/List';
import IconMeetingRoom from '@material-ui/icons/MeetingRoom';
import IconMovie from '@material-ui/icons/Movie';
import IconPeople from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';
import IconRate from '@material-ui/icons/PregnantWoman';

const categories = [
  {
    id: 'Dashboard',
    children: [
      { id: 'Home', icon: <IconPeople />, path: '/' },
    ],
  },
  {
    id: 'Theater',
    children: [
      { id: 'Genres', icon: <IconList />, path: '/genres' },
      { id: 'Screen Types', icon: <IconAspectRatio />, path: '/screen-types' },
      { id: 'Rates', icon: <IconRate />, path: '/rates' },
      { id: 'Movies', icon: <IconMovie />, path: '/movies' },
      { id: 'Rooms', icon: <IconMeetingRoom />, path: '/rooms' },
      { id: 'Showtimes', icon: <IconMovie />, path: '/showtimes' },
    ],
  },
  {
    id: 'User',
    children: [
      { id: 'Users', icon: <SettingsIcon />, path: '/test' },
    ],
  },
];

const styles = (theme: Theme) =>
  createStyles({
    categoryHeader: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    categoryHeaderPrimary: {
      color: theme.palette.common.white,
    },
    item: {
      paddingTop: 1,
      paddingBottom: 1,
      color: 'rgba(255, 255, 255, 0.7)',
      '&:hover,&:focus': {
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
      },
    },
    itemCategory: {
      backgroundColor: '#232f3e',
      boxShadow: '0 -1px 0 #404854 inset',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    firebase: {
      fontSize: 24,
      color: theme.palette.common.white,
    },
    itemActiveItem: {
      color: '#4fc3f7',
    },
    itemPrimary: {
      fontSize: 'inherit',
    },
    itemIcon: {
      minWidth: 'auto',
      marginRight: theme.spacing(2),
    },
    divider: {
      marginTop: theme.spacing(2),
    },
  });

export interface NavigatorProps extends Omit<DrawerProps, 'classes'>, WithStyles<typeof styles> {}

const Navigator: FunctionComponent<NavigatorProps> = (props) => {
  const { classes, ...other } = props;

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem className={clsx(classes.firebase, classes.item, classes.itemCategory)}>
          Cinex
        </ListItem>
        <ListItem className={clsx(classes.item, classes.itemCategory)}>
          <ListItemIcon className={classes.itemIcon}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: classes.itemPrimary,
            }}
          >
            Cinex NYC
          </ListItemText>
        </ListItem>
        {categories.map(({ id, children }) => (
          <React.Fragment key={id}>
            <ListItem className={classes.categoryHeader}>
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary,
                }}
              >
                {id}
              </ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, path }) => (
              <ListItem
                key={childId}
                button
                component={NavLink} to={path} activeClassName={classes.itemActiveItem} exact={true}
                className={classes.item}
              >
                <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.itemPrimary,
                  }}
                >
                  {childId}
                </ListItemText>
              </ListItem>
            ))}
            <Divider className={classes.divider} />
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}

export default withStyles(styles)(Navigator);