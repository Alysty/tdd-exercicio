export function calculadora(emp){
    if(typeof (emp.salary)!="number"){
        throw "Salario deve ser um numero"
    }
    if(emp.role == "DESENVOLVEDOR"){
        if(emp.salary >= 3000 ){
            return emp.salary * 0.80
        }else{
            return emp.salary * 0.90
        }
    }
}
