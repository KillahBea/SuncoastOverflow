using System.Collections.Generic;

namespace SuncoastOverflow.Model
{
  public class Answer
  {
    public int Id { get; set; }
    public string Description { get; set; }
    public int VoteValue { get; set; }


    public List<SuncoastOverflow.Model.Question> Questions { get; set; } = new List<SuncoastOverflow.Model.Question>();
  }
}