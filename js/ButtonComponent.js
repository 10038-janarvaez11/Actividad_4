import React from 'react';

class ButtonComponent extends React.Component {
  handleClick = () => {
    // Emitir un evento personalizado cuando se hace clic en el botón
    const customEvent = new CustomEvent('buttonClick', {
      detail: { message: '¡Hola desde el botón!' },
    });
    window.dispatchEvent(customEvent);
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        Haz clic en mí
      </button>
    );
  }
}

export default ButtonComponent;
