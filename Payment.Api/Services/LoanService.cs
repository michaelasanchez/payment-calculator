using Payment.Api.Models;
using Payment.Api.Services.Interfaces;
using Payment.Api.Validators.Interfaces;

namespace Payment.Api.Services
{
    public class LoanService : ILoanService
    {
        private readonly ILoanValidator _validator;

        public LoanService(ILoanValidator validator)
        {
            _validator = validator;
        }

        public Loan Calculate(decimal presentValue, decimal annualRate, int remainingPeriods, decimal? overpayment)
        {
            var result = _validator.ValidateAgainstInvalidLoanCalculation(presentValue, annualRate, remainingPeriods, overpayment);

            if (!result.IsValid)
            {
                throw new Exception(string.Join(' ', result.Errors));
            }

            return CalculateLoan(presentValue, annualRate, remainingPeriods, overpayment);
        }

        private Loan CalculateLoan(decimal presentValue, decimal annualRate, int remainingPeriods, decimal? overpayment)
        {
            var annualRatePercent = annualRate / 100;
            var periodRate = annualRatePercent / 12;

            var payment = (presentValue * periodRate) / (1 - (decimal)Math.Pow(1 + (double)periodRate, remainingPeriods * -1));

            var totalInterest = 0M;
            var totalPaid = 0M;
            var totalPeriods = 0;

            var remainingPrincipal = presentValue;

            for (int i = 0; i < remainingPeriods && remainingPrincipal > 0; i++)
            {
                var periodInterest = remainingPrincipal * periodRate;
                var totalPayment = payment - periodInterest + (overpayment ?? 0);

                totalPayment = Math.Min(totalPayment, remainingPrincipal);

                totalInterest += periodInterest;
                totalPaid += totalPayment;
                totalPeriods++;

                remainingPrincipal -= totalPayment;
            }

            return new Loan()
            {
                Principal = presentValue,
                Rate = annualRate,
                TotalInterest = Math.Round(totalInterest, 2),
                TotalPaid = Math.Round(totalPaid + totalInterest, 2),
                TotalPeriods = totalPeriods
            };
        }

    }
}

