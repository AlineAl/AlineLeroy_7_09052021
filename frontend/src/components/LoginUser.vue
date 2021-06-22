<template>
    <div class="container">
        <div class="navbar">
            <div>
               <router-link to="/articles"><img src="../assets/images/icon-left-font-monochrome-black.png" alt="groupomania" class="logo"></router-link>
            </div>
            <div class="list">
                <div>
                   <ul>
                        <li class='list-navbar'><i class="fas fa-power-off"></i></li>
                        <li class='list-navbar'><i class="fas fa-list"></i></li>
                    </ul> 
                </div>
                <div class="dropdown">
                   <img src="../assets/images/—Pngtree—vector users icon_4144740.png" alt="photo de profil" class="avatar">
                   <div name="login-signup" id="login-signup" class="list-login-signup">
                       <router-link style="text-decoration: none; color: inherit" to="/auth/login"><li class="drop-list" id="hover-login">login</li></router-link>
                       <router-link style="text-decoration: none; color: inherit" to="/auth/signup"><li id="hover-signup">signup</li></router-link>
                   </div>
                </div>
            </div>
        </div>

        <div class="card-login">
            <form action="" method="post">
                <img src="../assets/images/icon-left-font-monochrome-black.png" alt="">
                <div>
                    <input class="form-email-password" type="text" id="email" name="email" placeholder="Email" required>  
                </div>
                <div>
                    <input class="form-email-password" type="text" id="password" name="password" placeholder="Mot de passe" required> 
                </div>
                <div class="button-form">
                    <input class="button" type="submit" value="Se connecter">
                </div>
            </form>
        </div>
    </div>
</template>

<script>

export default { }

</script>
