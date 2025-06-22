/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',
    title: '早上好哇，蓉悦小法斯🔮',
    desc: `
      🗓️**{{date.DATA}}**
     
      ---
      
      城市：{{city.DATA}}
      
      今日天气☁️：{{weather.DATA}}
      
      今日气温(最高/最低)🌡️:{{max_temperature.DATA}} / {{min_temperature.DATA}}
      
      今日风向: {{wind_direction.DATA}}
      
      今日风级: {{wind_scale.DATA}}
      
      {{comprehensive_horoscope.DATA}}
      
      ---
      
      {{birthday_message.DATA}}
    `
  },
  {
    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
]

module.exports = TEMPLATE_CONFIG
