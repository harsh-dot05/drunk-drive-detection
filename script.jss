// Wait until page loads
document.addEventListener("DOMContentLoaded", function () {

  const demoBtn = document.getElementById("demoBtn");
  const simulateBtn = document.getElementById("simulateBtn");

  const alcoholValue = document.getElementById("alcoholValue");
  const statusText = document.getElementById("statusText");

  // Demo Button
  demoBtn.addEventListener("click", function () {
    alert("Demo Started 🚀");
  });

  // Simulate Button
  simulateBtn.addEventListener("click", function () {

    let alcohol = Math.floor(Math.random() * 100);
    alcoholValue.innerText = alcohol + "%";

    if (alcohol > 30) {
      statusText.innerText = "DRUNK ⚠️";
      statusText.style.color = "red";// Get elements
const demoBtn = document.getElementById("demoBtn");
const simulateBtn = document.getElementById("simulateBtn");
const alcoholValue = document.getElementById("alcoholValue");
const statusText = document.getElementById("statusText");

// Demo button
demoBtn.addEventListener("click", function () {
    alert("Demo Started 🚀");
});

// Simulate button
simulateBtn.addEventListener("click", function () {

    let alcohol = Math.floor(Math.random() * 100);

    alcoholValue.innerText = alcohol + "%";

    if (alcohol > 30) {
        statusText.innerText = "DRUNK ⚠️";
        statusText.style.color = "red";
        alert("🚫 Engine Locked! Rider is drunk");
    } else {
        statusText.innerText = "SAFE ✅";
        statusText.style.color = "lightgreen";
    }
});
      alert("🚫 Engine Locked! Rider is drunk");
    } else {
      statusText.innerText = "SAFE ✅";
      statusText.style.color = "lightgreen";
    }

  });

});