interface SelecaoProps {
  valor: boolean;
}

export default function Selecao(props: SelecaoProps) {
  const gradiente = props.valor
    ? "bg-gradient-to-br from-blue-400 to-purple-500"
    : "";
  return (
    <div
      className={`cursor-pointer rounded-full 
     h-7 w-7 flex justify-center text-white
      items-center border-gray-400 border ${gradiente}
      `}
    >
      {props.valor ? "X" : ""}
    </div>
  );
}
