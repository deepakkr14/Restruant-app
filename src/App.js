import { Fragment } from 'react';
import Header from './Component/Layout/header';
import Meals from './Component/Meals/Meals'
function App() {
  return (
    <Fragment>
     <Header/>
     <main>
      <Meals/>
     </main>
    </Fragment>
  );
}

export default App;
