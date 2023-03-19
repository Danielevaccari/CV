using backend.Datamodel;
using Microsoft.EntityFrameworkCore;

namespace backend.Entities
{
    public class VisitorData : DbContext
    {

        public DbSet<Visitor> Students { get; set; }
    }
}
