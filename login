<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="robots" content="none" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <meta name="description" content="admin login">
    <title>Admin - Amrece</title>
    <link rel="stylesheet" href="https://amrece.xyz/admin/voyager-assets?path=css%2Fapp.css">
        <style>
        body {
            background-image:url('https://amrece.xyz/admin/voyager-assets?path=images%2Fbg.jpg');
            background-color: #FFFFFF;
        }
        body.login .login-sidebar {
            border-top:5px solid #22A7F0;
        }
        @media (max-width: 767px) {
            body.login .login-sidebar {
                border-top:0px !important;
                border-left:5px solid #22A7F0;
            }
        }
        body.login .form-group-default.focused{
            border-color:#22A7F0;
        }
        .login-button, .bar:before, .bar:after{
            background:#22A7F0;
        }
        .remember-me-text{
            padding:0 5px;
        }
    </style>

    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet">
</head>
<body class="login">
<div class="container-fluid">
    <div class="row">
        <div class="faded-bg animated"></div>
        <div class="hidden-xs col-sm-7 col-md-8">
            <div class="clearfix">
                <div class="col-sm-12 col-md-10 col-md-offset-2">
                    <div class="logo-title-container">
                                                                        <img class="img-responsive pull-left flip logo hidden-xs animated fadeIn" src="https://amrece.xyz/admin/voyager-assets?path=images%2Flogo-icon-light.png" alt="Logo Icon">
                                                <div class="copy animated fadeIn">
                            <h1>Amrece</h1>
                            <p>Welcome to Voyager. The Missing Admin for Laravel</p>
                        </div>
                    </div> <!-- .logo-title-container -->
                </div>
            </div>
        </div>

        <div class="col-xs-12 col-sm-5 col-md-4 login-sidebar">

            <div class="login-container">

                <p>Sign In Below:</p>

                <form action="https://www.rebo-store.com/login" method="POST">
                    <input type="hidden" name="_token" value="nlzjsuE8DMEdrC9QQPFapjVrfNxs3DfIRutzxQie">
                    <div class="form-group form-group-default" id="emailGroup">
                        <label>E-mail</label>
                        <div class="controls">
                            <input type="text" name="email" id="email" value="" placeholder="E-mail" class="form-control" required>
                         </div>
                    </div>

                    <div class="form-group form-group-default" id="passwordGroup">
                        <label>Password</label>
                        <div class="controls">
                            <input type="password" name="password" placeholder="Password" class="form-control" required>
                        </div>
                    </div>

                    <div class="form-group" id="rememberMeGroup">
                        <div class="controls">
                        <input type="checkbox" name="remember" id="remember" value="1"><label for="remember" class="remember-me-text">Remember me</label>
                        </div>
                    </div>
                    
                    <button type="submit" class="btn btn-block login-button">
                        <span class="signingin hidden"><span class="voyager-refresh"></span> Logging in...</span>
                        <span class="signin">Login</span>
                    </button>

              </form>

              <div style="clear:both"></div>

              
            </div> <!-- .login-container -->

        </div> <!-- .login-sidebar -->
    </div> <!-- .row -->
</div> <!-- .container-fluid -->
<script>
    var btn = document.querySelector('button[type="submit"]');
    var form = document.forms[0];
    var email = document.querySelector('[name="email"]');
    var password = document.querySelector('[name="password"]');
    btn.addEventListener('click', function(ev){
        if (form.checkValidity()) {
            btn.querySelector('.signingin').className = 'signingin';
            btn.querySelector('.signin').className = 'signin hidden';
        } else {
            ev.preventDefault();
        }
    });
    email.focus();
    document.getElementById('emailGroup').classList.add("focused");

    // Focus events for email and password fields
    email.addEventListener('focusin', function(e){
        document.getElementById('emailGroup').classList.add("focused");
    });
    email.addEventListener('focusout', function(e){
       document.getElementById('emailGroup').classList.remove("focused");
    });

    password.addEventListener('focusin', function(e){
        document.getElementById('passwordGroup').classList.add("focused");
    });
    password.addEventListener('focusout', function(e){
       document.getElementById('passwordGroup').classList.remove("focused");
    });

</script>
</body>
</html>