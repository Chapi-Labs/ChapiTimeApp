import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Item, Label, Input, Button, Picker, Icon } from 'native-base';
import { StyleSheet } from 'react-native';
import Spacer from './Spacer';

const Activity = () => (
  <View style={styles.container}>
    <Label>Area</Label>
    <Picker
      mode="dropdown"
      iosIcon={<Icon name="ios-arrow-down-outline" />}
      placeholder="Seleccione el area"
      placeholderStyle={{ color: "#bfc6ea" }}
      placeholderIconColor="#007aff"
    >
      <Picker.Item label="Contabilidad" value="key0" />
      <Picker.Item label="Auditoria" value="key1" />
    </Picker>

    <Spacer size={10} />

    <Label>Actividad</Label>
    <Picker
      mode="dropdown"
      iosIcon={<Icon name="ios-arrow-down-outline" />}
      placeholder="Seleccione la actividad"
      placeholderStyle={{ color: "#bfc6ea" }}
      placeholderIconColor="#007aff"
    >
      <Picker.Item label="Venta" value="key0" />
      <Picker.Item label="Compra" value="key1" />
    </Picker>

    <Spacer size={10} />

    <Item stackedLabel>
      <Label>Horas invertidas</Label>
      <Input />
    </Item>

  </View>
);

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
});

export default Activity;
