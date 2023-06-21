import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

export function TransactionsTable() {

  useEffect(() => {
    api.get('/transactions').then(response => console.log(response.data))

  }, []);

  return (
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
            <td className="deposit">R$ 2000,00</td>
            <td>Desenvolvimento</td>
            <td>22/02/2022</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="withdraw">R$ 1000,00</td>
            <td>Desenvolvimento</td>
            <td>24/02/2023</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}