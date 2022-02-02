using Payment.Api.Models;

namespace Payment.Api.Services.Interfaces
{
    public interface ILoanService
    {
        Loan Calculate(double presentValue, double annualRate, double remainingPeriods);
    }
}
