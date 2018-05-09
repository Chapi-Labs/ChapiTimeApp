import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Text, Form, Item, Label, Input, Button, Picker, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import DatePicker from 'react-native-datepicker'
import Loading from './Loading';
import Messages from './Messages';
import Header from './Header';
import Spacer from './Spacer';

class RegistroHoras extends React.Component {
  static propTypes = {
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
  }

  static defaultProps = {
    error: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      presupuesto: undefined,
      cliente: undefined,
      fecha: undefined,
      trabajador: undefined,
      password2: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (name, val) => {
    this.setState({
      ...this.state,
      [name]: val,
    });
  }

  handleSubmit = () => {
    
  }

  render() {
    const { loading, error } = this.props;

    if (loading) return <Loading />;

    return (
      <Container>
        <Content padder>
          <Header
            title="Nuevo Registro de Horas Invertidas"
          />

          {error && <Messages message={error} />}

          <Form>
            <Label>Proyecto presupuesto</Label>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              placeholder="Seleccione el presupuesto asignado"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              style={{ width: undefined }}
              selectedValue={this.state.presupuesto}
              onValueChange={v => this.handleChange('presupuesto', v)}
            >
              <Picker.Item label="Paint" value="key0" />
              <Picker.Item label="Nachos" value="key1" />
              <Picker.Item label="Compilador" value="key2" />
              <Picker.Item label="DB Manager" value="key3" />
              <Picker.Item label="Otello" value="key4" />
            </Picker>

            <Spacer size={10} />

            <DatePicker
              style={{width: 250}}
              date={this.state.fecha}
              mode="date"
              placeholder="Fecha de las horas invertidas"
              format="YYYY-MM-DD"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              
              onDateChange={(date) => this.handleChange('fecha', date)}
            />

            <Spacer size={10} />

            <Label>Cliente</Label>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              placeholder="Seleccione el cliente"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              style={{ width: undefined }}
              selectedValue={this.state.cliente}
              onValueChange={v => this.handleChange('cliente', v)}
            >
              <Picker.Item label="Zurdinho" value="key0" />
              <Picker.Item label="Etson" value="key1" />
              <Picker.Item label="Tomasin" value="key2" />
              <Picker.Item label="Sergio Molina" value="key3" />
              <Picker.Item label="Dr. Simi" value="key4" />
            </Picker>

            <Spacer size={10} />
            
            <Item stackedLabel>
              <Label>Registro de actividad y horas</Label>
              <Button transparent success>
              <Icon name="add-circle" /><Text>Agregar Actividad</Text>
              </Button>
            </Item>

            <Spacer size={10} />

            <Picker
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              placeholder="Seleccione el trabajador"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              style={{ width: undefined }}
              selectedValue={this.state.trabajador}
              onValueChange={v => this.handleChange('trabajador', v)}
            >
              <Picker.Item label="Pablo Diaz" value="key0" />
              <Picker.Item label="Adolfo Morales" value="key1" />
              <Picker.Item label="William Fuentes" value="key2" />
              <Picker.Item label="Diego Jacobs" value="key3" />
            </Picker>

            <Spacer size={20} />

            <Button block onPress={this.handleSubmit}>
              <Text>Guardar e ingresar otro</Text>
            </Button>

            <Spacer size={20} />

            <Button block onPress={this.handleSubmit}>
              <Text>Guardar y ver detalle</Text>
            </Button>
          </Form>
          
          <Spacer size={20} />

          <Button block bordered dark>
              <Text>Ver todas las horas ingresadas</Text>
            </Button>
        </Content>
      </Container>
    );
  }
}

export default RegistroHoras;
