import { findIndex, map } from 'lodash';
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

const formRequestUrl = (loanRequest: LoanRequest): string => {
  let requestUrl = `${config.API_URL}Loan?principal=${loanRequest.principal}&annualRate=${loanRequest.annualRate}&remainingPeriods=${loanRequest.remainingPeriods}`;

  if (!!loanRequest.overpayment) {
    requestUrl += `&overpayment=${loanRequest.overpayment}`;
  }

  return requestUrl;
};

interface AppProps {}

export const App: React.FC<AppProps> = ({}) => {
  const [loanRequest, setLoanRequest] = useState<LoanRequest>(
    DefaultLoanRequest()
  );
  const [loanResults, setLoanResults] = useState<LoanResult[]>([]);
  const [resultCount, setResultCount] = useState<number>(1);

  const handleUpdateRequest = (updated: Partial<LoanRequest>) => {
    setLoanRequest({ ...loanRequest, ...updated });
  };

  const handleSubmitRequest = () => {
    fetch(formRequestUrl(loanRequest), {
      method: 'POST',
    })
      .then((data) => data.json())
      .then((result: LoanResult) => {
        setLoanResults([...loanResults, { ...result, resultNum: resultCount }]);
        console.log(resultCount);
        setResultCount((c) => c + 1);
      })
      .catch(() => alert('Whoops! Something went wrong'));
  };

  const handleRemoveResult = (resultNum: number) => {
    console.log('here', resultNum);
    const index = findIndex(loanResults, (l) => l.resultNum == resultNum);
    console.log('INDEX', index);

    loanResults.splice(index, 1);
    setLoanResults([...loanResults]);
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
                  <div key={i}>
                    <span className="font-weight-light text-muted">
                      #{l.resultNum}
                    </span>
                    <MemoizedLoanCard loan={l} remove={handleRemoveResult} />
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};
