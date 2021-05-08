using pocserver.entities;
using Microsoft.EntityFrameworkCore;

namespace pocserver.Data

{
    public class DataContext : DbContext
    {
         
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<info> Info { get; set; }
    }
}