namespace Payment.Api.Models
{
    public class Loan
    {
        public decimal Principal { get; set; }
        public decimal Rate { get; set; }

        public decimal TotalInterest { get; set; }
        public decimal TotalPaid { get; set; }
        public int TotalPeriods { get; set; }
    }
}
