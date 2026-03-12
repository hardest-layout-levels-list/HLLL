
const listsBtn = document.getElementById("listsBtn")
const dropdown = document.getElementById("dropdown")

listsBtn.onclick = () => {
dropdown.style.display =
dropdown.style.display === "flex" ? "none" : "flex"
}

function openTab(tab){

document.getElementById("list").classList.add("hidden")
document.getElementById("leaderboard").classList.add("hidden")

document.getElementById(tab).classList.remove("hidden")

dropdown.style.display = "none"
}
