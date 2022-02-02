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

        [HttpPost]
        public ActionResult<Loan> Calculate(decimal principal, decimal annualRate, int remainingPeriods, decimal? overpayment)
        {
            try
            {
                var loan = _loanService.Calculate(principal, annualRate, remainingPeriods, overpayment);

                return Ok(loan);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
    }
}
