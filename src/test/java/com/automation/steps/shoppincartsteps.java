package com.automation.steps;

import com.automation.drivermanager.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class shoppincartsteps {
    @Given("^I am on Homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I click on woman tab$")
    public void iClickOnWomanTab() {
        new HomePage().ClickWomanTab();
    }

    @And("^I click on product$")
    public void iClickOnProduct() {
        new HomePage().ClickProductFadded();

    }

    @And("^I click on add to cart$")
    public void iClickOnAddToCart()
    {
        new HomePage().ClickAddButton();

    }
    @And("^I click on delete button$")
    public void iClickOnDeleteButton() {

        new HomePage().ClickOnDelete();
    }
    @And("^I proceed to checkout$")
    public void iProceedToCheckout() {

        new HomePage().ClickOnProceed();
    }

    @Then("^I can see shopping cart is empty$")
    public void iCanSeeShoppingCartIsEmpty() {
        String verifyText = new HomePage().VerifyToMessage();
        Assert.assertEquals(verifyText, "Your shopping cart is empty.");
    }
}
