import React = require('react');
import { Card, Col, Container, Row } from 'react-bootstrap';
import { LoanResult } from '../models';

interface LoanCardProps {
  loan: LoanResult;
}

const formatCurrency = (amount: number): string => `$${amount}`;
const formatPercent = (rate: number): string => `${rate}%`;

const LoanCard: React.FC<LoanCardProps> = (props) => {
  const { loan } = props;

  return (
    <Card>
      <Container>
        <Row>
          <Col>
            <div className="card-line">
              <strong>Principal</strong>
              <span>{formatCurrency(loan.principal)}</span>
            </div>
            <div className="card-line">
              <strong>Annual Rate</strong>
              <span>{formatPercent(loan.rate)}</span>
            </div>
          </Col>
          <Col>
            <div className="card-line">
              <strong>Interest Paid</strong>
              <span>{formatCurrency(loan.totalInterest)}</span>
            </div>
            <div className="card-line">
              <strong>Total Paid</strong>
              <span>{formatCurrency(loan.totalPaid)}</span>
            </div>
            <div className="card-line">
              <strong># Payments</strong>
              <span>{loan.totalPeriods}</span>
            </div>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export const MemoizedLoanCard = React.memo(LoanCard);
