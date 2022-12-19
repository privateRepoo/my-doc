# Folder Contents

## public

- This is where website icons, robots, sitemap and the index.html are located

- All meta, font-link add to index.html. You can add different heads or titles on different pages later using a component/package

## scripts

- sitemap-builder
- sitemap-routes
- A sitemap is a file where you provide information about the pages, videos, and other files on your site, and the relationships between them. Search engines like Google read this file to crawl your site more efficiently.

## src

- where all code end up

  ### api

  - where all crud operations are located
  - mostly calling a global function to handle requests (http)

  ### components

  - components that can be called again to other pages

  ### configs

  - mostly constant to be called so as to not change every page when some value is changed

  ### contexts

  - all React Contexts, most context here are global such as AuthContext where login info and status are stored

  ### enhancers

  - might be for with the 'with' keyword. Basically call this with a Component as an argument. Then the Component gets some new properties/props from the 'with function'

  ### factories

  - a design pattern called 'Factory Method Pattern' (might be unusable to me)

  ### routes

  - every single routing protocol of the website.
  - each of this is compiled on a single index file.
  - routes are rendered using renderRoutes() function from utils.

  ### styles

  - mixture of global and local styles. The codebase is pretty old so a lot of people have different ideas of code splitting.

  ### utils

  - functions that can be called again by different components, notably renderRoutes, http and cookies.

  ### views

  - this is where all pages are located. Folders are arranged based on routing
  - some folders that should be in the views folder are inside the component folder because different devs have different ideas of code splitting and the codebase is pretty dated.

## App.js

- parent folder, where all global contexts main renderRoutes are located
