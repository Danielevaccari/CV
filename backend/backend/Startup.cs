namespace backend
{
    public class Startup
    {

        public IConfiguration configuration { get; }

        public Startup(IConfiguration configuration)
        {
            this.configuration = configuration;
        }

        public void Configure(IApplicationBuilder builder, IWebHostEnvironment env)
        {

        }
    }
}
