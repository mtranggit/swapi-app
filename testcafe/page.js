/* eslint-disable */
import {Selector, t} from 'testcafe'

class Header {
  constructor() {
    this.brandLink = Selector('[data-testid=brand]')
    this.homeLink = Selector('[data-testid=home]')
    this.peopleLink = Selector('[data-testid=list]')
    this.aboutLink = Selector('[data-testid=about]')
  }
}

class About {
  constructor() {
    this.heading = Selector('.display-4')
    this.leadParagraph = Selector('.lead')
    this.versionText = Selector('.text-secondary')
  }
}

class Person {
  constructor() {
    this.heading = Selector('.card-header')
    this.name = Selector('.card-title')
    this.height = Selector('#height')
    this.birthYear = Selector('#birthYear')
    this.gender = Selector('#gender')
    this.films = Selector('#films')
    this.backButton = Selector('a.btn.btn-primary')
  }
}

class People {
  constructor() {
    this.heading = Selector('h4')
    this.tableRow = Selector('table tr')
    this.previousLink = Selector('[data-testid=previous]')
    this.nextLink = Selector('[data-testid=next]')
  }
}

class NotFound {
  constructor() {
    this.titleDisplay = Selector('h4')
  }
}

export default class Page {
  constructor() {
    this.aboutPage = new About()
    this.headerSection = new Header()
    this.peoplePage = new People()
    this.personPage = new Person()
    this.notFoundPage = new NotFound()
  }
}
