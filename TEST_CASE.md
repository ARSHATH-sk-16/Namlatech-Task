# TEST CASE DOCUMENT

## 1. Project Information

- **Project Name:** Hotel Management Application
- **Frontend:** React.js
- **State Management:** Redux
- **Languages:** JavaScript, HTML, CSS
- **Testing Type:** Manual Testing

---

## 2. Test Cases

### Module 1: Application Loading

| Test Case ID | Test Scenario | Test Steps | Expected Result |
|---|---|---|---|
| TC001 | Open application | Launch the application in browser | Home page should load successfully |
| TC002 | Check page title | Open the application | Correct page title should be displayed |
| TC003 | Check hotel display | Navigate to home page | All available hotels should be displayed |
| TC004 | Check hotel images | View hotel cards | Hotel images should load correctly |

### Module 2: Search Functionality

| Test Case ID | Test Scenario | Test Steps | Expected Result |
|---|---|---|---|
| TC005 | Search existing hotel | Enter an existing hotel name | Matching hotel should be displayed |
| TC006 | Search unavailable hotel | Enter a nonexistent hotel name | No results message should appear |
| TC007 | Search with empty input | Clear the search field | All hotels should be displayed |
| TC008 | Search with partial name | Enter part of a hotel name | Matching hotels should be displayed |
| TC009 | Search with uppercase letters | Enter hotel name in uppercase | Matching results should be displayed if search is case-insensitive |

### Module 3: Price Filter

| Test Case ID | Test Scenario | Test Steps | Expected Result |
|---|---|---|---|
| TC010 | Apply minimum price | Select minimum price | Hotels matching the price criteria should appear |
| TC011 | Apply maximum price | Select maximum price | Hotels matching the price criteria should appear |
| TC012 | Apply price range | Select minimum and maximum prices | Only hotels within the range should appear |
| TC013 | Reset price filter | Clear or reset price range | All eligible hotels should appear |
| TC014 | Apply invalid price range | Set minimum price higher than maximum price | Application should handle the invalid range appropriately |

### Module 4: Add Hotel Functionality

| Test Case ID | Test Scenario | Test Steps | Expected Result |
|---|---|---|---|
| TC015 | Add hotel with valid details | Enter all required details and submit | New hotel should be added successfully |
| TC016 | Add hotel with empty fields | Submit the form without entering details | Required field validation should appear |
| TC017 | Add hotel with invalid price | Enter an invalid price | Invalid price should be rejected |
| TC018 | Add hotel with valid image | Enter a valid image URL | Hotel image should display correctly |
| TC019 | Verify add success message | Add a new hotel | Add-specific success message should appear |
| TC020 | Verify hotel in list | Add a new hotel | Newly added hotel should appear in the list |

### Module 5: Edit Hotel Functionality

| Test Case ID | Test Scenario | Test Steps | Expected Result |
|---|---|---|---|
| TC021 | Edit hotel details | Click Edit and modify hotel details | Hotel information should be updated |
| TC022 | Edit hotel name | Change the existing hotel name | Updated name should appear |
| TC023 | Edit hotel price | Change the existing hotel price | Updated price should appear |
| TC024 | Edit with empty fields | Clear required fields and submit | Validation should prevent invalid updates |
| TC025 | Verify update success message | Successfully update a hotel | Update-specific success message should appear |
| TC026 | Verify updated information | View the edited hotel | Latest information should be displayed |

### Module 6: Delete Hotel Functionality

| Test Case ID | Test Scenario | Test Steps | Expected Result |
|---|---|---|---|
| TC027 | Delete existing hotel | Click Delete for a hotel | Selected hotel should be deleted |
| TC028 | Verify deleted hotel | Search for the deleted hotel | Deleted hotel should not appear |
| TC029 | Cancel deletion | Cancel the delete confirmation | Hotel should remain unchanged |
| TC030 | Verify delete success message | Successfully delete a hotel | Delete-specific success message should appear |

### Module 7: Success Messages

| Test Case ID | Test Scenario | Test Steps | Expected Result |
|---|---|---|---|
| TC031 | Add success message | Add a hotel | Add hotel success message should appear |
| TC032 | Edit success message | Update a hotel | Update hotel success message should appear |
| TC033 | Delete success message | Delete a hotel | Delete hotel success message should appear |
| TC034 | Verify message consistency | Perform different CRUD operations | Each operation should display its corresponding message |

### Module 8: Responsive Design and UI

| Test Case ID | Test Scenario | Test Steps | Expected Result |
|---|---|---|---|
| TC035 | Desktop layout | Open application on desktop | Layout should display correctly |
| TC036 | Tablet layout | Open application on tablet-sized screen | Layout should adjust properly |
| TC037 | Mobile layout | Open application on mobile-sized screen | Content should fit the screen |
| TC038 | Check buttons | Click application buttons | Buttons should respond correctly |
| TC039 | Check form layout | Open hotel form | Form fields should be properly aligned |

---

## 3. Testing Methodology

The application is tested using manual testing techniques.

The following testing approaches are covered:

1. Functional Testing
2. Positive Testing
3. Negative Testing
4. Input Validation Testing
5. CRUD Operation Testing
6. Search and Filter Testing
7. UI and Responsive Testing

## 4. Test Execution Status

Each test case should be executed manually and its actual result should be recorded.

| Status | Description |
|---|---|
| Pass | Actual result matches expected result |
| Fail | Actual result does not match expected result |
| Not Executed | Test case has not been tested yet |

## 5. Conclusion

The test cases listed in this document cover the major functionalities of the Hotel Management Application.

The purpose of testing is to verify that hotel listing, searching, price filtering, adding, editing, deleting, input validation, success messages, and responsive layouts work as expected.

Test execution results should be updated after performing each test case.

---

**Testing Type:** Manual Testing