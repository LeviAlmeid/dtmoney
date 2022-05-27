import { Container } from "./style";

export function TransactionsTable(){
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">12 mil conto</td>
            <td>Desenvolvimento</td>
            <td>22/02/2002</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="withdraw">-1000 conto</td>
            <td>Desenvolvimento</td>
            <td>22/02/2002</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}