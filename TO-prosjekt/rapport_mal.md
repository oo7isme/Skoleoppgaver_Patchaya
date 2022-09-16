
# Mat applikasjon

## Behovsanalyse

#### Hvilke utfordringer har brukeren?
#### Hvilke interesser har brukeren?

Brukeren har vanskelig for å følge med ting som skjer rundt seg og 
Brukeren tenker at det er vanskelig å bestemme seg.
Brukeren er interressert i matlaging
Brukeren vil ha en app som kan hjelpe seg til å lage mate på hverdager (food library).

## Applikasjon

#### Hva er applikasjonen?

Applikasjonen er En mat applikasjon som kan hjelpe brukeren til å velge mat til å lage, siden de har vanskelig å bestemme seg. 
Appen skal innholder mange matretter, men det skal anbefaler til brukeren hver dag.

1. appen skal anbefale nye matretter hver eneste dag.
2. det skal ha oppskrifter og ingredienserne til de matrettene.
3. det skal også ha bilder.

## Fremgangsmøte

#### Database

Skal lage en firebase database - database som lagrer Matretter, bilder og oppkrifter.

  Forslag til tabell 1 - mat:

  | MatID          | Matretter     | bilder |
  | -------------- |:-------------:|-------:|
  | 1              | taco          |taco.img| 
  
  
  Forslag til tabell 2 - mat2:

  | MatID          | Oppskrift     | Ingredienser |
  | -------------- |:-------------:|-------------:|
  | 1              | Lorem Ipsum   |Lorem Ipsum   | 

  Forslag til tabell 3 - user:

  | UserID         | Username      | email           | password |
  | -------------- |:-------------:| ---------------:| -------: |
  | 1              | Patchaya     | patchaya@viken.no| ******** |

  MatID og UserID er primær nøkkel 
  user tabellen skal brukes til innlogging.

#### HTML, CSS og Javascript

- Appen trenger en innloggingsside, som kobler opp informasjon fra firebasedatabasen
med informasjonen i innloggingsfeltet. Her bruker vi JS til å koble opp til firebase
- Appen kommer til å bruke minst kode så mulig.
- Skal bruke JS til å lage funksjoner også.

#### Firebase - host og database service.

- Trenger database-tilkobling, og kan både hente og oppdatere databasen.
firebase :
1. Som backend service.
2. Realtimedatabase.
3. Som webserver. (for å hoste appen)
4. Authentication.


