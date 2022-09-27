$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/createnewaccount.feature");
formatter.feature({
  "line": 1,
  "name": "Create Account Page Test",
  "description": "",
  "id": "create-account-page-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "verifyThatUserShouldCreateAccountSuccessfully",
  "description": "",
  "id": "create-account-page-test;verifythatusershouldcreateaccountsuccessfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I Enter email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on create an account button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter first name \"\u003cfirstname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter last name \"\u003clastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter register password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter address \"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter city \"\u003ccity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select state \"\u003cstate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter postal code \"\u003cpostalCode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select country \"\u003ccountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter phone number \"\u003cphoneNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on register button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I verify account name \"Haritapatel\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "create-account-page-test;verifythatusershouldcreateaccountsuccessfully;",
  "rows": [
    {
      "cells": [
        "email",
        "firstname",
        "lastname",
        "password",
        "address",
        "city",
        "state",
        "postalcode",
        "country",
        "phonenumber"
      ],
      "line": 20,
      "id": "create-account-page-test;verifythatusershouldcreateaccountsuccessfully;;1"
    },
    {
      "cells": [
        "abcdef@gmail.com",
        "abcd",
        "xyz",
        "123456@",
        "Kingstreet",
        "Toronto",
        "Ontario",
        "M9V3T1",
        "United States",
        "+12365458456"
      ],
      "line": 21,
      "id": "create-account-page-test;verifythatusershouldcreateaccountsuccessfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 14438101500,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "verifyThatUserShouldCreateAccountSuccessfully",
  "description": "",
  "id": "create-account-page-test;verifythatusershouldcreateaccountsuccessfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I Enter email \"abcdef@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on create an account button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter first name \"abcd\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter last name \"xyz\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter register password \"123456@\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter address \"Kingstreet\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter city \"Toronto\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select state \"Ontario\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter postal code \"\u003cpostalCode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select country \"United States\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter phone number \"\u003cphoneNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on register button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I verify account name \"Haritapatel\"",
  "keyword": "Then "
});
formatter.match({
  "location": "createnewaccountsteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 69492500,
  "status": "passed"
});
formatter.match({
  "location": "createnewaccountsteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 4219453500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcdef@gmail.com",
      "offset": 15
    }
  ],
  "location": "createnewaccountsteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 107062600,
  "status": "passed"
});
formatter.match({
  "location": "createnewaccountsteps.iClickOnCreateAnAccountButton()"
});
formatter.result({
  "duration": 83747000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd",
      "offset": 20
    }
  ],
  "location": "createnewaccountsteps.iEnterFirstName(String)"
});
formatter.result({
  "duration": 20031427000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027customer_firstname\u0027]\"}\n  (Session info: chrome\u003d105.0.5195.127)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-7KBRRGO\u0027, ip: \u0027192.168.0.115\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [34fd50ef891bfb60afb9cd9cd3f0d012, findElement {using\u003dxpath, value\u003d//input[@id\u003d\u0027customer_firstname\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.127, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\ARPITK~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:51488}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:51488/devtoo..., se:cdpVersion: 105.0.5195.127, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 34fd50ef891bfb60afb9cd9cd3f0d012\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.sendKeys(Unknown Source)\r\n\tat com.automation.drivermanager.utilities.Utility.sendTextToElement(Utility.java:75)\r\n\tat com.automation.drivermanager.pages.CreateAccountPage.EnterFirstName(CreateAccountPage.java:83)\r\n\tat com.automation.steps.createnewaccountsteps.iEnterFirstName(createnewaccountsteps.java:35)\r\n\tat ✽.And I enter first name \"abcd\"(src/test/java/resources/featurefile/createnewaccount.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz",
      "offset": 19
    }
  ],
  "location": "createnewaccountsteps.iEnterLastName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "123456@",
      "offset": 27
    }
  ],
  "location": "createnewaccountsteps.iEnterRegisterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Kingstreet",
      "offset": 17
    }
  ],
  "location": "createnewaccountsteps.iEnterAddress(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Toronto",
      "offset": 14
    }
  ],
  "location": "createnewaccountsteps.iEnterCity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Ontario",
      "offset": 16
    }
  ],
  "location": "createnewaccountsteps.iSelectState(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cpostalCode\u003e",
      "offset": 21
    }
  ],
  "location": "createnewaccountsteps.iEnterPostalCode(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "United States",
      "offset": 18
    }
  ],
  "location": "createnewaccountsteps.iSelectCountry(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cphoneNumber\u003e",
      "offset": 22
    }
  ],
  "location": "createnewaccountsteps.iEnterPhoneNumber(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "createnewaccountsteps.iClickOnRegisterButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Haritapatel",
      "offset": 23
    }
  ],
  "location": "createnewaccountsteps.iVerifyAccountName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 637063600,
  "status": "passed"
});
formatter.uri("src/test/java/resources/featurefile/shoppingcart.feature");
formatter.feature({
  "line": 1,
  "name": "Shopping Cart Functionality",
  "description": "As user I want to add and delete the item",
  "id": "shopping-cart-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9916708700,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "As a user if there is an item already inside my basket",
  "description": "",
  "id": "shopping-cart-functionality;as-a-user-if-there-is-an-item-already-inside-my-basket",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on woman tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on product",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on delete button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I can see shopping cart is empty",
  "keyword": "Then "
});
formatter.match({
  "location": "shoppincartsteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 98300,
  "status": "passed"
});
formatter.match({
  "location": "shoppincartsteps.iClickOnWomanTab()"
});
formatter.result({
  "duration": 9209139000,
  "status": "passed"
});
formatter.match({
  "location": "shoppincartsteps.iClickOnProduct()"
});
formatter.result({
  "duration": 6932850200,
  "status": "passed"
});
formatter.match({
  "location": "shoppincartsteps.iClickOnAddToCart()"
});
formatter.result({
  "duration": 94339600,
  "status": "passed"
});
formatter.match({
  "location": "shoppincartsteps.iProceedToCheckout()"
});
formatter.result({
  "duration": 5165404900,
  "status": "passed"
});
formatter.match({
  "location": "shoppincartsteps.iClickOnDeleteButton()"
});
formatter.result({
  "duration": 76986800,
  "status": "passed"
});
formatter.match({
  "location": "shoppincartsteps.iCanSeeShoppingCartIsEmpty()"
});
formatter.result({
  "duration": 37194400,
  "error_message": "java.lang.AssertionError: expected [Your shopping cart is empty.] but found []\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat com.automation.steps.shoppincartsteps.iCanSeeShoppingCartIsEmpty(shoppincartsteps.java:46)\r\n\tat ✽.Then I can see shopping cart is empty(src/test/java/resources/featurefile/shoppingcart.feature:12)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 447542500,
  "status": "passed"
});
formatter.before({
  "duration": 12787207700,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "As a user I want to select the summer Dresses option from the navigation menu",
  "description": "",
  "id": "shopping-cart-functionality;as-a-user-i-want-to-select-the-summer-dresses-option-from-the-navigation-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I mousehover on woman tab",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click on summer dresses",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I price change",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I verify summer dresses page",
  "keyword": "Then "
});
formatter.match({
  "location": "shoppincartsteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 42700,
  "status": "passed"
});
formatter.match({
  "location": "summerdressessteps.iMousehoverOnWomanTab()"
});
formatter.result({
  "duration": 5171399800,
  "status": "passed"
});
formatter.match({
  "location": "summerdressessteps.iClickOnSummerDresses()"
});
formatter.result({
  "duration": 10127911700,
  "status": "passed"
});
formatter.match({
  "location": "summerdressessteps.iPriceChange()"
});
formatter.result({
  "duration": 5173981700,
  "error_message": "org.openqa.selenium.interactions.MoveTargetOutOfBoundsException: move target out of bounds\n  (Session info: chrome\u003d105.0.5195.127)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-7KBRRGO\u0027, ip: \u0027192.168.0.115\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [c3821f43865c96dda840589f0351792d, actions {actions\u003d[org.openqa.selenium.interactions.Sequence@2418ba04]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.127, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\ARPITK~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:51595}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:51595/devtoo..., se:cdpVersion: 105.0.5195.127, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c3821f43865c96dda840589f0351792d\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:627)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:617)\r\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:573)\r\n\tat com.automation.drivermanager.pages.WomenSummerDresses.changePrice(WomenSummerDresses.java:45)\r\n\tat com.automation.steps.summerdressessteps.iPriceChange(summerdressessteps.java:26)\r\n\tat ✽.And I price change(src/test/java/resources/featurefile/shoppingcart.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "summerdressessteps.iVerifySummerDressesPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 616613800,
  "status": "passed"
});
});