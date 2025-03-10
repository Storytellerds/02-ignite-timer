import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles";

export function Home() {
  return (
  <HomeContainer>
    <form action="">
      <FormContainer>
        <label htmlFor="task">Vou trabalhar em</label>
        <TaskInput 
          id="task" 
          placeholder="Dê um nome para o seu projeto"
          list="task-suggestions"
        />

        <datalist id="task-suggestions">
          <option value="Projeto 1" />
          <option value="Projeto 2" />
          <option value="Projeto 3" />
          <option value="Projeto 4" />
        </datalist>

        <label htmlFor="minutesAmount">durante</label>
        <MinutesAmountInput 
          type="number" 
          id="minutesAmount" 
          placeholder="00"

        />

        <span>minutos.</span>
      </FormContainer>

      <CountdownContainer>
        <span>0</span>
        <span>0</span>
        <Separator>:</Separator>
        <span>0</span>
        <span>0</span>
      </CountdownContainer>

      <StartCountdownButton disabled type="submit">
        <Play/>
        Começar
      </StartCountdownButton>

    </form>
  </HomeContainer>
  )
  
}