import React, { useContext } from 'react';
import appContext from '../Context/appContext';

function Tasks() {
  const {
    token
  } = useContext(appContext);

  // useEffect(() => {
  // chama a função de get, para pegar as tasks do banco de dados;
  // }, []);

  return (
    <div>
      <h1>This is my Tasks Page</h1>
    </div>
  )
}

export default Tasks;