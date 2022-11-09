using Microsoft.AspNetCore.Mvc;

namespace TodoListAPI.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class TarefaController : ControllerBase
  {

    [HttpPost]
    public IActionResult Salvar(ViewModels.TarefaViewModel tarefaVM)
    {
      Models.Tarefa t = new Models.Tarefa();
      t.Id = tarefaVM.Id;
      t.Descricao = tarefaVM.Descricao;

      TodoListAPI.Services.TarefaService ts = new Services.TarefaService();
      ts.Gravar(t);
      Console.WriteLine("Salvar tarefa");
      return Ok(t);
    }
    
    [HttpPut("{id}")]
    public IActionResult Alterar(ViewModels.TarefaViewModel tarefaVM, [FromRoute] int id)
    {
      Models.Tarefa t = new Models.Tarefa();
      t.Id = id;
      t.Descricao = tarefaVM.Descricao;

      TodoListAPI.Services.TarefaService ts = new Services.TarefaService();
      ts.Gravar(t);
      Console.WriteLine("Alterar tarefa");
      return Ok(t);
    }
    
    [HttpDelete("{id:int}")]
    public IActionResult Excluir(int id)
    {
      TodoListAPI.Services.TarefaService ts = new Services.TarefaService();
      ts.Excluir(id);
      Console.WriteLine("Excluir");
      return Ok();
    }


    [HttpGet("{id:int}")]
    public IActionResult Obter(int id)
    {
      TodoListAPI.Services.TarefaService ts = new Services.TarefaService();
      var tarefa = ts.Obter(id);

      ViewModels.TarefaViewModel tarefaVM = new ViewModels.TarefaViewModel()
      {
        Id = tarefa.Id,
        Descricao = tarefa.Descricao,
      };

      return Ok(tarefaVM);
    }


    [HttpGet]
    public IActionResult ObterTodos()
    {
      TodoListAPI.Services.TarefaService ts = new Services.TarefaService();
      System.Console.WriteLine("ObterTodos");
      var tarefas = ts.ObterTodos();

      List<ViewModels.TarefaViewModel> tarefasVM = new();

      foreach (var tarefa in tarefas)
      {
        tarefasVM.Add(new ViewModels.TarefaViewModel()
        {
          Id = tarefa.Id,
          Descricao = tarefa.Descricao,
        });
      }

      return Ok(tarefasVM);
    }
  }
}
