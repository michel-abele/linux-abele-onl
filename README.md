![GitHub last commit (branch)](https://img.shields.io/github/last-commit/michel-abele/linux-abele-onl/main?logo=github&label=last%20commit%3A%20main)
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/michel-abele/linux-abele-onl/work?logo=github&label=last%20commit%3A%20work)
![GitHub repo size](https://img.shields.io/github/repo-size/michel-abele/linux-abele-onl)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/michel-abele/linux-abele-onl/ftp-deploy.yml)
![Website](https://img.shields.io/website?url=https%3A%2F%2Flinux.abele.onl)

# Webseite: linux.abele.onl

:gb:|:us: [English version](https://github.com/michel-abele/linux-abele-onl/blob/main/readme.en.md)

## Über dieses Repository

Dieses Repository dient als umfassende Sammlung aller Elemente meines Webprojekts. Es enthält sowohl den Quellcode als auch alle Inhalte meiner persönlichen Webseite. Die öffentliche Zugänglichkeit des Repositories verfolgt den Zweck, Interessierten Einblick in meinen Entwicklungsprozess zu gewähren und zu demonstrieren, wie ich die Automatisierung der Webseite über GitHub umgesetzt habe.

### Zielgruppe

Die Hauptzielgruppe dieses Repositories sind:

- **Potenzielle Arbeitgeber**: Um ihnen einen detaillierten Einblick in meine Fähigkeiten und Arbeitsweise als Entwickler zu bieten.
- **Freelance-Kunden**: Um das Vertrauen in meine Dienstleistungen zu stärken und meine Expertise in der Webentwicklung zu veranschaulichen.

Ich lade Sie herzlich ein, sich mit dem Inhalt dieses Repositories vertraut zu machen und stehe für Rückfragen und Diskussionen zur Verfügung.

Den Code und Inhalt dieser Webseite kannst du nach Lust und Laune kopieren.

## Webseitenaufbau

### Entwicklungsumgebung

Für dieses Projekt habe ich mich für eine Kombination aus Vite und Vue als Kern-Technologien entschieden. Als Entwicklungs- und Testumgebung dient mir daher Vite in Verbindung mit Node.js.

### Backend

Im Backend verwende ich spezialisierte PHP-Dateien die eine API anbieten, die z. B. Datenbankabfragen durchführen. Alles andere habe ich auf das Frontend ausgelagert, das mit den PHP-Dateien interagiert.

### Frontend

Im Frontend setze ich auf die Kombination von Vue und Bootstrap. Bootstrap dient dabei als Grundgerüst für das Layout, während eine individuell angepasste S/CSS-Datei das Design verfeinert.

Der größte Teil dieses Projekt läuft über das Frontend aus Vue. Dieses übernimmt das Routing und Aufrufen der Seiten, das Reagieren auf Benutzeraktionen und die dynamische Auslieferung der Inhalte.

### Deploy

Die Veröffentlichung der Webseite erfolgt über einen automatisierten Workflow auf GitHub. Jedes Mal, wenn in den Hauptzweig (main branch) Änderungen eingepflegt werden, beispielsweise durch das Zusammenführen (Merge) aus einem Feature-Branch, wird dieser Workflow aktiviert. In einem ersten Schritt wird ein Build-Prozess ausgelöst, der die eigentliche Webseite erstellt. Im zweiten Schritt werden die aktualisierten Dateien auf den Webserver, genauer gesagt auf den FTP-Server, übertragen. Anschließend wird der Cache der Webseite bei Cloudflare geleert, um sicherzustellen, dass die neuen Inhalte unverzüglich verfügbar sind.
