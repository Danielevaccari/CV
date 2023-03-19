namespace backend.Models
{
    public class Visitor
    {
        public int Id { get; init; }

        public string? OperatingSystem { get; set; }

        public string? Ip { get; set; }

        public DateTime Date { get; set; }
    }
}
