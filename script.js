$(document).ready(function() {
    $("#btnCadastrar").click(function() {
        let tarefa = $("#novaTarefa").val();


        if (tarefa.trim() !== '') {

            $("#listaTarefas").append("<li>" + tarefa + "</li>").click(function() {
                texto.style.color = 'blue';
            })


            $("#novaTarefa").val('');
        }
    })
})
$("#listaTarefas").on("click", "li", function() {

    $(this).toggleClass("tarefa-concluida");

})