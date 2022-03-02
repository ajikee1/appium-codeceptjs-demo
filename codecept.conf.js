exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      host: 'localhost',
      port: 4723,
      platform: 'Android',
      restart: true,
      // app: './TrackCalorieCounter.apk',
      desiredCapabilities: {
        automationName: "UiAutomator2",
        appPackage: "com.android.contacts",
        appActivity: "com.android.contacts.activities.PeopleActivity",
        deviceName: "emulator-5554",
        noReset: true,
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'appium_poc'
}