/// <reference types="cypress" />

describe('group Ark', () => {

  xit('AT_ 010.004 | Marketplace > Verify all orange links on the page', () => {
    cy.visit('https://openweathermap.org/')  
    cy.get('.daily-container ul.day-list li').first().click()
    cy.get('.daily-container .scrolling-container ul.options-scroller li') 
      .each($el => {
        if($el.hasClass('active')){
          //cy.wrap($el).parent().parent().next().find('.daily-detail-container').should('be.visible')
          cy.wrap($el).parents('.scrolling-container-header').next().find('.daily-detail-container').should('be.visible')
        }else {
          cy.wrap($el).click().parents('.scrolling-container-header').next().find('.daily-detail-container').should('be.visible')
        }       
 })
})
})  
//.then(tmp => {cy.log(tmp)})
//:not(.active)
  /*
  xit('AT_ 010.004 | Marketplace > Verify all orange links on the page', () => {
    cy.pause()
    cy.visit('https://openweathermap.org/')  
    cy.get('#weather-widget').contains('8-day forecast').next().as('ulDayList')
    cy.get('@ulDayList')
    })
      /*
      cy.wrap($ulDayForecast).find('li')
        .each($el => {
          cy.wrap($el).click().parent().next().then(elm => {
            cy.log(elm)
          })
        })
      */
      /*
      .then(el => {
        cy.log(el)
      })
      */  
      //.then($el => {
      //cy.wrap($el).find('h3').should('have.text', '8-day forecast').and('be.visible')
      /* 
      cy.wrap($el).get('ul.day-list li').should('have.length', 8)
          .each($li => {
            //const par = cy.wrap($li).parents('.daily-container')
            //cy.log(par)
            cy.wrap($li).click({force: true})
            //cy.log($el)
            //cy.pause()
            //cy.wrap($el).get('div.scrolling-container').should(be.visible)
          }) 
      */
    
 /*
xit('AT_018.004 | Support > Drop down menu. Check visible link and verify URL', () => {
  const $supportMenu = [['FAQ', '/faq'], ['How to start', '/appid'], ['Ask a question','/questions']]
  cy.visit('https://openweathermap.org/')
  cy.get('#desktop-menu #support-dropdown').parent()
      .find('a').should('have.length', $supportMenu.length).each(($el, $i) => {
          let $parentLi = $el.parent().parent().parent()
          cy.wrap($parentLi).get('#support-dropdown').click().parent()
              .contains($supportMenu[$i][0]).should('be.visible')
              .invoke('removeAttr', 'target').click()
          cy.url().should('include', $supportMenu[$i][1])
          // cy.go('back')
      })
  })

  it('AT_008.006 | Main menu > Guide > Verify The text "Weather data in a fast and easy-to-use way" is displayed.', () => {
    cy.visit('https://openweathermap.org/');
    cy.get('a[href="/guide"]').contains("Guide").click();
    cy.get('.wrapper').should('be.visible')
    cy.get('div[class="col-sm-12"]').contains('Weather data in a fast and easy-to-use way').should('be.visible')
  })
    /*
    cy.wrap($el).request(el.prop('href')).should(resp => {
          expect(resp.status).to.eq(200)
        })
    */
    /*
    cy.request(el.prop('href')).should(resp => {
      expect(resp.status).to.eq(200)
    })
    */

  //cy.get('#desktop-menu #support-dropdown-menu').invoke('show')
    //.first().invoke('removeAttr', 'target').click()
    //.each($link => {
      //cy.get('#support-dropdown-menu').invoke('show')
     //cy.wrap($link).find('a').click()
    //})
 

         //ul + .scrolling-container
        
        /*
        cy.request(el.prop('href')).should(resp => {
          expect(resp.status).to.eq(200)
          //expect(resp.redirectedToUrl).to.eq('http://localhost:8082/unauthorized')
        */
