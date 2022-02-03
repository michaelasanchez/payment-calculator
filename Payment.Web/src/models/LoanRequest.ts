export interface LoanRequest {
  principal: number;
  annualRate: number;
  remainingPeriods: number;
  overpayment?: number;
}