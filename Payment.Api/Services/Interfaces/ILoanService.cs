using Payment.Api.Models;

namespace Payment.Api.Services.Interfaces
{
    public interface ILoanService
    {
        Loan Calculate(decimal presentValue, decimal annualRate, int remainingPeriods, decimal? overpayment);
    }
}
