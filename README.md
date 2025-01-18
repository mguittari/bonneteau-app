# FIND THE ACE OF SPADES

Règles

Le but du jeu est de trouver l'as de pique (carré bleu dans le prototype).

Si le joueur le trouve du premier coup, il gagne 3 points.

S'il le trouve à la deuxième tentative, il gagne 1 point.

S'il ne le trouve pas, il perd 3 points.

La partie s'arrête au bout de 10 tours.

Après chaque tour les cartes sont remélangées et retournées.

## Prototype
- Design temporaire (formes géométriques à la place des figures, dos des cartes non fixé, etc)
- Application fonctionnelle (logique algorithmique, affichage du score, tours limités)
- Affichage du score en modal à la fin
- Affiche de messages de félicitations à la fin de chaque tour et bouton pour accéder au tour d'après

## V1
- Beau design ("vraies" cartes à jouer, tapis de jeu, etc)
- Affichage des règles
- Bouton recommencer la partie
- Système de vies (- 1 vie si le joueur ne trouve pas la carte) et non plus la perte de points, la partie s'arrête quand toutes les vies sont perdues

## V2
- Choix d'un pseudo en début de partie
- Système de mise d'argent qui remplace les points (As du premier coup le joueur double ses gains, deuxième coup il récupère sa mise, troisième coup il la perd)
- Affichage du score en fin de partie et classement
