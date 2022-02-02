using Payment.Api.Models;

namespace Payment.Api.Services.Interfaces
{
    public interface ILoanService
    {
        Loan Calculate(decimal principal, decimal annualRate, int remainingPeriods, decimal? overpayment);
    }
}
