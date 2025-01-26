# Bookstore UI

## Application structure/architecture

#### First commit: d149a12 (Sun Jan 26 19:02:49 2025)

#### Last commit: 04b9377 (Sun Jan 26 22:10:07 2025)

#### Duration: 3h 8m

Implemented the Core Features, Responsive design, basic error handling and the Bonus Feature (limited stock)

- components
  - BooksPage
  - MainView
  - NavigationBar
  - ShoppingCart
  - Sidebar
  - UserAvatar
  - UserProfile
- data
- providers
- types

App's main components:

- NavigationBar
- MainView
  - BooksPage
  - UserProfile
- Sidebar
  - ShoppingCart

## Reasoning behind key technical choices (if applicable)

- Used Vite as build tooling due to its speed (but also because CRA is deprecated)
- Used React Context to share data between components (since the app wasn't complicated, state managers such as Redux were not needed)
- Used Material-UI to take advantage of an existing component library

## A summary of features that were not implemented, trade-offs made, and how you would approach them with more time or in a production environment.

### 1. Missing unit and integration tests

I've prefered not to use TDD and left the unit/integration tests at the end, but I ran out of time (3h) and didn't got the chance to write them.

### 2. Error handling not very robust

Error handling is added in the project but there are more cases than can be treated so, currently, this is not very robust.

### Other considerations having more time

1. Project structure can be improved.
2. Limited stock feature should be better tested and probably refactored.
3. Browser alerts should be replaced with custom alerts.
4. UI/UX can be improved.
5. (Optional) Integration with real backend (using REST API or GraphQL)
