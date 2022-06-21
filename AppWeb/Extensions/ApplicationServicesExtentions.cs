using AppWeb.Data;
using AppWeb.Interfaces;
using AppWeb.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace AppWeb.Extensions
{
    public static class ApplicationServicesExtentixons
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration Configration)
        {
            services.AddScoped<ITokenService, TokenService>();
            #region Connection String
            services.AddDbContext<DataContext>(item => item.UseSqlServer(Configration.GetConnectionString("myconn")));
            #endregion
            #region create Configuring CORS
            services.AddCors(options =>
            {
                options.AddDefaultPolicy(builder =>
                {
                    builder.WithOrigins("http://localhost:4200").AllowAnyMethod().AllowAnyHeader();
                });
            });
            return services;

        }
    }
}
