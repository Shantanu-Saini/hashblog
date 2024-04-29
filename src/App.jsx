import React from 'react'
import conf from './conf/config.js';

const App = () => {
  console.log(conf.appwriteProjectId);
  return (
    <>
      <h1>Hello  World!</h1>
    </>
  )
}

export default App;