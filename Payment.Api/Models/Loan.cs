namespace Payment.Api.Models
{
    public class Loan
    {
        public decimal Principal { get; set; }
        public decimal Rate { get; set; }
        public decimal? Term { get; set; }

    }
}
