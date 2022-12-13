
describe('Open Battery Pack detail page', () => {

    before(async () => {

        const { exec } = require("child_process");
        exec(`adb -s emulator-5554 shell am broadcast -a com.festool.apps.powertools.debug.COMMAND -e skip "login,test.uk@mobile.com,Festool21\!"`, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        })

    })

    it('Open Battery Pack detail page', async () => {

        const allowBtn = await $('//android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Button[1][@text="Allow"]')
        await allowBtn.click()
        await driver.pause(1000)
        await allowBtn.click()
        const mainPageTitle = await $('//android.view.View/android.view.View[1]/android.view.View[1]/android.widget.TextView[@text="My power tools"]')
        const mainPageTitleText = ("My power tools")
        await expect(mainPageTitle).toHaveText(mainPageTitleText)


        const batteryPackBtn = await $('//android.view.View/android.view.View[1]/android.view.View[2]/android.view.View[1]/android.view.View/android.view.View[2]/android.widget.TextView[@text="Battery packs"]')
        await batteryPackBtn.click()

        const batteryPackName = await $('//android.view.View/android.view.View[1]/android.view.View[2]/android.view.View[2]/android.widget.ScrollView/android.view.View/android.widget.TextView[3][@text="BP 18 LI6,2 ASI"]')
        const batteryPackNameText = ("BP 18 LI6,2 ASI")
        await expect(batteryPackName).toHaveText(batteryPackNameText)

        const batteryPackOpenPDP = await $('//android.view.View/android.view.View[1]/android.view.View[2]/android.view.View[2]/android.widget.ScrollView/android.view.View/android.widget.TextView[2][@text="Festool Product"]')
        await batteryPackOpenPDP.click()
        const connectNotif = await $('//android.view.View/android.view.View[3]/android.view.View/android.widget.TextView[1][@text="Connect your power tool"]')
        const connectNotifText = ("Connect your power tool")
        await expect(connectNotif).toHaveText(connectNotifText)




            await driver.pause(5000)
    });

})