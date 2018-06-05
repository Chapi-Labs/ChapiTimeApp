import React from 'react';
import { Scene, Stack } from 'react-native-router-flux';
import { Icon } from 'native-base';

import DefaultProps from '../constants/navigation';
import AppConfig from '../../constants/config';

import RegistroHorasContainer from '../../containers/RegistroHoras';
import RegistroHorasComponent from '../components/RegistroHoras';

import LoginContainer from '../../containers/Login';
import LoginComponent from '../components/Login';

import ForgotPasswordContainer from '../../containers/ForgotPassword';
import ForgotPasswordComponent from '../components/ForgotPassword';

import UpdateProfileContainer from '../../containers/UpdateProfile';
import UpdateProfileComponent from '../components/UpdateProfile';
import ProfileComponent from '../components/Profile';
import MemberContainer from '../../containers/Member';

const Index = (
  <Stack>
    <Scene hideNavBar>
      <Stack
        key="profile"
        title="Inicio"
        icon={() => <Icon name="contact" {...DefaultProps.icons} />}
        {...DefaultProps.navbarProps}
      >
        <Scene
          key="home"
          component={LoginContainer}
          Layout={LoginComponent}
        />
        <Scene
          key="menu"
          component={MemberContainer}
          Layout={ProfileComponent}
        />
        <Scene
          back
          key="registroHoras"
          title="REGISTRO HORAS"
          {...DefaultProps.navbarProps}
          component={RegistroHorasContainer}
          Layout={RegistroHorasComponent}
        />
        <Scene
          back
          key="forgotPassword"
          title="FORGOT PASSWORD"
          {...DefaultProps.navbarProps}
          component={ForgotPasswordContainer}
          Layout={ForgotPasswordComponent}
        />
        <Scene
          back
          key="updateProfile"
          title="UPDATE PROFILE"
          {...DefaultProps.navbarProps}
          component={UpdateProfileContainer}
          Layout={UpdateProfileComponent}
        />
      </Stack>
    </Scene>
  </Stack>
);

export default Index;
