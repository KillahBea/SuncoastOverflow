namespace SuncoastOverflow.Model
{
  public class Question
  {
    public int Id { get; set; }
    public string Description { get; set; }


    public int? AnswerId { get; set; }
    public Answer Answer { get; set; }
  }
}