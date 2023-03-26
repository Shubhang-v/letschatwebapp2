function display()
{
user_dis_name = localStorage.getItem("User Name",user_name);
document.getElementById("user_name").innerHTML = "Welcome "+ user_dis_name+"!";
}

function logout()
{
    window.location = "index.html";
}