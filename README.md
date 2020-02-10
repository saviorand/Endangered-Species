# Endangered Species

 A test exercise from BIM meant to retrieve endangered species and mammal endangered species from IUCN Red Book database via API

## Usage

To run the app on the localhost: 

    yarn start

To prepare a production-ready, optimized build of the app:

    npm run build

## Technologies

Made with React and Tailwind CSS.
Simple in-browser window.fetch interface is used to retrieve data.

## Design Choices and potential enhancements

Because the API token requested from IUCN is still pending (it seems that they take a while to respond to requests) I have used test responses provided in API documentation. Number of entries for species and measures is also limited to 2 (two responses for each call) for testing purposes. For actual app, with number of entries amounting to thousands, a delay will need to be made between API calls to not over-use it.

Since only Europe is available in test regions, Europe is used for now. A random region is still retrieved - it will be integrated with the app once production API token is provided.


## Made with

    IUCN 2019. IUCN Red List of Threatened Species. Version 2019-3 <www.iucnredlist.org>