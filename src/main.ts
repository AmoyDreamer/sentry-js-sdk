import type {
  BasicOptionsState,
  ApiOptions,
  StoreApiOptions,
  HttpHeader,
  UploadRequestOptions,
  EnvelopeApiOptions,
  EnvelopePayloadHeaderOptions,
  EnvelopePayloadItemOptions,
  SentryCaptureOptions
} from './types/index'
import { outputMsg } from './utils/console'
import { isSupportedFetch } from './utils/env'
import { mergeObject } from './utils/object'
// Sentry DSN 正则
const dsnReg = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/
// Sentry SDK 版本号
const sdkVersion = '1.0.0'
// Sentry SDK 名称
const sdkName = 'sentry.javascript.browser'
// Sentry SDK 基本配置项
const basicOptions: BasicOptionsState = {
  dsn: '',
  enabled: true,
  platform: 'javascript',
  level: 'error',
  serverName: window.location.hostname,
  environment: 'production',
  envelope: false
}
// 初始化SDK
export function init(options: BasicOptionsState) {
  // 非法地配置项对象参数
  if (typeof options !== 'object' || options === null) {
    outputMsg('method "init" must pass a object variable, please check again!', 'error')
    return
  }
  // 非法的dsn参数
  if (typeof options.dsn !== 'string') {
    outputMsg('method "init" must pass the value of "dsn" on options params, please check again!', 'error')
    return
  }
  // 非法的dsn格式
  if (!dsnReg.test(options.dsn)) {
    outputMsg('"dsn" must be a valid value, please check again!', 'error')
    return
  }
  basicOptions.dsn = options.dsn
  // 合法的enabled参数值
  if (typeof options.enabled === 'boolean') {
    basicOptions.enabled = options.enabled
  }
  // 合法的envelope参数值
  if (typeof options.envelope === 'boolean') {
    basicOptions.envelope = options.envelope
  }
}
/**
 * @method 解析DSN地址
 */
function parseDSN(): ApiOptions {
  // 非法的dns
  if (!basicOptions.dsn) {
    outputMsg('please check if the "init" method was called!', 'error')
    return {
      uri: '',
      publicKey: '',
      projectId: ''
    }
  }
  const matches: string[] | null = dsnReg.exec(basicOptions.dsn)
  const nodes = matches ? matches.slice(1) : []
  const protocol = nodes[0]
  const publicKey = nodes[1]
  const host = nodes[3]
  const port = nodes[4]
  const projectId = nodes[5]
  return {
    uri: protocol + '://' + host + (port ? ':' + port : '') + '/api/',
    publicKey: publicKey,
    projectId: projectId
  }
}
/**
 * @method 获取api地址　
 */
function getAPIAddress(): string {
  const key: string = basicOptions.envelope ? 'envelope' : 'store'
  const basicRequestOptions: ApiOptions  = parseDSN()
  const url = basicRequestOptions.uri + basicRequestOptions.projectId + '/' + key + '/?sentry_version=7&sentry_client='+ sdkName + sdkVersion +'&sentry_key=' + basicRequestOptions.publicKey
  return url
}
/**
 * @method 获取store接口请求配置
 */
function getStoreOptions(options: SentryCaptureOptions) : UploadRequestOptions {
  // 非法的日志信息
  if (typeof options !== 'object' || options === null) {
    outputMsg('method "uploadLog" must pass a object variable, please check again!', 'error')
    return {
      url: '',
      headers: {},
      payload: ''
    }
  }
  // 构造请求头
  const headers: HttpHeader = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
  // 构造基础数据
  const basicPayload: StoreApiOptions = {
    platform: basicOptions.platform,
    level: basicOptions.level,
    server_name: basicOptions.serverName,
    environment: basicOptions.environment,
    timestamp: new Date().toISOString(),
    user: {},
    sdk: {
      name: sdkName,
      version: sdkVersion
    },
    request: {
      headers: {
        'User-Agent': navigator.userAgent
      }
    }
  }
  // 构造目标请求数据
  const payload = mergeObject(basicPayload, options) as StoreApiOptions
  // 存在user配置项但是不存在user.ip_address配置子项
  if (!payload.user.ip_address) {
    payload.user.ip_address = '{{auto}}'// 用户ip地址，此处默认为服务器自动获取
  }
  return {
    url: getAPIAddress(),
    headers: headers,
    payload: JSON.stringify(payload)
  }
}
/**
 * @method 通过envelope接口请求配置
 */
function getEnvelopeOptions(options: SentryCaptureOptions): UploadRequestOptions {
  // 非法的日志信息
  if (typeof options !== 'object' || options === null) {
    outputMsg('method "uploadLog" must pass a object variable, please check again!', 'error')
    return {
      url: '',
      headers: {},
      payload: ''
    }
  }
  const headers: HttpHeader = {}
  const basicPayload: EnvelopeApiOptions = {
    platform: basicOptions.platform,
    level: basicOptions.level,
    server_name: basicOptions.serverName,
    environment: basicOptions.environment,
    type: 'event',
    user: {},
    sdk: {
      name: sdkName,
      version: sdkVersion
    },
    request: {
      headers: {
        'User-Agent': navigator.userAgent
      }
    }
  }
  // 构造目标请求数据
  const targetPayload = mergeObject(basicPayload, options) as EnvelopeApiOptions
  // 存在user配置项但是不存在user.ip_address配置子项
  if (!targetPayload.user.ip_address) {
    targetPayload.user.ip_address = '{{auto}}'// 用户ip地址，此处默认为服务器自动获取
  }
  const payloadHeaders: EnvelopePayloadHeaderOptions = {
    sent_at: new Date().toISOString(),
    sdk: targetPayload.sdk
  }
  const payloadItem: EnvelopePayloadItemOptions = {
    type: targetPayload.type
  }
  const payload: string = JSON.stringify(payloadHeaders) + '\n' + JSON.stringify(payloadItem) + '\n' + JSON.stringify(targetPayload) + '\n'
  return {
    url: getAPIAddress(),
    headers: headers,
    payload: payload
  }
}
/**
 * @method 上传日志到日志服务器
 */

function uploadLog(options: SentryCaptureOptions) {
  // 非法的日志信息
  if (typeof options !== 'object' || options === null) {
    outputMsg('method "uploadLog" must pass a object variable, please check again!', 'error');
    return;
  }
  const requestOptions: UploadRequestOptions  = basicOptions.envelope ? getEnvelopeOptions(options) : getStoreOptions(options)
  const url = requestOptions.url
  const headers: HttpHeader = requestOptions.headers
  const payload = requestOptions.payload
  // 支持fecth请求
  if (isSupportedFetch()) {
    fetch(url, {
      method: 'POST',
      referrerPolicy: 'origin',
      headers: headers as HeadersInit | undefined,
      body: payload,// body data type must match "Content-Type" header
    })
    .then(function(res) {
      return res.json()
    })
    .then(function(res) {
      console.log('fetch result => ', res)
    })
    .catch(function(err) {
      console.log('fetch error => ', err)
    })
  } else {
    // 不支持fetch，使用原生XMLHttpRequest对象
    let xhr = new XMLHttpRequest()
    // xhr.onerror = reject;
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        // var res = JSON.parse(xhr.response)
        console.log(xhr)
      }
    };
    xhr.open('POST', url)
    for (let key in headers) {
      if (Object.prototype.hasOwnProperty.call(headers, key)) {
        xhr.setRequestHeader(key, headers[key])
      }
    }
    xhr.send(payload)
  }
}
/**
 * @method 捕获信息
 * @document basic options => https://develop.sentry.dev/sdk/event-payloads
 * @document message options => https://develop.sentry.dev/sdk/event-payloads/message/
 */
export function captureMessage(options: SentryCaptureOptions) {
  // 禁止上传日志
  if (!basicOptions.enabled) return
  // 非法地配置项对象参数
  if (typeof options !== 'object' || options === null) {
    outputMsg('method "captureMessage" must pass a object variable, please check again!', 'error');
    return;
  }
  // 非法信息数据
  if (typeof options.message !== 'string' || options.message === '') {
    outputMsg('method "captureMessage" must pass the value of "message" on options params, please check again!', 'error');
    return;
  }
  // 上传日志
  uploadLog(options)
}
