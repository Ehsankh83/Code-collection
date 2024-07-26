
<?php
    $error = array("name"=>"", "pass"=>"");

    if(isset($_POST["submit"])){

        // user
        if (empty($_POST["name"])){
            $error["name"] = "please enter an username.";
        }
        else{
            $name = $_POST["name"];
            $pattern ='/^([-a-zA-Z0-9\w\s]*)$/u';
            if(!preg_match($pattern, $name)){
                $error["name"] = "akldjfalkj";
            }
        }

        // Pass
        if (empty($_POST["pass"])){
            $error["pass"] = "please enter a password";
        }
        else{
            $pass = $_POST["pass"];
            $pattern ='/^([-a-zA-Z0-9\w\s]*)$/u';
            if(!preg_match($pattern, $pass)){
                $error["pass"] = "please use characters and numbers in your password.";
            }
        }

        if (array_filter($error)){
            echo "please check your username and password.";
        }
        else{
            header("Location: saltydirt.php");
        }
    }

?>




<!DOCTYPE html>
<html>
    <head>

        <title>Login Page</title>

        <link rel="stylesheet" type="text/css" href="login.css">

    </head>

    <body>

        <div class="container">

            <form class="login-form">

            <h2>Login</h2>

            <input type="text" name="name" placeholder="Username" required>
            <div><p><?php echo htmlspecialchars($error["name"]);  ?></p></div>

            <input type="password" name="pass" placeholder="Password" required>
            <div><p><?php echo htmlspecialchars($error["pass"]);  ?></p></div>

            <button type="submit">Login</button>

            <p class="message">Not registered? <a href="#">Create an account</a></p>

            </form>
            
        </div>

    </body>

</html>