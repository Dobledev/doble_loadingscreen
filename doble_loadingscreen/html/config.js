// config.js

const config = {
  musicUrl: "https://r2.fivemanage.com/mjUL1lJvzrbBRG1ubEDf9/HanzelLaHOviLuarLaLHades66-LosRockstarNoVanAlCielo(Remix)(OfficialVideo).mp3",
  videoUrl: "https://r2.fivemanage.com/jA1B6ys9vVZ7NAwOGXK7M/LoadingOrigen.mp4",
  logoUrl: "https://r2.fivemanage.com/mjUL1lJvzrbBRG1ubEDf9/doble_scripts_logo-removebg-preview.png"
};

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("bgMusicSource").src = config.musicUrl;
  document.getElementById("bgMusic").load();

  document.getElementById("bgVideoSource").src = config.videoUrl;
  document.getElementById("bgVideo").load();

  document.getElementById("logoImage").src = config.logoUrl;
});
