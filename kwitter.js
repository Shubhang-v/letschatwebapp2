function login()
{
    user_name = document.getElementById("login_inp").value;
    localStorage.setItem("User Name",user_name);
    window.location = "Kwitter_room.html";
}