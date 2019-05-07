var app = new Vue({
    el: '#app',
    data: {
        number1: '', //pierwsza liczba
        operator: '', //znak działania
        number2: '', //druga liczba
        flag: false, //po zmianie flagi na true wpisywana jest druga liczba
        flag2: false, //po zmianie flagi2 na true nie można zmieniać liczb
        flag3: false, //obsługa ułamków
        flag4: false, //obsługa ułamków
        score: '', //wynik działania
        math: ['/', '*', '-', '+',], //operatory
    },
    methods: {
        //metoda która uzupełnia liczby
        updateScore(i){
            if(this.flag == false && this.flag2 == false)
            this.number1 += i;
            if(this.flag == true && this.flag2 == false)
            this.number2 += i;
        },
        //metoda która wypisuje jaki operator został wybrany
        updateMath(i){
            this.operator = this.math[i];
            this.flag = true;
        },
        //metoda obliczająca końcowy wynik
        calculateScore(){
            this.flag2 = true;
            var first = parseFloat(this.number1);
            var second = parseFloat(this.number2);
            if(this.operator == '/') {
                if(second != 0){this.score = first / second;}
                else this.score = 'cannot devide by 0 moron';}
            if(this.operator == '*') {this.score = first * second;}
            if(this.operator == '-') {this.score = first - second;}
            if(this.operator == '+') {this.score = first + second;}

        },
        //metoda wpisywania ułamka
        makeFloat(){      
            if(this.flag == false && this.flag2 == false && this.flag3 == false) {
                this.flag3 = true; 
                this.number1 = this.number1 + '.';}
            if(this.flag == true && this.flag2 == false && this.flag4 == false) {
                this.flag4 = true;
                this.number2 = this.number2 + '.';}
        },
        //metoda czyszczenia wszystkich wartości
        clearScore(){
            this.number1 = '';
            this.operator = '';
            this.number2 = '';
            this.flag = false;
            this.flag2 = false;
            this.flag3 = false;
            this.flag4 = false;
            this.score = '';
        },
    },
    computed: {

    }
})