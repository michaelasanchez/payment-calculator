import React = require('react');
import { Button, Form } from 'react-bootstrap';
import { LoanRequest } from '../models';

interface LoanFormProps {
  loanRequest: LoanRequest;
  updateRequest: (updated: Partial<LoanRequest>) => void;
  submitRequest: () => void;
}

export const LoanForm: React.FC<LoanFormProps> = (props) => {
  const { loanRequest, updateRequest, submitRequest } = props;

  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Principal</Form.Label>
          <Form.Control
            type="number"
            size="lg"
            value={loanRequest.principal}
            onChange={(e) =>
              updateRequest({ principal: parseFloat(e.target.value) })
            }
          />
          <Form.Text muted>Current or total loan amount</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Annual Rate</Form.Label>
          <Form.Control
            type="number"
            size="lg"
            value={loanRequest.annualRate}
            onChange={(e) =>
              updateRequest({ annualRate: parseFloat(e.target.value) })
            }
          />
          <Form.Text muted>Interest rate percentage</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Remaining Periods</Form.Label>
          <Form.Control
            type="number"
            size="lg"
            value={loanRequest.remainingPeriods}
            onChange={(e) =>
              updateRequest({ remainingPeriods: parseFloat(e.target.value) })
            }
          />
          <Form.Text muted>
            Number of remaining payment periods (in months)
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Overpayment</Form.Label>
          <Form.Control
            type="number"
            size="lg"
            value={loanRequest.overpayment || ''}
            onChange={(e) =>
              updateRequest({ overpayment: parseFloat(e.target.value) })
            }
          />
        </Form.Group>
        <Button onClick={submitRequest}>Calculate</Button>
      </Form>
    </>
  );
};
