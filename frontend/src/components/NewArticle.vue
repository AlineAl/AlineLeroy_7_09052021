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
                       <router-link style="text-decoration: none; color: inherit" to="/"><li class="drop-list" id="hover-login">login</li></router-link>
                       <router-link style="text-decoration: none; color: inherit" to="/users/signup"><li id="hover-signup">signup</li></router-link>
                   </div>
                </div>
            </div>
        </div>

        <div class="card-display-article"> 
            <form action="" method="post">
                <p class="add-image"><i class="fas fa-images"></i> <i class="fas fa-plus" id="add"></i></p>
                <p class="display-none">Ajouter une image</p>
                <div>
                    <input class="form-title-content" type="text" id="titre" name="titre" placeholder="Titre de l'article" required>  
                </div>
                <div>
                    <input class="form-title-content" id="content" type="text" name="contenu" placeholder="Tu peux écrire ici" required>  
                </div>
                <div class="button-form">
                    <input class="button" type="submit" value="Poster mon article">
                </div>  
            </form>
        </div>
    </div>
</template>

<script>

export default { }

</script>