import React from 'react';
import { Scene, Tabs, Stack } from 'react-native-router-flux';
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

import MemberContainer from '../../containers/Member';
import ProfileComponent from '../components/Profile';

const Index = (
  <Stack>
    <Scene hideNavBar>
      <Stack
        key="profile"
        title="PROFILE"
        icon={() => <Icon name="contact" {...DefaultProps.icons} />}
        {...DefaultProps.navbarProps}
      >
        <Scene key="profileHome" component={MemberContainer} Layout={ProfileComponent} />
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
          key="login"
          title="LOGIN"
          {...DefaultProps.navbarProps}
          component={LoginContainer}
          Layout={LoginComponent}
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
