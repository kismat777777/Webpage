let likes = 0;

const units = [
  { name: "पाठ १: मातृभूमिको आवाज", video: "dbMerOZsDVU" },
  { name: "पाठ २: कुमार यवक्रीत", video: "1fpZVI8a4FA" },
  { name: "पाठ ३: नेपाली संस्कृति", video: "DKHsgj575bQ" },
  { name: "पाठ ४: छोरालाई चिठी", video: "UI6obZIhD-s" },
  { name: "पाठ ५: सङ्गीतकार अम्बर गुरुङ", video: "sk_s8Mhu2zk" },
  { name: "पाठ ६: चम्किला अनुहारहरू", video: "K1_X6GH64Ng" },
  { name: "पाठ ७: सम्पत्तिभन्दा स्वास्थ्य ठुलो", video: "qvpEE7p8GRw" },
  { name: "पाठ ८: मेरा रहरहरू", video: "4vD1NJb9AmU" },
  { name: "पाठ ९: जागजाग", video: "uuFarz_B9Xo" },
  { name: "पाठ १०: आशाको दियो", video: "lcOsqa99hi0" },
  { name: "पाठ ११: सहभागिताका लागि निवेदन", video: "SiH5y7G2XK8" },
  { name: "पाठ १२: थोमस अल्वा एडिसन", video: "bNtsFyxZzug" },
  { name: "पाठ १३: लाग्दछ मलाई रमाइलो", video: "rBezYRv67Y4" },
  { name: "पाठ १४: वनभोज", video: "BZ-F7vLwRG4" },
  { name: "पाठ १५: पानीको कथा", video: "gErsY1wPtK4" },
  { name: "पाठ १६: मायाको घर", video: "G3y9ySV2eiI" }
];

const unitContainer = document.getElementById("unitContainer");

units.forEach((unit, index) => {
  const card = document.createElement("div");
  card.className = "unit-card";
  
  card.innerHTML = `
    <div class="unit-header">${unit.name}</div>
    <ul class="subunit" id="unit${index}">
      <li onclick="playVideo('${unit.video}', '${unit.name}')">
        अभ्यास
      </li>
    </ul>
  `;
  
  card.querySelector(".unit-header")
    .addEventListener("click", () => toggleUnit(index));
  
  unitContainer.appendChild(card);
});

function toggleUnit(index) {
  const unit = document.getElementById("unit" + index);
  unit.style.display = unit.style.display === "block" ? "none" : "block";
}

function playVideo(videoId, unitName) {
  document.getElementById("unitContainer").style.display = "none";
  
  const player = document.getElementById("videoPlayer");
  player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  
  document.getElementById("videoSection").style.display = "block";
  
  document.getElementById("commentBtn").href =
    `mailto:educationgurunp@gmail.com?subject=${unitName} Feedback`;
}

function closeVideo() {
  document.getElementById("videoPlayer").src = "";
  document.getElementById("videoSection").style.display = "none";
  document.getElementById("unitContainer").style.display = "grid";
}

function likeVideo() {
  likes++;
  document.getElementById("likeCount").innerText = likes;
}