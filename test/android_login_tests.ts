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
        const fabBtnCountySlc = await $('//android.view.View/android.view.View[2]')
        await fabBtnCountySlc.click()

        const weNeedYouPageTitle = await $(`//android.view.View/android.view.View[1]/android.widget.ScrollView/android.widget.TextView[1][@text="Together we're stronger!"]`)
        const weNeedYouPageTitleText = (`Together we're stronger!`)
        await expect(weNeedYouPageTitle).toHaveText(weNeedYouPageTitleText)
        await driver.pause(3000)
        const dataUsageTgl = await $('android=new UiSelector().className("android.widget.Switch")')
        const dataUsageTgl1 = await $('//android.widget.Switch[@checked="true"]')
        await expect(dataUsageTgl1).toBeDisplayed()
        // await dataUsageTgl.click()
        // const cancelBtn = await $('//android.view.View/android.view.View/android.view.View[3]/android.widget.TextView')
        // await cancelBtn.click()
        // await dataUsageTgl.click()
        console.log(dataUsageTgl.getElementProperty)
        // await expect(dataUsageTgl).not.toBeChecked()
        
        const fabBtn = await $('//android.view.View/android.view.View[3]')
        await fabBtn.click()

        // const termsOfUsePageTitle = await $(`//android.view.View/android.view.View[1]/android.widget.ScrollView/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView[@text="Terms of use"]`)
        // const termsOfUsePageTitleText = ("Terms of use")
        // await expect(termsOfUsePageTitle).toHaveText(termsOfUsePageTitleText)
        // await fabBtn.click()
        // const continueBtn = await $('//android.view.View[1]/android.widget.ScrollView/android.view.View[1]/android.widget.TextView[@text="Agree and continue"]')
        // await continueBtn.click()
        // await driver.pause(3000)

        // const welcomePageTitle = await $('//android.view.View/android.view.View[2]/android.widget.TextView[1][@text="MyFestool"]')
        // const welcomePageTitleText = ("MyFestool")
        // await expect(welcomePageTitle).toHaveText(welcomePageTitleText)

        // const loginBtn = await $('//android.view.View/android.view.View[2]/android.view.View[1]/android.widget.TextView[@text="Log In"]')
        // await loginBtn.click()

        // const enterEmailPageTitle = await $('//android.view.View/android.view.View[2]/android.widget.ScrollView/android.widget.TextView[1][@text="Enter your username"]')
        // const enterEmailPageTitleText = ("Enter your username")
        // await expect(enterEmailPageTitle).toHaveText(enterEmailPageTitleText)

        // const enterTextField = await $('//android.widget.EditText')
        // await enterTextField.click()
        // await enterTextField.addValue('test.uk@mobile.com')
        // const loginFabBtn = await $('//android.view.View/android.view.View[3]')
        // await loginFabBtn.click()

        // const enterPasswordPageTitle = await $('//android.view.View/android.view.View[3]/android.widget.ScrollView/android.widget.TextView[1][@text="Password"]')
        // const enterPasswordPageTitleText = ("Password")
        // await expect(enterPasswordPageTitle).toHaveText(enterPasswordPageTitleText)

        // await enterTextField.click()
        // await enterTextField.addValue('Festool21!')
        // const loginBtnP = await $('//android.view.View/android.view.View[3]/android.view.View/android.widget.TextView[@text="Log in"]')
        // await driver.pause(1000)
        // await loginBtnP.click()
        // await driver.pause(5000)

        // const cancelBtn = await $('//android.view.View/android.view.View[3]/android.widget.TextView[@text="Cancel"]')
        // await cancelBtn.click()
        // const mainPageTitle = await $('//android.view.View/android.view.View[1]/android.view.View[1]/android.widget.TextView[@text="My power tools"]')
        // const mainPageTitleText = ("My power tools")
        // await expect(mainPageTitle).toHaveText(mainPageTitleText)

        // const batteryPackBtn = await $('//android.view.View/android.view.View[1]/android.view.View[2]/android.view.View[1]/android.view.View/android.view.View[2]/android.widget.TextView')
        // await batteryPackBtn.click()
        // await driver.pause(5000)

    });

})
