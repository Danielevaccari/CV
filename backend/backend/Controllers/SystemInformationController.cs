using backend.Clients;
using backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    public class SystemInformationController : ControllerBase
    {

        public SystemInformationController() { 
        
        }

        [HttpGet]
        [Route("/Visitor/Information")]
        public Visitor GetOperatingSystemVersion()
        {
            var visitorClient = new VisitorClient();
            return .GetVisitorInfo();
        }

        [HttpPost]
        [Route("/Visitor/Information/Save")]
        public string GetCurrentUserName()
        {
            return Environment.UserName;
        }
    }
}