FROM eclipse-temurin:11

ADD https://github.com/entriphy/sp-playcount-librespot/releases/download/v1.4.2/sp-playcount-1.4.2.jar /app/sp-playcount-librespot.jar
WORKDIR /app

CMD ["java", "-jar", "sp-playcount-librespot.jar", "$SPOTIFY_USERNAME", "$SPOTIFY_PASSWORD"]
