using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Datamodel
{
    [Table("VisitorInformation")]
    public class Visitor
    {
        public int Id { get; set; }

        public string? OperatingSystem { get; set; }

        public string? Ip { get; set; }

        public DateTime Date { get; set; }
    }
}