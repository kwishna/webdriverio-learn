const {Given, When, Then} = require('cucumber')

Given("the user navigates to '(\w+)' url", (url)=> {
    browser.url(url);
});

Then("verifies search box is present", () => {
    expect($("[name='q']")).toBePresent();
});

Then("verifies logo is visible", () => {
    expect($("img#hplogo")).toBeVisible();
});

When("the user enters '(\w+)' in seach box", (keyword) => {
    $("[name='q']").setValue(keyword);
});

When("clicks on search button", () => {
    $$("[name='btnK']")[2].click();
});

Then("the search results should be displayed", () => {
    $("div.rc").waitForExist({ timeout: 10000 });
    expect($("div.rc")).toBeVisible();
});

When("the clicks on '(\w+)' link", (num) => {
    const i = Integer.parseInt(num.replace(/[^0-9.]/g, ""));
    
})