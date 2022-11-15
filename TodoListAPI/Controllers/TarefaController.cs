using Microsoft.AspNetCore.Mvc;




namespace TodoListAPI.Controllers
{
  static public class ContadorRequisicoes
  {
    static public int SalvarCounter = 0;
    static public int ExcluirCounter = 0;
    static public int EditarCounter = 0;
    static public int ObterCounter = 0;
    static public int ObterTodosCounter = 0;
  }

  [Route("api/[controller]")]
  [ApiController]
  public class TarefaController : ControllerBase
  {
    [HttpPost]
    public IActionResult Salvar(ViewModels.TarefaViewModel tarefaVM)
    {
      Models.Tarefa t = new()
      {
        Id = tarefaVM.Id,
        Descricao = tarefaVM.Descricao
      };

      TodoListAPI.Services.TarefaService ts = new();
      ts.Gravar(t);
      ContadorRequisicoes.SalvarCounter++;
      Console.WriteLine($"Salvar tarefa: {ContadorRequisicoes.SalvarCounter}");
      return Ok(t);
    }

    [HttpPut("{id}")]
    public IActionResult Alterar(ViewModels.TarefaViewModel tarefaVM, [FromRoute] int id)
    {
      Models.Tarefa t = new()
      {
        Id = id,
        Descricao = tarefaVM.Descricao
      };

      TodoListAPI.Services.TarefaService ts = new();
      ts.Gravar(t);
      ContadorRequisicoes.EditarCounter++;
      Console.WriteLine($"Editar tarefa: {ContadorRequisicoes.EditarCounter}");
      return Ok(t);
    }

    [HttpDelete("{id:int}")]
    public IActionResult Excluir(int id)
    {
      TodoListAPI.Services.TarefaService ts = new();
      ts.Excluir(id);
      ContadorRequisicoes.ExcluirCounter++;
      Console.WriteLine($"Excluir tarefa: {ContadorRequisicoes.ExcluirCounter}");
      return Ok();
    }


    [HttpGet("{id:int}")]
    public IActionResult Obter(int id)
    {
      TodoListAPI.Services.TarefaService ts = new();
      var tarefa = ts.Obter(id);

      ViewModels.TarefaViewModel tarefaVM = new()
      {
        Id = tarefa.Id,
        Descricao = tarefa.Descricao,
      };
      ContadorRequisicoes.ObterCounter++;
      Console.WriteLine($"Obter tarefa: {ContadorRequisicoes.ObterCounter}");
      return Ok(tarefaVM);
    }


    [HttpGet]
    public IActionResult ObterTodos()
    {
      TodoListAPI.Services.TarefaService ts = new();

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

      ContadorRequisicoes.ObterTodosCounter++;
      Console.WriteLine($"Obter todas tarefas: {ContadorRequisicoes.ObterTodosCounter}");
      return Ok(tarefasVM);
    }
  }
}
