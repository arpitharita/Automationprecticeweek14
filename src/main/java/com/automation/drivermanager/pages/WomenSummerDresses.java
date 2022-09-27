package com.automation.drivermanager.pages;

import com.automation.drivermanager.utilities.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class WomenSummerDresses extends Utility {
    private static final Logger log = LogManager.getLogger(WomenSummerDresses.class.getName());

    public WomenSummerDresses() {
        PageFactory.initElements(driver, this);
    }


    @CacheLookup
    @FindBy(xpath = "//a[@title='Women']")
    WebElement womantab;

    @CacheLookup
    @FindBy(xpath = "//div[@id='block_top_menu']/ul[1]/li[1]/ul[1]/li[2]/ul[1]/li[3]/a[1]")
    WebElement clicksummerdress;

    @CacheLookup
    @FindBy(xpath = "//div[@class='layered_slider_container']/div[1]/a[2]")
    WebElement sliderclick;

    public void ClickWomanTab()
    {
        mouseHoverToElement(womantab);
    }
    public void ClickOnSummer()
    {
        clickOnElement(clicksummerdress);
    }

    public void changePrice()
    {

        Actions action =new Actions(driver);
        action.dragAndDropBy(sliderclick,0,70).perform();
    }
}
