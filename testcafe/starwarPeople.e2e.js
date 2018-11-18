/* eslint-disable */
import {Selector, t} from 'testcafe'

import Page from './page'
import config from './testcafeConfig'

const page = new Page()

fixture`Star War People E2E Test`.page`${config.baseUrl}`

test('Home page should display a list of star war people', async t => {
  await t
    .expect(page.headerSection.brandLink.innerText)
    .eql('Star War Catalog')
    .expect(page.peoplePage.heading.innerText)
    .eql('Star War People')
    .click(page.peoplePage.tableRow.withText('Luke Skywalker'))
    .expect(page.personPage.heading.innerText)
    .eql('Person details')
    .expect(page.personPage.name.innerText)
    .eql('Luke Skywalker')
    .expect(page.personPage.height.innerText)
    .eql('172')
    .expect(page.personPage.birthYear.innerText)
    .eql('19BBY')
    .expect(page.personPage.gender.innerText)
    .eql('male')
    .expect(page.personPage.films.innerText)
    .eql('The Empire Strikes Back, Revenge of the Sith, Return of the Jedi, A New Hope, The Force Awakens')
})

test('Can navigate next and previous from people page', async t => {
  await t
    .click(page.peoplePage.nextLink)
    .expect(page.peoplePage.heading.innerText)
    .eql('Star War People')
    .click(page.peoplePage.nextLink)
    .expect(page.peoplePage.heading.innerText)
    .eql('Star War People')
    .click(page.peoplePage.previousLink)
    .expect(page.peoplePage.heading.innerText)
    .eql('Star War People')
    .click(page.peoplePage.previousLink)
    .expect(page.peoplePage.heading.innerText)
    .eql('Star War People')
})

test('Should show person detail page with a valid url', async () => {
  await t
    .navigateTo(`${config.baseUrl}/people/1`)
    .expect(page.personPage.heading.innerText)
    .eql('Person details')
    .expect(page.personPage.name.innerText)
    .eql('Luke Skywalker')
    .expect(page.personPage.height.innerText)
    .eql('172')
    .expect(page.personPage.birthYear.innerText)
    .eql('19BBY')
    .expect(page.personPage.gender.innerText)
    .eql('male')
    .expect(page.personPage.films.innerText)
    .eql('The Empire Strikes Back, Revenge of the Sith, Return of the Jedi, A New Hope, The Force Awakens')
})

test('Should show about page on click the About link', async () => {
  await t
    .click(page.headerSection.aboutLink)
    .expect(page.aboutPage.heading.innerText)
    .eql('About Star War People')
    .expect(page.aboutPage.leadParagraph.innerText)
    .eql('Simple app to view Star War People and the Films they are in')
    .expect(page.aboutPage.versionText.innerText)
    .eql('Version 1.0.0')
})

test('Should show not found message via an invalid url', async () => {
  await t
    .navigateTo(`${config.baseUrl}/abc`)
    .expect(page.notFoundPage.titleDisplay.innerText)
    .eql('Sorry, that page does not exist')
})
