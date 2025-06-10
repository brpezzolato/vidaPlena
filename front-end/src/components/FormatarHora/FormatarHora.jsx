export default function DataFormatada({ data }) {


  const dataParaFormatar = new Date(data);

  const formatada = dataParaFormatar.toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  const [dataParte, horaParte] = formatada.split(' ');
  const resultado = `${dataParte} às ${horaParte}`;
  const resultadoFinal = resultado.split(',');

  return resultadoFinal;
}
