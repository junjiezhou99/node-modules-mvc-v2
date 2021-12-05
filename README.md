## Introducció

En aquest exercici anem a re-construir una versió nova de Movies.

<br>

## Requisits

- Primer fer un _Fork_ d'aquest repositori https://github.com/rgarciamvm/node-modules-mvc-v2.git
- Después clona __tu__ repositorio

## Lliurament

Una vegada finalitzat...:

```shell
$ git add .
$ git commit -m "done"
$ git push origin master
```
## Enviament

Per enviar l'exercici feu servir el classroom:

1.- Heu d'enviar-me el link del vostre repositori github (exemple : https://github.com/rgarciamvm/node-modules-mvc-v2.git)

## 1era Iteració (8 punts)

1.- **Només** heu de codificar **controllers/moviesController.js** i **share/data-movies.js** perquè **app.js** no doni errors. 

2.- El resultats esperats els pot verificar a **results.txt**

## 2ona Iteració (2 punts)

1.- Codificar **managers/manager-fs.js** perquè pugui llegir un fitxer JSON. (data/movies.json) - Podeu consultar https://sebhastian.com/fs-readfilesync/

2.- Modifiqueu **models/moviesModels.js** perquè importi el array movies des de **managers/manager-fs.js**. No heu de recodificar **només** moficar el import.

3.- Executeu **app.js** ( node app.js) i verifiqueu els resultats amb **results.txt**.

