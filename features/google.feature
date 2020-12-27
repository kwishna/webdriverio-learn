Feature: Verify Google Search

    Scenario: Perform Google Search
    
    When the user navigates to 'https://google.co.in/' url
    Then verifies search box is present
    And verifies logo is visible
    When the user enters 'Peaceful World' in seach box
    And clicks on search button
    Then the search results should be displayed
    When the clicks on '1st' link
    Then the user should be navigated to non-google page