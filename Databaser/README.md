### Oppgave 1:

> ELEV OG PROGRAMFAG TABELLER


![ELEV](https://github.com/oo7isme/Skoleoppgaver_Patchaya/blob/main/IMG/Screenshot1.png?raw=true)

![PROGRAMFAG](https://github.com/oo7isme/Skoleoppgaver_Patchaya/blob/main/IMG/screenshot2.png?raw=true)

### Oppgave 2:

> Bruk SQL-spørringer

> A. Hvilke jenter er det i alle klassene? 

```sql
  SELECT * FROM `elev` WHERE kjonn = "J";
```

![oppgave2a](https://github.com/oo7isme/Skoleoppgaver_Patchaya/blob/main/IMG/screenshot3.png?raw=true)


> B. Hvilke gutter er det i klasse 2?  

```sql
  SELECT * FROM `elev` WHERE kjonn = "G" AND Klasse = 2;
```

![oppgave2b](https://github.com/oo7isme/Skoleoppgaver_Patchaya/blob/main/IMG/screenshot4.png?raw=true)

> C. Hvor mange jenter er i klasse 2?

```sql
  SELECT * FROM `elev` WHERE kjonn = "J" AND Klasse = 2;
```

![oppgave2c](https://github.com/oo7isme/Skoleoppgaver_Patchaya/blob/main/IMG/screenshot5.png?raw=true)

> D. Hvilke elever har Fornavn som starter på bokstaven J?

```sql
  SELECT * FROM `elev` WHERE Fornavn LIKE "J%";
```
![oppgave2d](https://github.com/oo7isme/Skoleoppgaver_Patchaya/blob/main/IMG/screenshot6.png?raw=true)

> E. Hvilke elever starter på bokstaven M og går i klasse 2?

```sql
  SELECT * FROM `elev` WHERE Fornavn LIKE "M%" AND Klasse = 2;
```

![oppgave2e](https://github.com/oo7isme/Skoleoppgaver_Patchaya/blob/main/IMG/screenshot7.png?raw=true)

> F. Hvilke elever har hobby ‘Fotball’?

```sql
  SELECT * FROM `elev` WHERE Hobby = "fotball";
```

![oppgave2f](https://github.com/oo7isme/Skoleoppgaver_Patchaya/blob/main/IMG/screenshot8.png?raw=true)

### Oppgave 3:

> DATAMASKIN TABELL

![oppgave3](https://github.com/oo7isme/Skoleoppgaver_Patchaya/blob/main/IMG/screenshot9.png?raw=true)

### Oppgave 4:

> Gi HVER ELEV EN DATAMASKIN

![oppgave3](https://github.com/oo7isme/Skoleoppgaver_Patchaya/blob/main/IMG/screenshot10.png?raw=true)


### Oppgave 5:

> FREMMEDNØKKEL

### Oppgave 6:

> HVILKE DATAMASKINER HAR MARTIN OG HANNA?

```sql
SELECT elev.ElevID, elev.Fornavn, elev.Etternavn, datamaskin.Model FROM elev INNER JOIN datamaskin ON elev.Datamaskin = datamaskin.DatamaskinID WHERE Fornavn = "Hanna" OR Fornavn = "Martin";
```

![oppgave6](https://github.com/oo7isme/Skoleoppgaver_Patchaya/blob/main/IMG/screenshot11.png?raw=true)

### Oppgave 7:

> SORTERE ELEVENE ETTER FORBOKSTAV

```sql
SELECT * FROM `elev` ORDER BY Fornavn ASC;
```

![oppgave7](https://github.com/oo7isme/Skoleoppgaver_Patchaya/blob/main/IMG/screenshot12.png?raw=true)

### Oppgave 8:

> Lag en query der du bare lister opp klasser med minst to elever. Sorter etter kolonnen
“klasse” I kronologisk rekkefølge. 

![oppgave8](https://github.com/oo7isme/Skoleoppgaver_Patchaya/blob/main/IMG/screenshot15.png?raw=true)


```sql
SELECT elev.Klasse FROM elev GROUP BY elev.Klasse HAVING COUNT(Klasse) > 1 ORDER BY `elev`.`klasse` ASC;
```

### Oppgave 9:

>Oppdater tabellen med en UPDATE, der du forandrer hobbyene til en av elevene.

```sql
UPDATE `elev` SET `Hobby`='Golf' WHERE Fornavn = "Martin";
```

![oppgave9](https://github.com/oo7isme/Skoleoppgaver_Patchaya/blob/main/IMG/screenshot13.png?raw=true)


### Oppgave 10:

>Legg til en ny elev med INSERT

```sql
INSERT INTO `elev`(`ElevID`, `Fornavn`, `Etternavn`, `Klasse`, `Hobby`, `kjonn`, `Datamaskin`) VALUES ('11','Trygve','Melvold','2','Gaming','G','2');
```

![oppgave10](https://github.com/oo7isme/Skoleoppgaver_Patchaya/blob/main/IMG/screenshot14.png?raw=true)

### Oppgave 11:

>Slett en elev fra klassen (Elev-tabellen) med SQL.

```sql
DELETE FROM `elev` WHERE ElevID = 11;
```


