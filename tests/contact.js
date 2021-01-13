'use strict'

module.exports = {
  'step one: test contact form': function (browser) {
    browser
      .url(browser.launchUrl + '/contact')
      .waitForElementVisible('body', 1000)
      .assert.title('nuxt-nightwatch-e2e-test')
      .assert.containsText('h1', 'CONTACT US')
      .assert.containsText('h3', 'Fill out the form below to learn more!')
      .assert.visible('input[type=text][name=first_name]')
      .assert.visible('input[type=text][name=last_name]')
      .assert.visible('input[type=email][name=email]')
      .assert.visible('textarea[name=comments]')
  },
  'step two: populate fields' : function (browser) {
    browser
      .setValue('input[type=text][name=first_name]', 'John')
      .setValue('input[type=text][name=last_name]', 'Doe')
      .setValue('input[type=email][name=email]', 'johndoe@gmail.com')
      .setValue('textarea[name=comments]', 'Ipsum Lorem')
  },
  'step three: click submit' : function (browser) {
    browser
      .click('input[type=submit]')
      .pause(1000)
      .end()
  }
}
