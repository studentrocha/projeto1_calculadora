// CRIANDO A CLASSE DA CALCULADORA
class Calculator{
    constructor(){
        // AQUI É A PROPRIEDADE QUE RECEBERÁ OS VALORES DIGITADOS 
        this.displayValue = " ";
    }

    // ESTE MÉTODO ADICIONA OS VALORES Á PROPRIEDADE DISPLAYVALUE PERMITINDO QUE O USUÁRIO VEJA OS CARACTERES
    appendToDisplay(value) {
        this.displayValue += value;
        // CHAMAMOS O MÉTODO UPDATEDISPLAY DENTRO DO MÉTODO APPENTODISPLAY PARA QUE QUANDO O USUÁRIO DIGITAR ALGUMA 
        // TECLA DA CALCULADORA O VALOR QUE FOI ARMAZENADO NA PROPRIEDADE DISPLAYVALUE SEJA EXIBIDA NA TELA.
        this.updateDisplay();
    }
    // ESTE MÉTODO ATUALIZA O ELEMENTO INPUT NO HTML COM O VALOR ATUAL QUE ESTÁ ARMAZENADO EM DISPLAYVALUE
    updateDisplay(){
        document.getElementById("displayContent").value = this.displayValue;

    }
    // ESTE MÉTODO LIMPA O VALOR QUE ESTÁ ARMAZENADO EM DISPLAYVALUE E CHAMA A FUNÇÃO UPDATEDISPLAY PARA ATUALIZAR
    // A TELA COM UM VALOR VAZIO
    clearDisplay(){
        this.displayValue = " ";
        this.updateDisplay();
    }

    calculate(){
        try{
            const result = eval(this.displayValue);
            this.displayValue = result.toString();
            this.updateDisplay();
         } catch(error) {
            this.displayValue = "Erro"
            this.updateDisplay();
         }
    }
}

// CRIANDO O OBJETO OU INSTANCIANDO A CLASSE
// OBJETO CHAMADO CALC
const calc = new Calculator(); 
