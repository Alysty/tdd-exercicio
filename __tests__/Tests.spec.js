import Funcionarios from "../Funcionarios"
import {calculadora} from "../Calculadora"

test('Deve retornar o salario liquido de um DESENVOLVERDOR com um é salario maior que 3000',()=>{
    const emp = new Funcionarios("name", "email", 5000, "DESENVOLVEDOR")
    expect(calculadora(emp)).toBe(4000)
})