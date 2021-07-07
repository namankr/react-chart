# How to automate GooglePlay store app using Appium for Demo purpose only

Prerequisites :
 - Appium should installed
 - Android sdk should installed
 - Android home path should set

Following things will be done in this test code

- How to create maven project and other dependencies
- How to get the playstore package name and activity name
- How to search app
- How to scroll to the specific text
- How to scroll to the specific element

How to get the current activity and package name

- adb shell dumpsys window windows | grep -E 'mCurrentFocus|mFocusedApp'
