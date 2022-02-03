import { map } from 'lodash';
import * as React from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { LoanForm } from '.';
import { MemoizedLoanCard, Navbar } from '../components';
import { LoanRequest, LoanResult } from '../models';
import { config } from '../shared';

const DefaultLoanRequest = () => ({
  principal: 10000,
  annualRate: 5,
  remainingPeriods: 12,
});

const formRequestUrl = (loanRequest: LoanRequest): string =>
  `${config.API_URL}Loan?principal=${loanRequest.principal}&annualRate=${loanRequest.annualRate}&remainingPeriods=${loanRequest.remainingPeriods}`;

interface AppProps {}

export const App: React.FC<AppProps> = ({}) => {
  const [loanRequest, setLoanRequest] = useState<LoanRequest>(
    DefaultLoanRequest()
  );

  const [loanResults, setLoanResults] = useState<LoanResult[]>([]);

  const handleUpdateRequest = (updated: Partial<LoanRequest>) => {
    setLoanRequest({ ...loanRequest, ...updated });
  };

  const handleSubmitRequest = () => {
    console.log(loanRequest);

    fetch(formRequestUrl(loanRequest), {
      method: 'POST',
    })
      .then((data) => data.json())
      .then((result: LoanResult) => {
        setLoanResults([...loanResults, result]);
      });
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
            <Col sm={12} md={6}>
              {map(loanResults, (l, i) => (
                <MemoizedLoanCard key={i} loan={l} />
              ))}
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};
