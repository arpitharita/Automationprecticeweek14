package com.automation.steps;

import com.automation.drivermanager.pages.WomenSummerDresses;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class summerdressessteps {
    @When("^I mousehover on woman tab$")
    public void iMousehoverOnWomanTab() {

        new WomenSummerDresses().ClickWomanTab();
    }

    @And("^I click on summer dresses$")
    public void iClickOnSummerDresses() {

        new WomenSummerDresses().ClickOnSummer();
    }
    @Then("^I verify summer dresses page$")
    public void iVerifySummerDressesPage() {
    }

    @And("^I price change$")
    public void iPriceChange() {
        new WomenSummerDresses().changePrice();
    }
}
