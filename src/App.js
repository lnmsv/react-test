import React from 'react';
import HeaderBlock from './components/HeaderBlock';

const App = () => {
  return (
    <>
      <HeaderBlock
        title="Учите слова онлайн"
        description="lalallalalalalal"
      />
      <HeaderBlock
        title="Нам нравится это"
        hideBackground={true}
      />
    </>
  );
}

export default App;
