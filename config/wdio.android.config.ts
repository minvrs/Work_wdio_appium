import * as path from 'path';
import { config } from './wdio.shared.config'


config.port = 4723,

    config.specs = [
        './test/**/android_add_tool_tests.ts'
    ]

config.capabilities = [{

    platformName: 'Android',
    'appium:platformVersion': '13.0',
    'appium:deviceName': 'Pixel 6 API 33',
    'appium:automationName': 'UIAutomator2',
    'appium:app': path.join(process.cwd(), './Apps/Android/app-qa-qs-debug.apk'),
    'appium:appWaitActivity': '*',

}]

exports.config = config

