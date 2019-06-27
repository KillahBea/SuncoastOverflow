using System.Collections.Generic;

namespace SuncoastOverflow.Model
{
  public class Question
  {
    public int Id { get; set; }
    public string Description { get; set; }

    public List<Answer> Answer { get; set; } = new List<Answer>();
  }
}