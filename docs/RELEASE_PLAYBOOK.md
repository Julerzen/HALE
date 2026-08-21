# HALE Release Playbook

Status: verbindlicher Arbeitsablauf fuer Prototypen, Merge und Deployment  
Stand: 2026-08-21

## Zweck

Dieses Playbook macht Releases fuer einen Programmier-Anfaenger nachvollziehbar und haelt die technische Qualitaet professionell. Es verhindert, dass ein Prototyp nur deshalb gemergt wird, weil er gut aussieht oder ein Vercel-Deployment den Status `READY` zeigt.

Ein HALE-Release ist erst sauber, wenn Produktentscheidungen, Inspiration, Code, Tests, Preview und Dokumentation denselben Stand abbilden.

## Verbindliche Quellen

Vor Produktarbeit, Preview, Merge oder produktivem Deployment werden mindestens diese Quellen gelesen:

1. Notion: **HALE Operating System** und die fuer die Aenderung betroffenen Seiten.
2. GitHub: `AGENTS.md`, `docs/HALE_IMPLEMENTATION_CONTEXT.md` und dieses Playbook.
3. Aktiver Pull Request: Beschreibung, geaenderte Dateien, Kommentare und Checks.
4. Vercel: Deployment zum **exakten Head-Commit** des Pull Requests.
5. Relevante Projektanhaenge: Bilder, Videos, Audio- oder App-Referenzen muessen vor einer Release-Entscheidung in der Inspiration Library ausgewertet sein.

Ein einzelner Chatverlauf ist keine dauerhafte Quelle. Neue Beschluesse werden in die bestehenden Notion-Seiten und bei technischer Relevanz in den GitHub-Handoff zurueckgeschrieben.

## Statusmodell

- **NICHT BEREIT**: Blocker, ungeklaerte Abweichungen oder fehlende Nachweise.
- **PREVIEW BEREIT**: Der aktuelle Branch ist gebaut, erreichbar und fuer Feedback geeignet; noch keine Merge-Freigabe.
- **MERGE BEREIT**: Alle Pflichtpruefungen sind bestanden, der exakte Commit wurde geprueft und Julian hat den konkret benannten PR und Commit ausdruecklich freigegeben.
- **PRODUKTION VERIFIZIERT**: Der Merge ist auf `main`, das zugehoerige Produktions-Deployment ist `READY` und der Kernfluss wurde erneut geprueft.

`Vercel READY` bedeutet nur, dass Vercel ein Artefakt gebaut und bereitgestellt hat. Es ist kein Produkt-, Design-, Sicherheits- oder Merge-Urteil.

## Release-Ablauf

### 1. Kontext und Scope einfrieren

- Aktuellen Notion- und GitHub-Stand lesen.
- Ein konkretes Nutzerergebnis fuer den naechsten Prototyp benennen.
- **In Scope** und **Out of Scope** dokumentieren.
- Akzeptanzkriterien festlegen, bevor Code angepasst wird.
- Inspiration als Prinzip uebersetzen; keine fremden Assets oder charakteristischen Umsetzungen kopieren.

### 2. Auf einem Arbeits-Branch entwickeln

- Niemals direkt auf `main` entwickeln.
- Branch-Namen nach Muster `prototype/<kurzer-name>` oder `feature/<kurzer-name>`.
- Frueh einen Draft Pull Request anlegen.
- Kleine, erklaerbare Commits verwenden.
- Produktverhalten, Designrichtung oder Datenverarbeitung sofort im Repository-Handoff aktualisieren.

### 3. Automatische Qualitaetspruefung

Der GitHub-Workflow **HALE Quality Gate** muss gruen sein. Aktuell umfasst er:

- reproduzierbare Installation mit `npm ci`
- TypeScript-Pruefung ueber `npm run lint`
- Next.js-Produktions-Build ueber `npm run build`

Spaetere Unit-, Komponenten- und End-to-End-Tests werden ergaenzt, sobald entsprechende Test-Skripte existieren.

### 4. Preview pruefen

- Vercel-Preview muss zum exakten PR-Head-Commit gehoeren.
- Kernfluss auf einem mobilen Viewport vollstaendig durchklicken.
- Mindestens Opening, optionaler Check-in, Ergebnis, Auswahl, Player, Pause/Weiter, Abschluss und Neustart pruefen, soweit sie im Scope liegen.
- Browser-Konsole auf Fehler pruefen.
- Kleine und grosse iPhone-Hoehen pruefen.
- Tastaturfokus, Screenreader-Texte, Kontrast und `prefers-reduced-motion` pruefen.
- Bei geschuetzten Previews sicherstellen, dass Julian den Link auf dem iPhone tatsaechlich oeffnen kann.

### 5. Inspiration sichtbar abgleichen

Jede relevante Referenz bekommt im Pull Request einen Nachweis:

| Feld | Pflichtinhalt |
| --- | --- |
| Quelle | Datei, Link oder App und Datum |
| Staerke | Was konkret funktioniert |
| HALE-Prinzip | Welche abstrakte Idee uebernommen wird |
| Eigenstaendigkeit | Was bewusst nicht kopiert wird |
| Rechte | Inspiration, lizenziert, HALE-Original oder offen |
| Nachweis | Screen oder Schritt im Preview, an dem die Uebersetzung sichtbar ist |

Ein Video oder Bild gilt nicht als verarbeitet, nur weil es erwaehnt wurde. Die konkrete Uebersetzung und der sichtbare Nachweis muessen dokumentiert sein.

### 6. Release Gate

Vor `MERGE BEREIT` muessen alle zutreffenden Punkte erfuellt sein:

- [ ] Notion und GitHub wurden fuer den betroffenen Scope abgeglichen.
- [ ] Hypothese, Entwurf, Entscheidung und Implementierung sind korrekt unterschieden.
- [ ] Pull-Request-Beschreibung nennt Ergebnis, Scope und Nicht-Ziele.
- [ ] Alle neuen Inspirationen sind nach Quelle, Prinzip, Eigenstaendigkeit und Rechten bewertet.
- [ ] Keine ungestuetzten Gesundheits- oder Leistungsversprechen.
- [ ] Keine nicht lizenzierten Texte, Bilder, Videos oder Audioinhalte im Build.
- [ ] Datenschutz und Datensparsamkeit sind geprueft.
- [ ] Barrierefreiheit und reduzierte Bewegung sind geprueft.
- [ ] GitHub Quality Gate ist gruen.
- [ ] Vercel Preview ist `READY` und gehoert zum exakten PR-Head-Commit.
- [ ] Der mobile Kernfluss wurde sichtbar geprueft.
- [ ] Bekannte Grenzen und Rollback-Weg sind dokumentiert.
- [ ] Julian hat den konkret benannten PR und Commit ausdruecklich zum Merge freigegeben.

### 7. Merge

- Standard fuer HALE: **Squash and merge**, damit ein Prototyp als ein nachvollziehbarer Stand in `main` landet.
- Unmittelbar vor dem Merge Head-Commit, Checks und Freigabe nochmals vergleichen.
- Niemals einen anderen Commit mergen als den freigegebenen.
- Der Merge wird nicht aus einer allgemeinen Aussage wie „sieht gut aus“ abgeleitet. Die Freigabe muss PR und Commit eindeutig meinen.

### 8. Produktion und Smoke Test

- Git-Integration deployed `main` nach Produktion.
- Produktions-Deployment und Merge-Commit muessen zusammenpassen.
- Kernfluss auf der Produktions-URL erneut kurz pruefen.
- Runtime-Fehler und Build-Logs pruefen.
- Ergebnis im Release Record als **PRODUKTION VERIFIZIERT** oder mit Blocker dokumentieren.

### 9. Rollback

- Bei einem reinen Frontend-Prototyp: vorheriges funktionsfaehiges Vercel-Deployment wiederherstellen oder den Merge per neuem Revert-PR rueckgaengig machen.
- Keine destruktiven Git-Befehle und kein Umschreiben von `main`.
- Datenbankmigrationen benoetigen vorab einen eigenen Migrations-, Backup- und Rollback-Plan. Fuer den aktuellen lokalen Check-in werden keine sensiblen Rohwerte dauerhaft gespeichert.

## Einfacher iPhone-Ablauf fuer Julian

1. Preview-Link im Pull Request oeffnen und den vereinbarten Kernfluss testen.
2. Im Pull Request unter **Checks** kontrollieren, dass **HALE Quality Gate** gruen ist.
3. Bekannte Grenzen und Release-Ampel lesen.
4. Aenderungswuensche nennen oder eindeutig freigeben, zum Beispiel: `Merge-Freigabe fuer PR #3 auf Commit abc1234.`
5. Nach dem Merge den Produktionslink oeffnen und den kurzen Smoke Test bestaetigen.

ChatGPT erklaert jeden Schritt in Alltagssprache, fuehrt technisch moegliche Pruefungen selbst aus und stoppt vor dem Merge, solange die konkrete Freigabe fehlt.

## Release Record

Fuer jeden beabsichtigten Produktions-Merge wird auf dem Arbeits-Branch ein Record unter `docs/releases/` gepflegt. Er verwendet `docs/releases/RELEASE_RECORD_TEMPLATE.md` und enthaelt die exakten Commits, Deployment-IDs, Nachweise, Freigabe und bekannte Grenzen.
