************************************************************************************************
##### Application :
Modus Create -- Budgeting App application.

************************************************************************************************

Open e2e Folder 


************************************************************************************************
#### Description:
This is a simple budget management application.It’s a budgeting app built with React, Redux, React Router 4 and  Webpack It tracks inflow and outflow, shows remaining budget, and interesting reports with charts. As such, it offers more features than the usual Todo App.It tracks inflow and outflow, shows remaining budget, and interesting reports with charts
Budgeting app is a showcase project that demonstrates important decisions in architecture and development of a modern React application.

************************************************************************************************
#### Browser Used ====== Chrome 


************************************************************************************************


## Application Parts : 

### 1.Budget :
where you can add Expenses and Your Income  according to Specific Category and see them under Budget Table .It Also SHows Total Income -- Total Inflow -- Total OutFLow and Working Balance 

### 2.Reports: 
In this you can see Graphical represntation of Reports it has two parts one is InFLow and OutFlow  oher is Speding 

************************************************************************************************
## Test Plan


************************************************************************************************

### Scope
The Test plan consists of test scenarios that will cover functional or User-based testing which means tests are written to simulate user actions on Budgeting Sample Application. Unit testing is Out of Scope.

************************************************************************************************
###  Stack
Node -- Selenium Standlone Service -- WebDriver IO -- Mocha -- Chai -- Allure -- Dot --ChromeDriver -- Allure CommandLine


************************************************************************************************

### Test Scenarios 


##### Budget Page : ********************** Passed  **********************
    
1.      Navigate to Budget page
2.      Check if Budget Table is Displayed
3.      Check if CashFlow Container is Displayed

##### Add Income : ********************** Passed  **********************
    
1.      Navigate to Budget page
2.      Add Income Type
3.      Check if Working Balance and Total inflow amount is updated
4.      Navigate to Reports page
5.      Check if Total Inflow amount is increased and updated in Inflow vs Outflow Chart.

##### Add Expense : ********************** Passed  **********************
    
1.      Navigate to Budget page
2.      Add Expense (Misc) Type
3.      Check if Working Balance and Total Outflow amount is updated
4.      Navigate to Reports page
5.      Check if Total Outflow amount is increased and updated in Inflow vs Outflow Chart.
6.      Navigate to Spending Chart
7.      Check if Misc Amount in updated Chart

##### Add Switch To Tab Report and Back to Budget   & Click On Star : ********************** Failed Test  **********************
    
1.      Navigate to Budget page
2.       Click on Star( Cause of Shadow Root(closed) couldnt click on it ...Support Issues with Shadow Root(closed) with Webdriver IO)
3.      CLick on Report Page
4.      Click on Budget Page Button 
5.      Click on Star (Link Should Open in New Tab )

#####  Click On Fork : ********************** Failed Test  **********************
    
1.      Navigate to Budget page
2.      Click on Fork( Cause of Shadow Root(closed) couldnt click on it ...Support Issues with Shadow Root(closed) with Webdriver IO)
3.      Click on Budget Button 
4.      Click on Fork (Link Should Open in New Tab )

##### Add Alphanumeric Value: ********************** Failed Test  **********************
1.      Navigate to Budget page
2.      Add Expense (Misc) Type with Alphanumeric Value : d0
3.      Check e21 is not added to amount .

##### Add Income Without Value: ********************** Passed  **********************
1.      Navigate to Budget page
2.      Select Category
3.      Add Description
4.      Click on Add Without Value .

##### Add Income Without Description: ********************** Passed  **********************
1.      Navigate to Budget page
2.      Select Category
3.      Add Value
4.      Click on Add Without Description .

##### Add Income Without Value and Description: ********************** Passed  **********************
1.      Navigate to Budget page
2.      Select Category
3.      Click on Add Without Value and Description.

************************************************************************************************

#### Failed Test Scenarios

1. Add Switch To Tab Report and Back to Budget   & Click On Star
(In this Scenario When the User switch between tabs and click on star .the star link should open in a new tab.Also it show should show star icon with it.But it Fails and opens the Link in same tab.I used title Verification to Fail this Test)

2. Click On Fork
(In this Scenario when the user switch Between tabs and click on Fork .the star link should open in a new tab.Also it show should show Fork icon with it.But it Fails and opens the Link in same tab.I used title Verification to Fail this Test )

3. Add Alphanumeric Value
(In this Scenario The User is adding alphanumeric value (d0 which is 1000) and clicks on add . But this Fails because the add button doesnt get clicked the Value doesnt added and updated )

************************************************************************************************
### Page Object Design Pattern
 A Page Object simply models these as objects within the test code. 

************************************************************************************************
 page object files
#### budget.page.js
#### report.page.js

************************************************************************************************

Test Files
#### test.js

************************************************************************************************

Error ScreenShots
#### Under errorshot Folder

************************************************************************************************

Reports
#### Under allure-reports Folder
#### index.html File
#### Open with FireFox

************************************************************************************************

##### Installation and Running 
 1. Clone the reposotiry to your local machine. (e2e Folder)
 2. Install Node (https://nodejs.org/en/)
 3. Start the command line interface and Open the Cloned directory in the command line 
 4. Run ************ npm install**************** 
 5. Run ************ npm run test*************** 
 

************************************************************************************************

##### Report generation
1. Type npx wdio and run under command Line
2. then type npx allure generate
3. Allure-reports and Allure-results Folders would be Generated .
4. Open Allure-Reports Folder and Open index.html file in Firefox( with Chrome its not gonna Show report(Support Issue ))
  

************************************************************************************************
