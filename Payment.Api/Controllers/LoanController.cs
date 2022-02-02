using Microsoft.AspNetCore.Mvc;
using Payment.Api.Models;
using Payment.Api.Services.Interfaces;

namespace Payment.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoanController : ControllerBase
    {
        private readonly ILoanService _loanService;

        public LoanController(ILoanService loanService)
        {
            _loanService = loanService;
        }

        [HttpPost(Name = "Calculate")]
        public ActionResult<Loan> Calculate(decimal presentValue, decimal annualRate, int remainingPeriods, decimal? overpayment)
        {
            try
            {
                var loan = _loanService.Calculate(presentValue, annualRate, remainingPeriods, overpayment);

                return Ok(loan);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
    }
}
