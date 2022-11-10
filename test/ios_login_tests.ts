describe('iOS login', () => {

    it('Select United Kingdom and Login', async () => {

        const selectUK = await $('~United Kingdom')
        await selectUK.click()
        const fabBtn = await $('~ic arrow white right')
        await fabBtn.click()

        // const weNeedYouPageTitle = await $(`//XCUIElementTypeStaticText[@name="Together We're Stronger!"]`)
        // const weNeedYouPageTitleText = (`Together we're stronger`)
        // expect(weNeedYouPageTitle).toHaveText(weNeedYouPageTitleText)
        await fabBtn.click()

        const allowAppTracking = await $('~Allow')
        await allowAppTracking.click()

        await fabBtn.click()
        const continueBtn = await $('//XCUIElementTypeButton[@name="Agree and continue"]')
        await continueBtn.click()

        const loginBtn = await $('//XCUIElementTypeButton[@name="Log in"]')
        await loginBtn.click()

        const enterTextFieldEmail = await $('//XCUIElementTypeTextField[@value = "Enter email*"]')
        await enterTextFieldEmail.addValue('test2.uk@mobile.com')
        await fabBtn.click()


        const enterTextFieldPass = await $('//XCUIElementTypeSecureTextField[@value = "Enter your password*"]')
        await enterTextFieldPass.addValue('Festool21!')
        const loginBtnP = await $('//XCUIElementTypeButton[@name="Log in"][@index=2]')
        await loginBtnP.click()
        await driver.pause(5000)

        const allowLocation = await $('~Allow While Using App')
        await allowLocation.click()

        const allowNotif = await $('~Allow')
        await allowNotif.click()

        const understoodBtn = await $('//XCUIElementTypeButton[@name="Understood"]')
        await understoodBtn.click()
        await driver.pause(5000)





    })
})