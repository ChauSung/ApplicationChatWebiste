using AppWeb.Entities;
using Microsoft.EntityFrameworkCore;

namespace AppWeb.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<DataUsers> Users { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<DataUsers>(entity =>
            {
                entity.HasKey(x => x.Id);
                entity.Property(x => x.Id).ValueGeneratedOnAdd();
            });


            base.OnModelCreating(modelBuilder);
        }
   
    }

}
