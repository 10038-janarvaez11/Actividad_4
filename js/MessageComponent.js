import React from 'react';

class MessageComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Mensaje inicial',
    };
  }

  componentDidMount() {
    // Escuchar el evento personalizado
    window.addEventListener('buttonClick', this.handleButtonClick);
  }

  componentWillUnmount() {
    // Limpiar el event listener para evitar posibles fugas de memoria
    window.removeEventListener('buttonClick', this.handleButtonClick);
  }

  // Actualizar el mensaje cuando se recibe el evento personalizado
  handleButtonClick = (event) => {
    const { message } = event.detail;
    this.setState({ message });
  };

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default MessageComponent;
