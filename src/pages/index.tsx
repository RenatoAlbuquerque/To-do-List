import Tarefa from "../model/Tarefa";
import tarefasIniciais from "../data/mock";
import Selecao from "../components/lista/Selecao";
import ListaItem from "../components/lista/ListaItem";

export default function Home() {
  let tarefas = tarefasIniciais;

  function renderizarTarefas() {
    return tarefas.itens.map((tarefa) => {
      return (
        <div key={tarefa.id}>
          <span>{tarefa.id}</span>
          <span>{tarefa.descricao}</span>
          <span>{tarefa.concluida ? "Concluida" : "Ativa"}</span>
        </div>
      );
    });
  }

  return (
    <div
      className={`flex flex-col justify-center items-center h-screen text-white bg-gradient-to-tr from-gray-600 to-gray-900`}
    >
      <ul>
        <ListaItem
          valor="exemplo de item"
          concluido={false}
          alterarStatus={() => {}}
        />
      </ul>
    </div>
  );
}
