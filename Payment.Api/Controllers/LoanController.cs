using Microsoft.AspNetCore.Mvc;
using Payment.Api.Models;
using Payment.Api.Services.Interfaces;

namespace Payment.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoanController : ControllerBase
    {
        private readonly ILogger<LoanController> _logger;

        private readonly ILoanService _loanService;

        public LoanController(ILogger<LoanController> logger, ILoanService loanService)
        {
            _logger = logger;
            _loanService = loanService;
        }

        [HttpPost(Name = "Calculate")]
        public Loan Calculate(double presentValue, double annualRate, double remainingPeriods)
        {
            return _loanService.Calculate(presentValue, annualRate, remainingPeriods);
        }
    }
}
