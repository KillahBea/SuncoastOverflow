using System.Collections.Generic;

namespace SuncoastOverflow.Model
{
  public class Answer
  {
    public int Id { get; set; }
    public string Description { get; set; }
    public int VoteValue { get; set; }

    public int QuestionId { get; set; }
    public SuncoastOverflow.Model.Question Question { get; set; }
  }
}