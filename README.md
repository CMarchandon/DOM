Le DOM (Document Object Model)

    Le DOM est une représentation hiérarchique et structurée des éléments HTML d'une page web. Il permet d'interagir avec les éléments de la page, de les modifier et de réagir aux événements.
    Chaque élément HTML est représenté par un nœud (node) dans le DOM. Les nœuds peuvent être des éléments, des attributs, du texte, etc.
    Le DOM est organisé sous forme d'un arbre, appelé l'arbre DOM, où chaque nœud est un enfant d'un autre nœud. L'élément racine de cet arbre est l'objet document.

Sélection d'éléments

    document.getElementById('id') permet de sélectionner un élément par son attribut id.
    document.getElementsByClassName('class') permet de sélectionner tous les éléments ayant une classe spécifiée.
    document.getElementsByTagName('tag') permet de sélectionner tous les éléments d'un type spécifié.
    document.querySelector('selector') permet de sélectionner le premier élément correspondant à un sélecteur CSS spécifié.
    document.querySelectorAll('selector') permet de sélectionner tous les éléments correspondant à un sélecteur CSS spécifié.

Modification des éléments

    element.textContent permet d'accéder ou de modifier le contenu texte d'un élément.
    element.innerHTML permet d'accéder ou de modifier le contenu HTML d'un élément.
    element.setAttribute('attribute', 'value') permet de définir la valeur d'un attribut spécifié pour un élément.
    element.classList permet de manipuler les classes d'un élément, telles que add(), remove(), toggle(), etc.

Événements

    Les événements sont des actions déclenchées par l'utilisateur ou par le navigateur, comme un clic de souris ou une soumission de formulaire.
    element.addEventListener('event', callback) permet d'ajouter un écouteur d'événement à un élément spécifié.
    Les événements courants incluent click, mouseover, keydown, submit, etc.