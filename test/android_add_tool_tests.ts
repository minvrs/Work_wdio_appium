
describe('Add and remove a tool', () => {

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
        await driver.pause(3000)
        const allowBtn = await $('//android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Button[1][@text="Allow"]')
        await allowBtn.click()
        await driver.pause(1000)
        await allowBtn.click()

        const bluetoothDisableUnderstoodBtn = await $('//android.view.View/android.view.View[3]/android.widget.TextView[@text="Understood"]')
        await bluetoothDisableUnderstoodBtn.click()

    });

    it('Add a tool', async () => {

        const addFabBtn = $('//android.view.View/android.view.View[1]/android.view.View[3]')
        await addFabBtn.click()

        const bottomSheet = $('//android.view.View/android.view.View[2]/android.widget.TextView[1][@text="Your new power tool"]')
        const bottomSheetText = ("Your new power tool")
        await expect(bottomSheet).toHaveText(bottomSheetText)

        const addBtn = $('//android.view.View/android.view.View[2]/android.view.View[4]/android.widget.TextView[@text="Add"]')
        await addBtn.click()

        const whileUsingBtn = $('//android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Button[1][@text="While using the app"]')
        await whileUsingBtn.click()

        const manualBtn = $('//android.view.View/android.widget.Button[2]')
        await manualBtn.click()

        const enterPartNr = $('//android.view.View/android.view.View[2]/android.widget.TextView[1][@text="Enter part number"]')
        const enterPartNrText = ("Enter part number")
        await expect(enterPartNr).toHaveText(enterPartNrText)

        const enterPNr = $('//android.view.View/android.view.View[2]/android.view.View/android.widget.EditText')
        await enterPNr.click()
        await enterPNr.addValue("10039318")

        const fabNext = await $('~Next')
        await fabNext.click()

        const enterSerialNr = $('//android.view.View/android.view.View[3]/android.widget.TextView[1][@text="Enter serial number"]')
        const enterSerialNrText = ("Enter serial number")
        await expect(enterSerialNr).toHaveText(enterSerialNrText)

        const enterSNr = $('//android.view.View/android.view.View[3]/android.view.View/android.widget.EditText')
        await enterSNr.click()
        await enterSNr.addValue("40072357")

        const fabConfirm = await $('~Confirm')
        await fabConfirm.click()
        await driver.pause(2000)

        const addBtnConfirm = await $('//android.view.View/android.view.View[2]/android.view.View/android.view.View[2]/android.widget.TextView[@text="Add"]')
        await addBtnConfirm.click()
        await driver.pause(2000)

        const toolName = await $('//android.view.View/android.widget.TextView[2][@text="TDC 18/4 I-Basic"]')
        const toolNameText = ("TDC 18/4 I-Basic")
        await expect(toolName).toHaveText(toolNameText)

        const connectNotif = await $('//android.view.View/android.view.View[3]/android.view.View/android.widget.TextView[1][@text="Connect your power tool"]')
        const connectNotifText = ("Connect your power tool")
        await expect(connectNotif).toHaveText(connectNotifText)

        await driver.pause(2000)

    });

    it('Delete a tool', async () => {

        const moreBtn = await $('//android.view.View/android.view.View[2]')
        await moreBtn.click()
        const deleteBtn = await $('//android.view.View/android.view.View[2]/android.view.View[1]/android.widget.TextView[@text="Delete now"]')
        await deleteBtn.click()
        await driver.pause(5000)

        const mainPageTitle = await $('//android.view.View/android.view.View[1]/android.view.View[1]/android.widget.TextView[@text="My power tools"]')
        const mainPageTitleText = ("My power tools")
        await expect(mainPageTitle).toHaveText(mainPageTitleText)

    });

});