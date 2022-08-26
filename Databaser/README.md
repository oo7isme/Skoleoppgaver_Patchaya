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

![JENTER]()

> B. Hvilke gutter er det i klasse 2?  

```sql
  SELECT * FROM `elev` WHERE kjonn = "G" AND Klasse = 2;
```

![GUTTER I KLASSE 2]()
