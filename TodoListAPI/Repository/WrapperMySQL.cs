﻿using MySql.Data.MySqlClient;

namespace TodoListAPI.Repository
{
  public class WrapperMySQL
  {
    public MySqlConnection Conexao { get; set; }
    public MySqlCommand Comando { get; set; }

    public WrapperMySQL()
    {
      string strCon = "Server=mysql05-farm88.kinghost.net; Database=vartechs15; Uid=vartechs15; Pwd=A123456789a1";

      Conexao = new MySqlConnection(strCon);
      Comando = Conexao.CreateCommand();
    }

    public void Abrir()
    {
      if (Conexao.State != System.Data.ConnectionState.Open)
        Conexao.Open();
    }

    public void Fechar()
    {
      Conexao.Close();
    }
  }

}
