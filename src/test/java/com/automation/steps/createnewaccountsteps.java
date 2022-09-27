package com.automation.steps;

import com.automation.drivermanager.pages.CreateAccountPage;
import com.automation.drivermanager.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class createnewaccountsteps {
    @Given("^I am on Home Page$")
    public void iAmOnHomePage() {
    }

    @When("^I click on sign in link$")
    public void iClickOnSignInLink() {
        new HomePage().SignInClick();
    }

    @And("^I Enter email \"([^\"]*)\"$")
    public void iEnterEmail(String email)
    {
        new CreateAccountPage().EnterEmailId(email);
    }

    @And("^I click on create an account button$")
    public void iClickOnCreateAnAccountButton() {
        new CreateAccountPage().ClickOnCreateAcc();
    }

    @And("^I enter first name \"([^\"]*)\"$")
    public void iEnterFirstName(String fName)
    {
        new CreateAccountPage().EnterFirstName(fName);
    }

    @And("^I enter last name \"([^\"]*)\"$")
    public void iEnterLastName(String lName)
    {
        new CreateAccountPage().EnterLastName(lName);
    }

    @And("^I enter register password \"([^\"]*)\"$")
    public void iEnterRegisterPassword(String regpass)
    {
        new CreateAccountPage().EnterPassword(regpass);
    }

    @And("^I enter address \"([^\"]*)\"$")
    public void iEnterAddress(String add)
    {
        new CreateAccountPage().EnterAddress(add);
    }

    @And("^I enter city \"([^\"]*)\"$")
    public void iEnterCity(String city)
    {
        new CreateAccountPage().EnterCity(city);
    }

    @And("^I select state \"([^\"]*)\"$")
    public void iSelectState(String Cstate)
    {
        new CreateAccountPage().SelectState(Cstate);
    }

    @And("^I enter postal code \"([^\"]*)\"$")
    public void iEnterPostalCode(String Pcode)
    {
        new CreateAccountPage().EnterPostalCode(Pcode);
    }

    @And("^I select country \"([^\"]*)\"$")
    public void iSelectCountry(String country)
    {
        new CreateAccountPage().SelectCountry(country);
    }

    @And("^I enter phone number \"([^\"]*)\"$")
    public void iEnterPhoneNumber(String pNum)
    {
        new CreateAccountPage().EnterMobileNumber(pNum);
    }

    @Then("^I click on register button$")
    public void iClickOnRegisterButton() {

        new CreateAccountPage().ClickOnRegister();
    }

    @Then("^I verify account name \"([^\"]*)\"$")
    public void iVerifyAccountName(String exResult)
    {
        Assert.assertEquals(exResult,new CreateAccountPage().VerifyAccountName());
    }
}
