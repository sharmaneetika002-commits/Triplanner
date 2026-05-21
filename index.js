function selectDestination(country) {
  console.log("clicked", country);
  localStorage.setItem("destination", country);
  window.location.href = "country.html";
}