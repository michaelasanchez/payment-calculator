import { map } from 'lodash';
import * as React from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { LoanForm } from '.';
import { MemoizedLoanCard, Navbar } from '../components';
import { LoanRequest, LoanResult } from '../models';
import { config, strings } from '../shared';

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
            <Col md={12} lg={6}>
              <h4 className="mb-3">{strings.instructions}</h4>
              <LoanForm
                loanRequest={loanRequest}
                updateRequest={handleUpdateRequest}
                submitRequest={handleSubmitRequest}
              />
            </Col>
            <Col md={12} lg={6}>
              {loanResults.length > 0 && <h4>{strings.results}</h4>}
              <div className="result-container">
                {map(loanResults, (l, i) => (
                  <>
                    <span className="font-weight-light text-muted">#{i}</span>
                    <MemoizedLoanCard key={i} loan={l} />
                  </>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};
