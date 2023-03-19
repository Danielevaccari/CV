using backend.Datamodel;
using Microsoft.EntityFrameworkCore;

namespace backend.DataAccessLayer
{
    public class VisitorData
    {
        private readonly EntityVisitorInfo context;

        public VisitorData(EntityVisitorInfo context)
        {
            this.context = context;
        }

        public Visitor? GetVisitor(int id)
        {
            ArgumentNullException.ThrowIfNull(id);

            Visitor? visitor = this.context.Visitors.FirstOrDefault(x => x.Id == id);
            return visitor;
        }
    }
}
