# Baixa servlet-api.jar e gson.jar
FROM openjdk:11-jdk-slim AS download
WORKDIR /usr/local/tomcat/lib/
RUN apt-get update && apt-get install -y wget
RUN wget https://repo1.maven.org/maven2/javax/servlet/javax.servlet-api/4.0.1/javax.servlet-api-4.0.1.jar -O servlet-api.jar
RUN wget https://repo1.maven.org/maven2/com/google/code/gson/gson/2.8.8/gson-2.8.8.jar -O gson.jar

# Compilar arquivos .java
FROM openjdk:11-jdk-slim AS build
WORKDIR /usr/local/tomcat/webapps/MeuProjeto/
COPY src/ src/
COPY --from=download /usr/local/tomcat/lib/* /usr/local/tomcat/lib/
RUN javac -cp ".:/usr/local/tomcat/lib/*" -d WEB-INF/classes src/*.java

# Constroe a imagem final do Tomcat
FROM tomcat:9.0-jdk11-openjdk
COPY --from=download /usr/local/tomcat/lib/* /usr/local/tomcat/lib/
COPY --from=build /usr/local/tomcat/webapps/MeuProjeto /usr/local/tomcat/webapps/ROOT

# Expoe a porta
EXPOSE 8080
