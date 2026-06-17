# AfriTalent
Projet fil rouge — Plateforme de mise en relation entre freelances africains et
clients.

Auteur : Rony AMOUSSOU

Promotion : L1 DSBD — ISI

<!-- ******* -->
# document.getElementById() = selectionne dans le HTML
# document.querySelector(#id;.classe) = selectionne dans le CSS ; lui il ne selectionne que le premier qu'il trouve, donc un seul.  
# document.querySelectorALL() = pour plusieurs elements 
<!-- ******* -->

<!-- ******* -->
getAttribut = permet de selctionner un attribut; faire une selection dans une selection
<!-- ******* -->

<!-- ******* -->
# getAttribute = (lit juste la valeur d'un attribut sur un élément déjà sélectionné); 
# setAttribute = change ou modifie dans ce champs (set= setting)

<!-- ******* -->

<!-- ******* -->
il faut toujour mettre le header, sinon votre fichier ne va pas apparaitre
<!-- ******* -->

<!-- ******* -->
Quant on met une "img" dans l'HTML les valeurs ne prennent pas d'unite ❌ "px" "vh"
<!-- ******* -->

<!-- ******* -->
# en JS tout est objet et objet eest un type.
<!-- ******* -->

inner
<!-- ******* -->
# Javascript = est un langage a typage dynamique. Vous n'avez pas a precser les types de donnee, c'est grace a la valeur que vous aller lui donner, qu'il va automatiquement determiner le type de la variable. 
Donc vous mettez "let"+"le nom de la variable"+"ça valeur"
<!-- ******* -->

<!-- ******* -->
## A dire le jour de l'exposer
-il faut toujour mettre  la balise "script" avant la fin de body parce l'execution du javascript non seulement peut prendre du temps, mais peux contenir des erreur qui vont bloquer le site.
<!-- ******* -->

<!-- ******* -->
# console.log = est une fonction qui permet de faire l'affichage
<!-- ******* -->

<!-- ******* -->
Let = conseiller,car il les variable de maniere local 
var = conseiller,car il les variable de maniere global(probleme de securite),et il est anciens

<!-- ******* -->
#  == (comparaison en valeur)    2=='2' (true)
# ===   (comparaison en type)    2==='2' (false)
<!-- ******* -->

<!-- ******* -->
# le DOM est un interface de programation (API) un intermediaire entre deux applications qui fonctionne
Donc le DOM est l'API entre l'html et le JAVAscript
<!-- ******* -->

<!-- ******* -->
# document. est de type objet
getelementbyID() est une methode qui permet de recuperer; 
# et une methode est une fonction
<!-- ******* -->
<!-- ******* -->
<!-- ******* -->
<!-- ******* -->

.{propriété}-{modificateur}-{valeur} = .fs-3 .fs-md-2
font-weight or font-style = 
<!-- ==== -->
 <span class="badge bg-primary-light mt-4">Processus simple</span>
<!-- index = mt-4 veux dire Margin Top avec la valeur 4 -->
<!-- ==== -->
1-La classe   .navbar  permet d'ajouter une barre de navigation à un site web.
2-Il est possible de modifier la couleur des barres de navigation grâce aux classes    .navbar-light  et   .navbar-dark. 
3-Il faut ajouter un modificateur de classe à   .navbar-expand  pour rendre la barre de navigation responsive.
4-Implémenter un composant navigation responsive vous permettra d’afficher ou masquer votre menu en fonction de la taille de l’écran utilisé.
5-Vous pouvez personnaliser la typographie de votre site grâce aux classes utilitaires de Boostrap 5.

<!-- ******** -->
 Les Balises de type block (vont creer un block) :
<div>, <p>, <h1>, <h2>, <h3>, <h4>, <h5>, <h6>, <ul>, <ol>, <li>, <header>, <footer>, <section>, <article>, <nav>, <aside>, <main>, <form>, </table>, <hr>, <pre>, <blockquote>
Balises inline (ce trouve dans une balise de type block) :
<a>, <span>, <strong>, <em>, <img>, <br>, <button>, <input>, <label>, <code>, <abbr>, <cite>, <q>, <small>, <time>
<!-- ******** -->

<!-- ******* -->
grid-template-columns: repeat(4, 1fr); = indique le nombre et la taille de tous les elements qui vont etre repartir sur la grille.
grid-template-columns = il est pour les ranger.
<!-- ******* -->

<!-- ******* -->
Media queries = est une propriete CSS
<!-- ******* -->

<!-- ******* -->
.bento-item:hover { transform: translateY(-5px); 
    box-shadow: var(--shadow); 
}
/* effet Hover  */
/* c'est ça qui assure le faite que les cartes bouge */
<!-- ******* -->

<!-- ******* -->
 --transition: all 0.3s ease;
/* transition: le temps que l'element va prendre pour se manifester (bien revoir encore)--
<!-- ******* -->

<!-- ******* -->
Un freelance est un travailleur indépendant qui ne dépend pas d'un lien de subordination avec un employeur.
<!-- ******* -->

<!-- ******* -->
## en Javascript il faut declarer une variable: let/const
<!-- ******* -->

<!-- ******* -->
La variable placesDejaVendues va contenir “15010” et pas “160”, car la présence des guillemets indique à JavaScript que le type de données est “String”, c'est-à-dire du texte. Par conséquent, le  +  n’est plus un opérateur d’addition. Il devient un opérateur de concaténation, qui colle deux morceaux de texte.

Pour résoudre ce problème, nous pouvons soit enlever les guillemets autour des chiffres, soit préciser à JavaScript que nous voulons vraiment utiliser des chiffres, grâce à l’instruction Number. Cette dernière permet de convertir le texte “150” en chiffre 150.

let placesDejaVendues = Number("150")
placesDejaVendues += Number("10")
console.log(placesDejaVendues)
<!-- ******* -->

<!-- ******* -->
## Un Object (objet, en français) JavaScript est un conteneur. Il est composé de propriétés qui ont chacune une valeur. Ainsi, le type de donnée Object offre la possibilité de stocker plusieurs valeurs en une seule fois, plutôt que de devoir stocker séparément nos valeurs dans plusieurs variables différentes.
Pour déclarer un objet en JavaScript, vous devez utiliser les accolades  { }  . Les propriétés d’un objet ont un nom et une valeur qui sont assignées avec deux points:. Les propriétés sont séparées entre elles par des virgules,.

Par exemple, pour déclarer l’objet monPersonnage qui représente le personnage fictif Bruce Wayne, 35 ans, dont la couleur préférée est le noir et qui adore sortir la nuit, vous écrirez :

let monPersonnage = {
nom: "Wayne",
prenom: "Bruce",
age: 35,
couleurPreferee: "noir",
hobbies: "sortir la nuit"
}
<!-- ******* -->

<!-- ******* -->
Dans le cas d’une copie par valeur, si vous modifiez la valeur d’une des deux variables, la valeur de l’autre ne change pas. Dans le cas d’une copie par référence, si vous changez la valeur de la première variable, la valeur de la seconde est affectée aussi.
<!-- ******* -->

<!-- ******* -->
.lenght = la taille d'un tableau
.push() = ajout
.pop() = supprime
Sont tous des methodes.
<!-- ******* -->

<!-- ******* -->
Array = tableau
<!-- ******* -->

<!-- ******* -->
Notez bien également la différence entre  =  et  ===  :

a = 42 signifie que l’on met la valeur 42 dans la variable a ; 

a === 42 signifie que l’on compare la valeur a et la valeur 42, pour savoir si ce sont les mêmes ou pas
<!-- ******* -->

<!-- ******* -->
## JS ( objet; clée:valeur)
<!-- ******* -->

<!-- ******* -->
DOM (Document Object Model)
<!-- ******* -->

<!-- ******* -->
Chaque nœud de cet arbre DOM (header, main, div…) est un objet HTMLElement. Pour le dire autrement, JavaScript a regroupé dans un même objet deux choses : 
les informations sur cet objet (son nom, son id, sa position, etc.) : ce sont les propriétés de l’objet ;
ce que cet objet est capable de faire (réagir au clic, par exemple) : ce sont les méthodes. 
<!-- ******* -->

<!-- ******* -->
on utilise getElementsbyID = quant l'element a un ID
<!-- ******* -->

<!-- ******* -->
${} = l’interpolation
<!-- ******* -->

<!-- ******* -->
## innerHTML = proprité
// innerHTML permet d'insérer,de lire, ou de remplacer du contenu (texte ou code HTML) à l'intérieur d'un élément
innerHTML = permet d'executer des balises
<!-- ******* -->

<!-- ******* -->
// ${} = interpolation (``) =permet d'ecrire du code HTML directement en JAVASCRIPT
<!-- ******* -->

<!-- ******* -->
function () = ce type de fonction est appeler 'Fonction Anonyme' Elle est créée au moment où nous faisons notre addEventListener.
<!-- ******* -->

<!-- ******* -->
# fonction simple
  monBouton.addEventListener("click", function () {
        console.log("...")
    });
<!-- ******* -->
# fonction flecher
monBouton.addEventListener("click", () => {
    console.log("...")
});
# c'est juste des ecriture
<!-- ******* -->
# Value
    // Value permet de recuperer la valeur que l'utilisateur a saisie
<!-- ******* -->

<!-- ******* -->
<script src="film.js" defer></script> defer dit au JAVAscript de faire l'HTML d'abord
<!-- ******* -->

<!-- ******* -->
<form>
    <label for="name">Nom</label>
    <input type="text" id="name" name="name" placeholder="Votre nom" required>
    <label for="email">Email</label>
    <input type="email" id="email" name="email" placeholder="Votre email" required>
    <label for="message">Message</label>
    <textarea id="message" name="message" placeholder="Votre message" required></textarea>
    <input type="submit" value="Envoyer">
</form>
# Les balises labels
Les balises labels servent à indiquer un texte, lié au champ que l’utilisateur va devoir remplir. 

# Les balises input
Les balises input (“entrée”, en français) forment le cœur des formulaires. Elles permettent à l’utilisateur de saisir des données. D’ailleurs, nous en avons déjà utilisé une dans notre projet. Eh oui, rappelez-vous, c’est grâce à cela que le joueur peut maintenant saisir le mot qu’il doit recopier.
<!-- ******* -->

<!-- ******* -->
# trim()
 supprime les espaces "autour" du texte ,pas à l'interieur(avant la première lettre et après la dernière lettre)
 C’est pourquoi la bonne pratique consiste à nettoyer les champs avant de les tester. En utilisant la méthode trim(), vous pouvez ainsi nettoyer le champ et supprimer automatiquement les espaces et autres tabulations autour de la chaîne à tester !
<!-- ******* -->

<!-- ******* -->
# Value
  permet de récupérer (ou de modifier) la valeur d'un élément de formulaire

<!-- ******* -->
# si (condition) est vrai "?" fait (condition) sinon fait ":" (condition)
<!-- ******* -->

<!-- ******* -->
# const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/   ou “Regular Expression”
Ce code est une expression régulière (regex) qui sert à valider une adresse email.
/   = Délimite le début et la fin de l'expression régulière
^   = Début de la chaîne (rien avant)
[^\s@] = Un caractère qui n'est PAS (^ à l'intérieur des crochets) un espace (\s) ni un @
+   = Le caractère précédent doit apparaître 1 fois ou plus
@   = Le caractère littéral @
[^\s@]+ = Encore un ou plusieurs caractères qui ne sont ni espace ni @
\.  = Un point littéral (le \ échappe le point)
[^\s@]+	Encore un ou plusieurs caractères (le domaine : .com, .fr, etc.)
$   =  Fin de la chaîne rien après

La chaîne doit :
Commencer par un ou plusieurs caractères (sans espace ni @)
Puis un @
Puis un ou plusieurs caractères (sans espace ni @)
Puis un point .
Puis un ou plusieurs caractères (sans espace ni @)
Et se terminer immédiatement après
<!-- ******* -->

<!-- ******* -->
# .join('')
 sert à transformer un tableau en une seule chaîne de texte (une seule string).

<!-- ******* -->

<!-- ******* -->
<!-- ******* -->

<!-- ******* -->
<!-- ******* -->

<!-- ******* -->
<!-- ******* -->
<!-- ******* -->

<!-- ******* -->

<!-- ******* -->
<!-- ******* -->

<!-- ******* -->
<!-- ******* -->

<!-- ******* -->
<!-- ******* -->

<!-- ******* -->
<!-- ******* -->

<!-- ******* -->
<!-- ******* -->

<!-- ******* -->
<!-- ******* -->

<!-- ******* -->
<!-- ******* -->


![captured'ecran](images/Capture%20d'écran%202026-06-16%20092627.png)


