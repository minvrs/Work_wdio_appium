import * as path from 'path';
import { config } from './wdio.shared.config'


config.port = 4723,

    config.specs = [
        './test/**/*.ts'
    ]

config.capabilities = [{

    platformName: 'ios',
        'appium:platformVersion': '15.5',
        'appium:deviceName': 'iPhone 13',
        'appium:app': '/Users/mindaugas/Documents/Festool/Work_app_wdio_appium_ts/Apps/iOS/FestoolPowerTools.app',
        'appium:automationName': 'XCUITest'

}]

exports.config = config