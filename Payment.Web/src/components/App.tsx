import * as React from 'react';
import { Navbar } from './Navbar';

type AppProps = {};

export const App: React.FunctionComponent<AppProps> = ({}) => {
  return (
    <>
      <Navbar />
      <main></main>
    </>
  );
};
