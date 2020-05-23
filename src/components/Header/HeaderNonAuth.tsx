import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import { useTranslation } from 'react-i18next';

import { logo4, logo5 } from 'assets/images/logo';

import NavButton from 'components/Buttons/NavButton';
import ElevationScroll from 'components/Header/ElevationScroll';
import { Position, StyleProps } from './type';
//routes
import * as ROUTES from 'constants/routes';
