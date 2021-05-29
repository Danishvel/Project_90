function adduser() {
    player1 = document.getElementById("player1_name").value;
    player2 = document.getElementById("player2_name").value;
    
    localStorage.setItem("Player 1", player1);
    localStorage.setItem("Player 2", player2);

    window.location = "index.html";
}