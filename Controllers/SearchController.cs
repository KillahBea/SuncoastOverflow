using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using suncoastoverflow;
using SuncoastOverflow.Model;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SuncoastOverflow.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class SearchController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public SearchController(DatabaseContext context)
    {
      _context = context;
    }


    [HttpGet]

    public async Task<List<Question>> SearchResult([FromQuery] string searchTerm)
    {
      var result = _context.Question.Where(w => w.Description.ToLower().Contains(searchTerm.ToLower()));
      return await result.ToListAsync();
    }
  }

}