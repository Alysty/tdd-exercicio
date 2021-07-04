import Funcionarios from "../Funcionarios"
import {calculadora} from "../Calculadora"

test('Deve retornar um erro informado que o salario deve ser um numero ',()=>{
    const emp = new Funcionarios("name", "email", "5000", "DESENVOLVEDOR")
    expect(()=>{calculadora(emp)}).toThrow("Salario deve ser um numero")

})

test('Deve retornar o salario liquido de um DESENVOLVERDOR com um é salario maior que 3000',()=>{
    const emp = new Funcionarios("name", "email", 5000, "DESENVOLVEDOR")
    expect(calculadora(emp)).toBe(4000)
})

test('Deve retornar o salario liquido de um DESENVOLVERDOR com um é salario igual a 3000',()=>{
    const emp = new Funcionarios("name", "email", 3000, "DESENVOLVEDOR")
    expect(calculadora(emp)).toBe(2400)
})

test('Deve retornar o salario liquido de um DESENVOLVERDOR com um é salario menor que 3000',()=>{
    const emp = new Funcionarios("name", "email", 2000, "DESENVOLVEDOR")
    expect(calculadora(emp)).toBe(1800)
})

test('Deve retornar o salario liquido de um DBA com um é salario maior que 2000',()=>{
    const emp = new Funcionarios("name", "email", 4000, "DBA")
    expect(calculadora(emp)).toBe(3000)
})

test('Deve retornar o salario liquido de um DBA com um é salario igual a 2000',()=>{
    const emp = new Funcionarios("name", "email", 2000, "DBA")
    expect(calculadora(emp)).toBe(1500)
})

test('Deve retornar o salario liquido de um DBA com um é salario menor que 2000',()=>{
    const emp = new Funcionarios("name", "email", 1000, "DBA")
    expect(calculadora(emp)).toBe(850)
})

