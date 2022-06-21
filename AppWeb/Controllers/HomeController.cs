using AppWeb.Data;
using AppWeb.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AppWeb.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HomeController : BaseController
    {
        private readonly DataContext _dataContext;
        public HomeController(DataContext dataContext)
        {
            _dataContext= dataContext;
        }

        [HttpGet]
        //[AllowAnonymous]
        public async Task<ActionResult<IEnumerable<DataUsers>>> GetUsers()
        {
            return await _dataContext.Users.ToListAsync();
        }
        //[Authorize]
        [HttpGet("{id}")]
        public async Task<ActionResult<DataUsers>> GetUser(string id)
        {
            return await _dataContext.Users.FindAsync(id);
        }
    }
}
