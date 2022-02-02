using Payment.Api.Models;
using Payment.Api.Services.Interfaces;

namespace Payment.Api.Services
{
    public class LoanService : ILoanService
    {
        public LoanService() { }

        public Loan Calculate(double presentValue, double annualRate, double remainingPeriods)
        {
            return new Loan();
        }
    }
}

