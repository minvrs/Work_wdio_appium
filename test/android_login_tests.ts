// import 'chai-http'
// import * as chai from 'chai'
// chai.use(require('chai-http'))
// import { expect } from 'chai'


describe('Android Login', () => {

    // before(async function () {
    //     const response = await chai.request("https://api.qa.festool.io/workapp")
    //     .post('/api/v1/auth/login')
    //     .set({ 'Content-Type': 'application/json-patch+json', 'Accept': 'application/json' })
    //     .send({ 'email': `test.uk@mobile.com`, 'password': 'Festool21!'})
    //  expect(response.status).equals(200)
    // // console.log("RESPONS!!!!!!!!!!" + response.status)
    // // console.log(response.body)
    // })


    it('Select United Kingdom and Login', async () => {

        const selectUK = await $('//android.widget.TextView[@text="United Kingdom"]')
        await selectUK.click()
        const fabNext = await $('~Next')
        await fabNext.click()

        const weNeedYouPageTitle = await $(`//android.view.View/android.view.View[1]/android.widget.ScrollView/android.widget.TextView[1][@text="Together we're stronger!"]`)
        const weNeedYouPageTitleText = (`Together we're stronger!`)
        await expect(weNeedYouPageTitle).toHaveText(weNeedYouPageTitleText)
        // await driver.pause(3000)
        const dataUsageTgl = await $('//android.view.View/android.view.View[1]/android.widget.ScrollView/android.widget.Switch')
        // const dataUsageTgl1 = await $('//android.widget.Switch[@checked="true"]')
        // await expect(dataUsageTgl1).toBeDisplayed()
        await dataUsageTgl.click()
        const cancelBtn = await $('//android.view.View/android.view.View/android.view.View[3]/android.widget.TextView')
        await cancelBtn.click()
        await dataUsageTgl.click()
        await expect(dataUsageTgl).not.toBeChecked()

        await fabNext.click()

        await driver.reloadSession

        const termsOfUsePageTitle = await $(`//android.view.View/android.view.View[1]/android.widget.ScrollView/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView[@text="Terms of use"]`)
        const termsOfUsePageTitleText = ("Terms of use")
        await expect(termsOfUsePageTitle).toHaveText(termsOfUsePageTitleText)
        const fabDownbtn = await $('~ScrollDown')
        await fabDownbtn.click()
        const continueBtn = await $('//android.view.View[1]/android.widget.ScrollView/android.view.View[1]/android.widget.TextView[@text="Agree and continue"]')
        await continueBtn.click()
        await driver.pause(3000)

        const welcomePageTitle = await $('//android.view.View/android.view.View[2]/android.widget.TextView[1][@text="MyFestool"]')
        const welcomePageTitleText = ("MyFestool")
        await expect(welcomePageTitle).toHaveText(welcomePageTitleText)

        const loginBtn = await $('//android.view.View/android.view.View[2]/android.view.View[1]/android.widget.TextView[@text="Log In"]')
        await loginBtn.click()

        const enterEmailPageTitle = await $('//android.view.View/android.view.View[2]/android.widget.ScrollView/android.widget.TextView[1][@text="Enter your email"]')
        const enterEmailPageTitleText = ("Enter your email")
        await expect(enterEmailPageTitle).toHaveText(enterEmailPageTitleText)

        const enterTextField = await $('//android.widget.EditText')
        await enterTextField.click()
        await enterTextField.addValue('test.uk@mobile.com')
        await fabNext.click()

        const enterPasswordPageTitle = await $('//android.view.View/android.view.View[3]/android.widget.ScrollView/android.widget.TextView[1][@text="Password"]')
        const enterPasswordPageTitleText = ("Password")
        await expect(enterPasswordPageTitle).toHaveText(enterPasswordPageTitleText)

        await enterTextField.click()
        await enterTextField.addValue('Festool21!')
        const loginBtnP = await $('//android.view.View/android.view.View[3]/android.view.View/android.widget.TextView[@text="Log in"]')
        await driver.pause(1000)
        await loginBtnP.click()
        await driver.pause(3000)

        const allowBtn = await $('//android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Button[1][@text="Allow"]')
        await allowBtn.click()
        await driver.pause(2000)
        await allowBtn.click()
        const mainPageTitle = await $('//android.view.View/android.view.View[1]/android.view.View[1]/android.widget.TextView[@text="My power tools"]')
        const mainPageTitleText = ("My power tools")
        await expect(mainPageTitle).toHaveText(mainPageTitleText)

        const batteryPackBtn = await $('//android.view.View/android.view.View[1]/android.view.View[2]/android.view.View[1]/android.view.View/android.view.View[2]/android.widget.TextView')
        await batteryPackBtn.click()
        await driver.pause(5000)

    });

})
