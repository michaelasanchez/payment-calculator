# Payment Calculator

Payment Calculator is an app that allows you calculate the dollar amounts paid over time for fixed-term loans.

## Installation

#### Web API
Open PaymentCalculator.sln in Visual Studio and run with IIS Express. API is configured to run on port 7124 by default.

#### Front-End
Run the following commands from the _Project.Web_ folder.
```bash
npm i
npm start
```
The front-end is configured to run on port 9000 by default.

## Usage

Enter the principal loan value in dollars, the annual interest rate as a percent, and the number of remaining payment periods for the loan. Press 'Calculate' to view loan result details.

An overpayment can be optionally included when calculating a loan result. This amount will be applied in addition to the required payment for all remaining payment periods.

## Sources

Original payment formula was referenced from the following:

[financeformulas.net/Loan_Payment_Formula.html](https://financeformulas.net/Loan_Payment_Formula.html)
