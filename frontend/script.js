$(document).ready(() => {
    $("#enviarFormulario").click(() => {
        let Codigo = $("#cod").val();
        let Description = $("#description").val();
        let Value = $("#valor").val();
        
        let data = {
            Codigo,
            Description,
            Value
        };

        $.ajax({
            url: "http://localhost:8080/MeuProjeto/Server",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(data),
            success: (response) => console.log("Sucesso:", response),
            error: (error) => console.error("Erro:", error)
        });
    });
});