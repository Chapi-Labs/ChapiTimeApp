import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import { Container, Content, Form, Item, Label, Input, Text, Button, Card } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Loading from './Loading';
import Messages from './Messages';
import Spacer from './Spacer';

const logoImage = require('../../images/ChapiTime.png');

class Login extends React.Component {
  static propTypes = {
    member: PropTypes.shape({
      email: PropTypes.string,
    }),
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
  }

  static defaultProps = {
    error: null,
    member: {},
  }

  constructor(props) {
    super(props);
    this.state = {
      email: (props.member && props.member.email) ? props.member.email : '',
      password: '',
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
    this.props.onFormSubmit(this.state)
      .then(() => Actions.registroHoras())
      .catch(e => console.log(`Error: ${e}`));
  }

  render() {
    const { loading, error } = this.props;

    if (loading) return <Loading />;

    return (
      <Container>
        <Content padder>
          {error && <Messages message={error} />}

          <Image source={logoImage} style={{ height: 200, width: null }} />

          <Card>
            <Form>
              <Item stackedLabel>
                <Label>Usuario o Correo</Label>
                <Input
                  autoCapitalize="none"
                  value={this.state.email}
                  keyboardType="email-address"
                  onChangeText={v => this.handleChange('email', v)}
                />
              </Item>
              <Item stackedLabel>
                <Label>Contraseña</Label>
                <Input
                  secureTextEntry
                  onChangeText={v => this.handleChange('password', v)}
                />
              </Item>

              <Spacer size={20} />

              <Button block onPress={this.handleSubmit}>
                <Text>Iniciar</Text>
              </Button>
            </Form>

            <Spacer size={10} />

            <Button block bordered dark onPress={Actions.forgotPassword}>
              <Text>Olvidé contraseña</Text>
            </Button>
          </Card>
        </Content>
      </Container>
    );
  }
}


export default Login;
