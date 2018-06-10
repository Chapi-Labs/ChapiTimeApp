import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Container, Content, List, ListItem, Body, Left, Text, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Header from './Header';

const Menu = ({ member, logout }) => (
  <Container>
    <Content>
      <List>
        <View>
          <Content padder>
            <Header
              title={`Hi ${member.firstName},`}
              content={`You are currently logged in as ${member.email}`}
            />
          </Content>

          <ListItem onPress={Actions.registroHoras} icon>
            <Left>
              <Icon name="time" />
            </Left>
            <Body>
              <Text>Ingresar Horas</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon name="list" />
            </Left>
            <Body>
              <Text>Ver horas ingresadas</Text>
            </Body>
          </ListItem>
          <ListItem onPress={logout} icon>
            <Left>
              <Icon name="power" />
            </Left>
            <Body>
              <Text>Logout</Text>
            </Body>
          </ListItem>
        </View>
      </List>
    </Content>
  </Container>
);

Menu.propTypes = {
  member: PropTypes.shape({}),
  logout: PropTypes.func.isRequired,
};

Menu.defaultProps = {
  member: {},
};

export default Menu;
