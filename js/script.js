var App = new Vue(
    {
        el: "#root",
        data:{
            todolist:[
                {
                    text: "Andare a fare la spesa",
                    done: true
                },
                {
                    text: "Chiamare il dottore",
                    done: false
                },
                {
                    text: "Controllare le Email",
                    done: false
                },
                {
                    text: "Mettere la benzina nella macchina",
                    done: false
                },
                {
                    text: "Salutare il vicino",
                    done: true
                },
                {
                    text: "Portare fuori la spazzatura",
                    done: false
                },
                {
                    text: "Passare al bar",
                    done: true
                }
            ],
            userInput: ""
        },
        methods:{
            removetodoElement(index){
                console.log(this.todolist.splice(index, 1));
                // this.todolist.splice();
            },
            addtodoElement(){
                console.log(this.userInput);
                this.todolist.push({text: this.userInput, done: false})
            }
        },
        mounted(){

        }
    }
)