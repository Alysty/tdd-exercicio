export function calculadora(emp){
    if(emp.role == "DESENVOLVEDOR"){
        if(emp.salary > 3000 ){
            return emp.salary * 0.80
        }
    }
}
