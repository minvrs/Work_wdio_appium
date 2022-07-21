import * as path from 'path';
import { config } from './wdio.shared.config'


config.port = 4723,

    config.specs = [
        './test/**/*.ts'
    ]

config.capabilities = [{

    platformName: 'Android',
    'appium:platformVersion': '11.0',
    'appium:deviceName': 'Pixel 4 API 30',
    'appium:automationName': 'UIAutomator2',
    'appium:app': path.join(process.cwd(), './Apps/Android/app-qa-qs-debug.apk'),
    'appium:appWaitActivity': '*',

}]

exports.config = config

