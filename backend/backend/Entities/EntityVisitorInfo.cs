using backend.Datamodel;
using Microsoft.EntityFrameworkCore;

namespace backend
{
    public class EntityVisitorInfo : DbContext
    {
        public EntityVisitorInfo(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Visitor> Visitors { get; set; }
    }
}
