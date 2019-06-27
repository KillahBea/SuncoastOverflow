using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SuncoastOverflow.Model;
using suncoastoverflow;

namespace SuncoastOverflow.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class QuestionController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public QuestionController(DatabaseContext context)
    {
      _context = context;
    }

    // GET: api/Question
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Question>>> GetQuestion()
    {
      return await _context.Question.ToListAsync();
    }

    // GET: api/Question/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Question>> GetQuestion(int id)
    {
      var question = await _context.Question.FindAsync(id);

      if (question == null)
      {
        return NotFound();
      }

      return question;
    }

    // PUT: api/Question/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutQuestion(int id, Question question)
    {
      if (id != question.Id)
      {
        return BadRequest();
      }

      _context.Entry(question).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!QuestionExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return NoContent();
    }

    // Put: api/Question/5/answer

    [HttpPut("{id}/answer")]

    public async Task<IActionResult> PutAnswerToQuestion(int id, [FromBody]Answer answer)
    {

      var newAnswer = new Answer
      {
        Description = answer.Description,
        QuestionId = id
      };
      _context.Answer.Add(newAnswer);

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!QuestionExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return NoContent();
    }





    // POST: api/Question
    [HttpPost]
    public async Task<ActionResult<Question>> PostQuestion(Question question)
    {
      _context.Question.Add(question);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetQuestion", new { id = question.Id }, question);
    }

    // DELETE: api/Question/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<Question>> DeleteQuestion(int id)
    {
      var question = await _context.Question.FindAsync(id);
      if (question == null)
      {
        return NotFound();
      }

      _context.Question.Remove(question);
      await _context.SaveChangesAsync();

      return question;
    }

    private bool QuestionExists(int id)
    {
      return _context.Question.Any(e => e.Id == id);
    }
  }
}
