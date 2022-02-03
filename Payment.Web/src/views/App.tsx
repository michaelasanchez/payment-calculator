import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { LoanForm } from '.';
import { Navbar } from '../components';
import { LoanRequest } from '../models';

const DefaultLoanRequest = () => ({
  principal: 10000,
  annualRate: 5,
  remainingPeriods: 12,
});

interface AppProps {}

export const App: React.FC<AppProps> = ({}) => {
  const [loanRequest, setLoanRequest] = React.useState<LoanRequest>(
    DefaultLoanRequest()
  );

  const handleUpdateRequest = (updated: Partial<LoanRequest>) => {
    setLoanRequest({ ...loanRequest, ...updated });
  };

  const handleSubmitRequest = () => {
    console.log(loanRequest);
  };

  return (
    <>
      <Navbar />
      <main>
        <Container>
          <Row>
            <Col sm={12} md={6}>
              <h5 className="mb-3">Enter your loan info below</h5>
              <LoanForm
                loanRequest={loanRequest}
                updateRequest={handleUpdateRequest}
                submitRequest={handleSubmitRequest}
              />
            </Col>
            <Col sm={12} md={6}></Col>
          </Row>
        </Container>
      </main>
    </>
  );
};
