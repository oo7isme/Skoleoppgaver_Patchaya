
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

  Forslag til tabell 1 - Person:

  | BrukerID       | Brukernavn    | Passord |
  | -------------- |:-------------:| -------:|
  | 1              | 20.08.1991    | 3       |

  Forslag til tabell 2 - Spill:

  | spillID        | Dato          | Poeng | Person |
  | -------------- |:-------------:| -----:| -----: |
  | 1              | 20.08.1991    | 3     | 1      |

  Person-kolonnen i Spill - tabellen er en fremmednøkkel som skal fylles
  på med primærnøkkelen fra Person-tabellen for hvert spill.
  Person-tabellen skal brukes til innlogging.

#### HTML, CSS og Javascript

- Spillet trenger en innloggingsside, som kobler opp informasjon fra databasen
med informasjonen i innloggingsfeltet.
- Stylingen er "clean", med et stort bakgrunnsbilde på alle slides.
- Spillet skal ha en velkommen side (start spillet-side) og start spillet-knapp.
- Når man har svart, så kommer det opp at brukeren har tatt riktig eller feil.
Spilleren blir "tvunget" med til neste spørsmål.
- På Hver side skal det stå hvor langt spilleren har kommet i spillet.
For eksempel 1/10 på først slide, 2/10 på andre slide.

#### Node - backend service.

- Trenger database-tilkobling, og kan både hente og oppdatere databasen.
- Node kan brukes på to måter:
1. Som backend service og API-calls.
2. Som webserver.

Dette har jeg ikke bestemt meg for enda.
