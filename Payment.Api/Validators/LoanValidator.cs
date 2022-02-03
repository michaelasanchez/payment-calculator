using Payment.Api.Models;
using Payment.Api.Validators.Interfaces;

namespace Payment.Api.Validators
{
    public class LoanValidator : ILoanValidator
    {
        public LoanValidator() { }

        public ValidationResult ValidateAgainstInvalidLoanCalculation(decimal principal, decimal annualRate, int remainingPeriods, decimal? overpayment)
        {
            var result = new ValidationResult();

            if (principal <= 0)
            {
                result.Errors.Add("Principal must be a positive value.");
            }

            if (annualRate <= 0)
            {
                result.Errors.Add("Annual rate must be a positive value.");
            }

            if (remainingPeriods < 1)
            {
                result.Errors.Add("Remaining Periods must be a positive whole number.");
            }

            if (overpayment.HasValue && overpayment < 0)
            {
                result.Errors.Add("Overpayment must be a positive value.");
            }

            return result;
        }
    }
}
