/// <reference types="cypress"/>

import Header from "../pageObjects/Header.js";
import MainPage from "../pageObjects/MainPage.js";
import SolarRadiationPage from "../pageObjects/SolarRadiationPage.js";

const mainPage = new MainPage();
const header = new Header;
const solarRadiationPage = new SolarRadiationPage();

describe('mainPageSpec', () => {

    beforeEach(function () {
        cy.fixture('mainPage').then(data => {
            this.data = data;
        });
        cy.fixture('url').then(url => {
            this.url = url;
        });
        cy.fixture('titles').then(titles => {
            this.titles = titles;
        });

        cy.fixture('solarRadiationPage').then(solarRadiationPage => {
            this.solarRadiationPage = solarRadiationPage;
        });

        cy.visit('/');
    })

    it('AT_001.001 | Main page > Section with search > Verify entered a Zip code into the Search city field', function () {
        mainPage.setSearchInputText(this.data.searchInputText.zipCode);
        mainPage.clickSearchBtn();
        mainPage
            .elements
            .getSearchInput()
            .invoke('val')
            .should('eq', this.data.searchInputText.zipCode);
    });

    it('AT_001.008 | Main page > Section with search > Verify entered a City name into the Search city field', function () {
        mainPage.setSearchInputText(this.data.searchInputText.cityName);
        mainPage.clickSearchBtn();
        mainPage
            .elements
            .getSearchInput()
            .invoke('val')
            .should('eq', this.data.searchInputText.cityName);
    });

    it('AT_005.002 | Main page > Verify the website\'s description', function () {
        mainPage.elements.getPageDescriptionWhiteText().should('have.text', this.data.pageDescriptionWhiteText);
    });

    it('AT_051.002 | API > Testing Home button > Verify that after clicking on the Home link on the API page the user gets redirected to the Home page of the site.', function () {
        mainPage.clickApiLink()
        mainPage.elements
            .getHomePageButton()
            .should('have.text', 'Home')
        mainPage.clickHomePageButton()

        mainPage.elements.getMainPageContent()
            .should('have.text', 'OpenWeather')
    });

    it('AT_045.006 | Main page > Section with 8-day forecast > Verifying the weather forecast for 8 days is displayed in the section', function () {
        mainPage.elements.getForecastDays().should('have.length', this.data.forecastDaysLength);
    });

    it('AT_045.007 | Main page > Section with 8-day forecast > Verifying the first displayed day in the section matches today\'s date', function () {
        const date = new Date().toUTCString().split(' ');
        const correctDate = [];
        correctDate.push(date[0], date[2], date[1]);
        const todaysDate = correctDate.join(' ');

        mainPage.elements.getForecastFirstDay().should('have.text', todaysDate);
    });

    it('AT_001.002 | Main page > Section with search > Search City > On clicking the Search button, Dropdown menu with relevant options appears', function () {
        mainPage.setSearchInputText(this.data.searchInputText.cityName);
        mainPage.clickSearchBtn();
        mainPage.elements
            .getSearchResultsDropdown()
            .should('exist')
            .each($el => {
                cy.wrap($el).should('contain', this.data.searchInputText.cityName)
            })
    });

    it('AT_002.001 | Header > After clicking the logo user is redirected to the home page', function () {
        cy.visit(this.url.partnerPageLink);

        header.clickLogoLink();

        cy.url().should('eq', this.url.mainPageLink);
        mainPage.elements.getMainPageContent().should('have.text', this.data.mainText);
    });

    it('AT_045.001 | Main page > Section with 8-day forecast>See the weather forecast for 8 days', function () {
        mainPage.elements.getForecastDays().should('have.length', this.data.forecastDaysLength);
    });

    it('AT_001.014 | Main page > Section with search > Search City > Verify that entered city is displayed into the dropdown', function () {
        mainPage.elements.getSearchInput().type(this.data.searchInputText1.city);
        mainPage.clickSearchBtn();

        mainPage.elements.getSearchResultsDropdown().contains(this.data.searchInputText1.searchResult).click();
    });

    it('AT_037.001 | Main page [maps] > Verify " OpenStreetMap"(c) link', function () {
        let getRightTopLocation = '[class="leaflet-top leaflet-right"]'
        mainPage.elements.getCopyrightMapLink().should('include.text', this.data.copyright);
        mainPage.elements.getCopyrightMapLink().parents(getRightTopLocation);
    });

    it('AT_037.002 | Main page [maps] > Verify clicking on the copyright sign', function () {
        mainPage.clickCopyrightMapLink();
        cy.url().should('eq', this.url.urlOpenStreetMap);
        cy.title().should('eq', this.titles.copyrightTitle);
    });

    it('AT_055.001 | Main page > Our new product > Solar Radiation API', function () {
        mainPage.elements.getOurNewProductSubHeaderTitle()
            .should('have.text', "new").and('have.css', 'color', this.data.RGB);
        mainPage.clickSolarRadiationLink();

        cy.url().should('eq', this.url.SolarRadiationURL);
        solarRadiationPage.elements.getSolarRadiationPageTitle().should('have.text', this.solarRadiationPage.solareRadiationPageTitle);
    });

    it('AT_005.004 | Main Page > Verify the website name and description', function () {
        mainPage.elements.getMainPageContent().should('have.text', this.data.mainText);
        mainPage.elements.getPageDescriptionWhiteText().should('have.text', this.data.pageDescriptionWhiteText);
    });
    
    it('AT_004.001 | Main page > Verify the temperature can be switched from Imperial to Metric', function () {
        mainPage.elements.getToggleTempretureDefault().should('contain', this.data.tempretureScaleDefault);
        mainPage.elements.getToggleTempreture().should('contain', this.data.tempretureScale);
        mainPage.clickTempretureToggle;
    });
});