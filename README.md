# Teste Técnico Vector

Este é um projeto simples que mostra a comunicação entre um frontend e um backend usando Java e Tomcat. O frontend é construído em HTML5, CSS3 e Jquery e o backend em Java usando servlets.

## Pré-requisitos

Antes de começar, certifique-se de ter os seguintes pré-requisitos instalados:

- [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-downloads.html)
- [Docker](https://docs.docker.com/get-docker/)
- [Git](https://git-scm.com/)

## Executando o Backend

1. Navegue até o diretório `backend`:
    
    cd backend

2. Construa a imagem Docker:

     docker build -t backend:tag .


3. Execute o contêiner Docker:

    docker run -p 8080:8080 backend:tag

## Executando o Frontend

1. Navegue até o diretório `frontend`:

    cd frontend

2. Inicie o app HTML abrindo o arquivo index.html em um navegador
** usando a extensão live-server no VSCODE ajuda bastante a iniciar esse front de forma rápida e para desenvolver


Acesse o aplicativo em [http://localhost:5500](http://localhost:5500).