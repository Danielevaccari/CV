using backend.DataAccessLayer;
using backend.Datamodel;

namespace backend.Clients
{
    public class VisitorClient
    {

        public Visitor GetVisitorInfo(int id)
        {
            var data = new VisitorData();
            return .FirstOrDefault(x => x.Id == id);
        }
    }
}
