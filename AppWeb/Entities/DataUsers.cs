using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace AppWeb.Entities
{
    public class DataUsers
    {
        public string Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
    }
}
