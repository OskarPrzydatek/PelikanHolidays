FROM adoptopenjdk/openjdk11:alpine-jre
#ARG JAR_FILE=target/backend-0.0.1-SNAPSHOT.jar
COPY ./target/backend-0.0.1-SNAPSHOT.jar /app
WORKDIR /app
EXPOSE 8080
ENTRYPOINT ["java","-jar","backend-0.0.1-SNAPSHOT.jar"]

