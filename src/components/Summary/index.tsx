import icomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalcomeImg from '../../assets/total.svg'

import { Container } from "./style";

export function Summary(){
  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={icomeImg} alt="Entradas" />
        </header>

        <strong>R$ 1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="Entradas" />
        </header>

        <strong>- R$ 500,00</strong>
      </div>
      <div className='high-background'>
        <header>
          <p>Total</p>
          <img src={totalcomeImg} alt="Entradas" />
        </header>

        <strong>R$ 500,00</strong>
      </div>
    </Container>
  )
}