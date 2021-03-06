export function calculadora(emp){
    if(typeof (emp.salary)!="number"){
        throw "Salario deve ser um numero"
    }
    switch(emp.role){
        case "DESENVOLVEDOR":
            if(emp.salary >= 3000 ){
                return emp.salary * 0.80
            }else{
                return emp.salary * 0.90
            }
            break;
        case "TESTADOR":
        case "DBA":
            if(emp.salary >= 2000 ){
                return emp.salary * 0.75
            }else{
                return emp.salary * 0.85
            }
            break;
        case "GERENTE":
            if(emp.salary >= 5000 ){
                return emp.salary * 0.70
            }else{
                return emp.salary * 0.80
            }
    }
}
