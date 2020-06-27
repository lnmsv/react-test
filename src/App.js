import React from 'react';
import HeaderBlock from './components/HeaderBlock';

const App = () => {
  return (
    <>
      <HeaderBlock
        title="Учите слова онлайн"
        descr="это как будто бы хедер"
      />
      <HeaderBlock
        title="Нам нравится это"
        hideBackground={true}
      />
      <HeaderBlock
        title="И мы счастливы"
        descr="это как будто бы футер"
      />
    </>
  );
}

export default App;
