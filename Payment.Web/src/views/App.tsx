import * as React from 'react';
import { Container } from 'react-bootstrap';
import { LoanForm } from '.';
import { Navbar } from '../components';
import { LoanRequest } from '../models';

const DefaultLoanRequest = () => ({
  principal: 10000,
  annualRate: 5,
  remainingPeriods: 12,
});

interface AppProps {}

export const App: React.FunctionComponent<AppProps> = ({}) => {
  const [loanRequest, setLoanRequest] = React.useState<LoanRequest>(
    DefaultLoanRequest()
  );

  return (
    <>
      <Navbar />
      <main>
        <Container>
          <h5 className="mb-3">Enter your loan info below</h5>
          <LoanForm loanRequest={loanRequest} />
        </Container>
      </main>
    </>
  );
};
