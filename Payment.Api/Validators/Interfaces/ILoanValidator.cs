using Payment.Api.Models;

namespace Payment.Api.Validators.Interfaces
{
    public interface ILoanValidator
    {
        ValidationResult ValidateAgainstInvalidLoanCalculation(decimal presentValue, decimal annualRate, int remainingPeriods, decimal? overpayment);
    }
}
