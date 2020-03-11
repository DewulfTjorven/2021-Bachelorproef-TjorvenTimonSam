# ThatsApp Routes

Tijd voor een update van onze ThatsApp. Ons datamodel is aangepast. We hoeven de store niet meer te propdrillen, we kunnen een router gebruiken en we kunnen de styling anders aanpakken.

## Tests

- Er zijn nog een aantal aanpassingen nodig aan ons datamodel. Je kan het allemaal implementeren door de tests te runnen.
  - We moeten bij het aanmaken van een nieuwe group deze ook bijhouden in de DataStore. Idem voor de User. De store is dus verplicht om mee te geven bij het aanmaken van een nieuwe `Group` of `User`
  - Als we users meegeven aan de constructor van een `Group`, dan wisten die users niet dat ze tot die group behoren.
- De volgende aanpassingen zijn al doorgevoerd
  - De UiStore is een pak kleiner, we kunnen het meeste opvangen dmv een Router
  - De pic en avatar properties van `Group` en `User` krijgen een placeholder indien er niks is meegegeven.

## Context

- De context (met bijhorend seeden van de store) krijg je al van ons. Graag gedaan.

## Hooks

- Je moet nog zelf voor de hook zorgen.

## Containers & Components

- De components zijn opgesplitst in 2:
  - components: de _kleinste_, herbruikbare bouwsteentjes
  - containers: deze die eerder (delen van) de view maken door oa components te combineren.
    - Alle _containers_ die links in de sidebar te zien zijn, zitten in de map `Sidebar`
      - Ook de container `Sidebar` zelf
    - Alle _containers_ die rechts te zien zijn, zitten in de map `Content`
      - Ook de container `Content` zelf
    - Zie `<App>`, deze bevat enkel de `<Sidebar>` en `<Content>` component

## Routes

- Om het overzicht te bewaren van de routes, is het een goed idee om deze te verzamelen in een objectje. Eigenlijk hetzelfde principe als met het `CATEGORIES` of `VIEWS` object. We hebben dit al voor jou voorzien in de `/consts/index.js`.
- Soms maken we daar het onderscheid tussen een `path` en een `to`. Dat heeft te maken met de parameters voor een route.
- De routes en components heb je al gekregen voor de `<Sidebar>`. Deze voor de `<Content>` voorzie je zelf.
- Let op het `<Empty>` component. Deze kan je gebruiken indien je geen specifiek content component kan tonen of als een group/user met opgegeven id niet is gevonden.

## Components in detail

- useObserver moet je nog toevoegen indien nodig

### Form

- Zorg er voor dat je een Message kan toevoegen. Opgelet: bekijk nog eens de constructor van de `Message` class. Wat heeft die wel/niet nodig in de constructor? Hoe geraak je aan die data?

### Group

- Dit is om één group weer te geven in de sidebar. We kunnen dit component op meerdere plaatsen gebruiken, maar de Link is wel anders. Deze geven we dus mee via props.

### GroupsList

- Wat heeft die .map() nodig?

### Message

- Om de message links of rechts te zetten, moeten we nog weten wat de huidige user is.

### NavBar

- Hoef je eigenlijk niks meer te doen, maar let op de `fill="currentColor"` bij de svg's. Handig, niet?

### SearchUser

- Als je in het textfield typt, dan moet je de Contacten kunnen filteren. De DataStore kan hierbij helpen.
- Als je klikt op zo een Contact, dan roep je een functie aan die je krijgt vanuit de props. Het afhandelen is voor een component hoger, de `<GroupDetail>`

### UsersList

- Wat heeft die .map() nodig?

### AddGroup

- Maak de group aan in de submit
- Ga naar de detail view van de nieuwe aangemaakte route

### GroupDetail

- Wat heeft die .map() nodig?
- Implementeer het `<SearchUser>` component. Vang het onUserClick event op en koppel hier de user aan de group

### Messages

- Toont de messages van een group, maar deze komen niet uit de props zoals er daar nu staat. Haal de id van de huidige conversation (group) uit de route en haal hiermee de group op.

## Users

- De AddUser en UserDetail voorzie je volledig zelf.

## Screenshots

### /

`<Conversations>` | `<Empty>`
![home](screenshots/home.png)

---

### /48af215b...

`<Conversations>` | `<Messages>`
![home](screenshots/conversation.png)

---

### /groups

`<Groups>` | `<Empty>`
![home](screenshots/groups.png)

---

### /groups/48af215b...

`<Groups>` | `<GroupDetail>`
![home](screenshots/groups-detail.png)

---

### /addgroup

`<Groups>` | `<AddGroup>`
![home](screenshots/groups-add.png)

---

### /users

`<Users>` | `<Empty>`
![home](screenshots/users.png)

---

### /users/9969c1fc

`<Users>` | `<UserDetail>`
![home](screenshots/users-detail.png)

---

### /adduser

`<Users>` | `<AddUser>`
![home](screenshots/users-add.png)

## Screenshots

### /

`<Conversations>` | `<Empty>`
![home](screenshots/home.png)

---

### /48af215b...

`<Conversations>` | `<Messages>`
![home](screenshots/conversation.png)

---

### /groups

`<Groups>` | `<Empty>`
![home](screenshots/groups.png)

---

### /groups/48af215b...

`<Groups>` | `<GroupDetail>`
![home](screenshots/groups-detail.png)

---

### /addgroup

`<Groups>` | `<AddGroup>`
![home](screenshots/groups-add.png)

---

### /users

`<Users>` | `<Empty>`
![home](screenshots/users.png)

---

### /users/9969c1fc

`<Users>` | `<UserDetail>`
![home](screenshots/users-detail.png)

---

### /adduser

`<Users>` | `<AddUser>`
![home](screenshots/users-add.png)

## Screenshots

### /

`<Conversations>` | `<Empty>`
![home](screenshots/home.png)

---

### /48af215b...

`<Conversations>` | `<Messages>`
![home](screenshots/conversation.png)

---

### /groups

`<Groups>` | `<Empty>`
![home](screenshots/groups.png)

---

### /groups/48af215b...

`<Groups>` | `<GroupDetail>`
![home](screenshots/groups-detail.png)

---

### /addgroup

`<Groups>` | `<AddGroup>`
![home](screenshots/groups-add.png)

---

### /users

`<Users>` | `<Empty>`
![home](screenshots/users.png)

---

### /users/9969c1fc

`<Users>` | `<UserDetail>`
![home](screenshots/users-detail.png)

---

### /adduser

`<Users>` | `<AddUser>`
![home](screenshots/users-add.png)

## Klaar?

- Maak het mogelijk om in de detailview van de user groepen te koppelen aan die user.
- Voorzie een extra -verplichte- waarde bij het aanmaken van een `Group`, de 'creator'. Deze user dan het eerste element van de users array.
- Bij het zoeken naar een user in de GroupDetail, zorg er voor dat je enkel users te zien krijgt die nog niet gekoppeld zijn aan de Group
- Users ontkoppelen van een group. Maar zorg er voor dat je de currentUser niet kan ontkoppelen...
