namespace Payment.Api.Models
{
    public class ValidationResult
    {
        public ValidationResult()
        {
            IsValid = true;
            Errors = new List<string>();
        }

        public bool IsValid { get; private set; }

        public List<string> Errors { get; private set; }
    }
}
