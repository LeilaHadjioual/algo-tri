//--------------------- tri par insertion ------------------
let a = [3, 9, 7, 1, 6, 2, 8, 4, 5];

function insertSort() {
    // console.log("******** tableau tri insertion initial : ********* " + a);
    let tmp;
    for (let i = 1; i < a.length; i++) {
        for (let k = i; k > 0; k--) {
            if (a[k] < a[k - 1]) {
                tmp = a[k];
                a[k] = a[k - 1];
                a[k - 1] = tmp;
                // console.log("tableau après une boucle :" + a);
            }
        }
    }
}

//--------------------- tri par sélection ---------------------
let b = [3, 9, 7, 1, 6, 2, 8, 4, 5];

function selectionSort() {
    // console.log("*******tableau tri sélection avant tri ******* " + b);
    let tmp;
    for (let i = 0; i < b.length; i++) {
        let k = i;
        for (let j = i + 1; j < b.length; j++) {
            if (b[j] <= b[k]) {
                k = j;
                if (b[k] < b[i]) {
                    tmp = b[k];
                    b[k] = b[i];
                    b[i] = tmp;
                    // console.log("tableau après la boucle sélection " + b);
                }
            }
        }
    }
}

//------------- tri rapide ---------------------
let tab = [3, 9, 7, 1, 6, 2, 8, 4, 5];

function quickSort(iDeb, iFin) {
    let rand = random(iDeb, iFin);
    swap(iDeb, rand);
    let k = iDeb;
    for (let i = iDeb + 1; i <= iFin; i++) {
        if (tab[i] < tab[iDeb]) {
            // ++k tu avances avant de permuter les valeurs
            swap(++k, i);
        }
    }
    swap(iDeb, k);

    //ce code est fait après la boucle terminée, divise le tableau en 2 (k étant le pivot)
    if (iDeb < k - 1) {
        quickSort(iDeb, k - 1);
    }
    if (k + 1 < iFin) {
        quickSort(k + 1, iFin);
    }
}

//fonction qui retourne un chiffre aléatoire
function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//fonction qui permet de permuter 2 valeurs
function swap(a, b) {
    let tmp = tab[a];
    tab[a] = tab[b];
    tab[b] = tmp;
    return tab;
}

//--------------------- tri par bulles -----------------------

let tabBulle = [3, 9, 7, 1, 6, 2, 8, 4, 5];
console.log("*******tableau tri à bulle avant tri ******* " + tabBulle);

function bubbleSort() {
    for (let i = 0; i < tabBulle.length; i++) {
        let swapped = false;
        for (let j = tabBulle.length - 1; j >= i + 1; j--) {
            if (tabBulle[j] < tabBulle[j - 1]) {
                swapBulle(j, j - 1);
                swapped = true;
            }
            // passage++;
            console.log("tableau après une boucle :" + tabBulle);
        }
        if (swapped === false) {
            return;
        }
    }
}

function swapBulle(a, b) {
    let temp = tabBulle[a];
    tabBulle[a] = tabBulle[b];
    tabBulle[b] = temp;
    return tabBulle;
}

//---------------------- appel des fonctions -------------------
insertSort();
selectionSort();
quickSort(0, 8);
bubbleSort();