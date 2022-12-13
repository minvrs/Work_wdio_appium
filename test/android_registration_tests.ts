describe('Registration tests', async () => {

    before(async () => {

        const { exec } = require("child_process");
        exec(`adb -s emulator-5554 shell am broadcast -a com.festool.apps.powertools.debug.COMMAND -e skip "onboard"`, (error, stdout, stderr) => {
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

    });

    it('Registration en-UK', async () => {

        const createAccountBtn = await $('//android.view.View/android.view.View[2]/android.view.View[2]/android.widget.TextView[@text="Create account"]')
        await createAccountBtn.click()

        const chooseCountryScreen = await $('//android.view.View/android.view.View[1]/android.widget.ScrollView/android.widget.TextView[@text="Choose your country"]')
        const chooseCountryScreenText = ("Choose your country")
        await expect(chooseCountryScreen).toHaveText(chooseCountryScreenText)

        const selectUkBtn = await $('//android.view.View/android.view.View[1]/android.widget.ScrollView/android.view.View[5]/android.widget.TextView[@text="United Kingdom"]')
        await selectUkBtn.click()

        const fabNext = await $('~Next')
        await fabNext.click()

        const enterEmailScreen = await $('//android.view.View/android.view.View[1]/android.widget.ScrollView/android.widget.TextView[1][@text="Enter your email address"]')
        const enterEmailScreenText = ("Enter your email address")
        await expect(enterEmailScreen).toHaveText(enterEmailScreenText)

        const emailTextField = await $('//android.view.View[1]/android.widget.ScrollView/android.view.View/android.widget.EditText')
        await emailTextField.click()
        await emailTextField.addValue("qa.auto@mobile.com")
        await fabNext.click()

        const enterPassScreen = await $('//android.view.View/android.view.View[1]/android.widget.ScrollView/android.widget.TextView[1][@text="Your password"]')
        const enterPassScreenText = ("Your password")
        await expect(enterPassScreen).toHaveText(enterPassScreenText)

        const passTextField = await $('//android.view.View/android.view.View[1]/android.widget.ScrollView/android.view.View/android.widget.EditText')
        await passTextField.click()
        await passTextField.addValue("Festool21!")
        await driver.pause(1000)
        await fabNext.click()

        const titleScreen = await $('//android.view.View/android.view.View[1]/android.widget.ScrollView/android.widget.TextView[1][@text="What is your title"]')
        const titleScreenText = ("What is your title")
        await expect(titleScreen).toHaveText(titleScreenText)

        const otherBtn = await $('//android.view.View/android.view.View[1]/android.widget.ScrollView/android.view.View[3]/android.widget.TextView[@text="Other"]')
        await otherBtn.click()
        await fabNext.click()

        const nameScreen = await $('//android.view.View/android.view.View[1]/android.widget.ScrollView/android.widget.TextView[1][@text="Your first name"]')
        const nameScreenText = ("Your first name")
        await expect(nameScreen).toHaveText(nameScreenText)

        const nameTextField = await $('//android.view.View/android.view.View[1]/android.widget.ScrollView/android.view.View/android.widget.EditText')
        await nameTextField.click()
        await nameTextField.addValue("QA")
        await driver.pause(1000)
        await fabNext.click()

        const surnameScreen = await $('//android.view.View/android.view.View[1]/android.widget.ScrollView/android.widget.TextView[1][@text="Your last name"]')
        const surnameScreenText = ("Your last name")
        await expect(surnameScreen).toHaveText(surnameScreenText)

        const surnameTextField = await $('//android.view.View/android.view.View[1]/android.widget.ScrollView/android.view.View/android.widget.EditText')
        await surnameTextField.click()
        await surnameTextField.addValue("automation")
        await driver.pause(1000)
        await fabNext.click()

        const useScreen = await $('//android.view.View/android.view.View[1]/android.widget.ScrollView/android.widget.TextView[1][@text="Tool use"]')
        const useScreenText = ("Tool use")
        await expect(useScreen).toHaveText(useScreenText)

        const businessBtn = await $('//android.view.View/android.view.View[1]/android.widget.ScrollView/android.view.View[1]/android.widget.TextView[@text="Business"]')
        await businessBtn.click()
        await fabNext.click()

        const companyScreen = await $('//android.view.View/android.view.View[1]/android.widget.ScrollView/android.widget.TextView[1][@text="Your company name"]')
        const companyScreenText = ("Your company name")
        await expect(companyScreen).toHaveText(companyScreenText)

        const companyTextField = await $('//android.view.View/android.view.View[1]/android.widget.ScrollView/android.view.View/android.widget.EditText')
        await companyTextField.click()
        await companyTextField.addValue("mobile")
        await driver.pause(1000)
        await fabNext.click()

        const advertisingScreen = await $('//android.view.View/android.view.View[1]/android.widget.ScrollView/android.widget.TextView[1][@text="Advertising consent"]')
        const advertisingScreenText = ("Advertising consent")
        await expect(advertisingScreen).toHaveText(advertisingScreenText)
        // check togle button value
        await fabNext.click()

        const completeScreen = await $('//android.view.View/android.view.View[1]/android.widget.ScrollView/android.widget.TextView[1][@text="Registration is complete"]')
        const completeScreenText = ("Registration is complete")
        await expect(completeScreen).toHaveText(completeScreenText)

        const fabDownbtn = await $('~ScrollDown')
        await fabDownbtn.click()

        const termsCheck = await $('//android.view.View/android.view.View[1]/android.widget.ScrollView/android.view.View[1]')
        await termsCheck.click()
        const privacyCheck = await $('//android.view.View/android.view.View[1]/android.widget.ScrollView/android.view.View[2]')
        await privacyCheck.click()

        const confirmBtn = await $('//android.view.View/android.view.View[1]/android.widget.ScrollView/android.view.View[3]/android.widget.TextView[@text="Confirm"]')
        await confirmBtn.click()

        const openEmailBtn = await $('//android.view.View/android.view.View[2]/android.widget.TextView[@text="Open email app"]')
        await openEmailBtn.click()

        const clickEmail = await $(`//android.widget.FrameLayout[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.support.v7.widget.RecyclerView/android.view.ViewGroup[1]/android.widget.TextView[1][@text="'MyFestool' via festooldev@telesoftas.com"]`)
        await clickEmail.click()

        const confirmRegistration = await $('//android.view.View[@content-desc="Confirm MyFestool registration"]/android.widget.TextView[@text="Confirm MyFestool registration"]')
        await confirmRegistration.click()
        await driver.pause(5000)

        const goodToGoDialog = await $(`//android.view.View/android.widget.TextView[1][@text="You’re good to go"]`)
        const goodToGoDialogText = (`You’re good to go`)
        await expect(goodToGoDialog).toHaveText(goodToGoDialogText)

        const loginBtn = await $('//android.view.View/android.view.View[2]/android.widget.TextView[@text="Log in"]')
        await loginBtn.click()

        const enterEmailLoginScreen = await $('//android.view.View/android.view.View[2]/android.widget.ScrollView/android.widget.TextView[1][@text="Enter your email"]')
        const enterEmailLoginScreenText = ("Enter your email")
        await expect(enterEmailLoginScreen).toHaveText(enterEmailLoginScreenText)

    });

})