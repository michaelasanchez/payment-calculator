import React = require('react');
import { Button, Form } from 'react-bootstrap';
import { LoanRequest } from '../models';
import { strings } from '../shared/strings';

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
          <Form.Label>{strings.forms.label.principal}</Form.Label>
          <Form.Control
            type="number"
            size="lg"
            value={loanRequest.principal || ''}
            onChange={(e) =>
              updateRequest({ principal: parseFloat(e.target.value) })
            }
          />
          <Form.Text muted>{strings.forms.helperText.principal}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Annual Rate</Form.Label>
          <Form.Control
            type="number"
            size="lg"
            value={loanRequest.annualRate || ''}
            onChange={(e) =>
              updateRequest({ annualRate: parseFloat(e.target.value) })
            }
          />
          <Form.Text muted>{strings.forms.helperText.annualRate}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>{strings.forms.label.remainingPeriods}</Form.Label>
          <Form.Control
            type="number"
            size="lg"
            value={loanRequest.remainingPeriods || ''}
            onChange={(e) =>
              updateRequest({ remainingPeriods: parseFloat(e.target.value) })
            }
          />
          <Form.Text muted>
            {strings.forms.helperText.remainingPeriods}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>{strings.forms.label.overpayment}</Form.Label>
          <Form.Control
            type="number"
            size="lg"
            value={loanRequest.overpayment || ''}
            onChange={(e) =>
              updateRequest({ overpayment: parseFloat(e.target.value) })
            }
          />
        </Form.Group>
        <Button size="lg" onClick={submitRequest}>Calculate</Button>
      </Form>
    </>
  );
};
