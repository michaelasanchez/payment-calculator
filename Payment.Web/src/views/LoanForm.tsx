import React = require('react');
import { Form } from 'react-bootstrap';
import { LoanRequest } from '../models';

interface LoanFormProps {
  loanRequest: LoanRequest;
}

export const LoanForm: React.FC<LoanFormProps> = (props) => {
  const { loanRequest } = props;
  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Principal</Form.Label>
          <Form.Control size="lg" value={loanRequest.principal} />
          <Form.Text muted>Current or total loan amount</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Annual Rate</Form.Label>
          <Form.Control size="lg" value={loanRequest.annualRate} />
          <Form.Text muted>Interest rate percentage</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Remaining Periods</Form.Label>
          <Form.Control size="lg" value={loanRequest.remainingPeriods} />
          <Form.Text muted>
            Number of remaining payment periods (in months)
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Overpayment</Form.Label>
          <Form.Control size="lg" value={loanRequest.overpayment} />
        </Form.Group>
      </Form>
    </>
  );
};
