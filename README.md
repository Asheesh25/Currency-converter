# Salesforce DX Project: Next Steps

Now that you’ve created a Salesforce DX project, what’s next? Here are some documentation resources to get you started.

## How Do You Plan to Deploy Your Changes?

Do you want to deploy a set of changes, or create a self-contained application? Choose a [development model](https://developer.salesforce.com/tools/vscode/en/user-guide/development-models).

## Configure Your Salesforce DX Project

The `sfdx-project.json` file contains useful configuration information for your project. See [Salesforce DX Project Configuration](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm) in the _Salesforce DX Developer Guide_ for details about this file.

## Read All About It

- [Salesforce Extensions Documentation](https://developer.salesforce.com/tools/vscode/)
- [Salesforce CLI Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm)
- [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm)
- [Salesforce CLI Command Reference](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm)

Here are some suggestions for extending its functionality:

1. Dynamic Exchange Rate Fetching
Integrate an API like ExchangeRate-API or any other free currency exchange API.
Fetch real-time currency rates dynamically when the "Convert" button is clicked.
Show a loading spinner while fetching the data.

2. Conversion History
Add a table or a list below the card to display the last 5-10 conversion results.
Store the history in local storage so it persists when the user refreshes the page.

3. Reverse Conversion
Add a "Swap" button to interchange the "From" and "To" currencies.

4. Validation and Error Handling
Validate the input fields to ensure a valid numeric value is entered.
Handle errors gracefully when the API call fails or if an unsupported currency is selected.
Display error messages using lightning-toast.

5. Theming and Styling
Enhance the app's UI using CSS or SLDS (Salesforce Lightning Design System).
Add icons for currencies (e.g., flags or currency symbols).

6. Currency Filtering
Add a search feature in the picklists to quickly filter currencies.

7. Support for Multiple Currencies
Allow users to convert to and from multiple currencies simultaneously.
Display the results in a table format.

8. Save Favorite Conversions
Add a button to mark specific "From-To" currency combinations as favorites.
Store these combinations in local storage and let users quickly select them.

9. Date-Based Conversion
Allow users to select a past date to fetch historical exchange rates (if supported by your API).

10. Accessibility Improvements
Ensure the app is accessible by testing it with a screen reader.
Implement keyboard navigation for the app.

11. Unit Tests
Write Jest test cases for your components.
Test various scenarios such as valid/invalid inputs, API errors, and UI updates.

12. Deploy and Share
Deploy the app to a Salesforce org and share it with others.
Optionally, integrate the app into a Salesforce record page or utility bar.
Would you like guidance on implementing any of these features?