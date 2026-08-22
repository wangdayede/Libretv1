// 全局常量配置
const PROXY_URL = '/proxy/' ;
// 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory' ;
const MAX_HISTORY_ITEMS = 5 ;

// 密码保护配置
// 注意：PASSWORD 环境变量是必需的，所有部署都必须设置密码以确保安全
const PASSWORD_CONFIG = {
  localStorageKey: 'passwordVerified' , // 存储验证状态的键名
  verificationTTL: 90 * 24 * 60 * 60 * 1000 // 验证有效期（90天，约3个月）
};

// 网站信息配置
const SITE_CONFIG = {
  name: 'LibreTV' ,
  url: 'https://libretv.is-an.org' ,
  description: '免费在线视频搜索与观看平台' ,
  logo: 'image/logo.png' ,
  version: '1.0.3'
};

// API站点配置
// 数据源经连通性测试（2026-08-15）：27 个源中 19 个返回有效 maccms JSON，
// 8 个确认失效已移除（feisu/ahiu/kuaikan/zy49/kczy 连接层失败，qiqidys 404，okzy 超时，wolong 非 JSON）。
// 注：hhzy/maoyan/uku 在沙箱 TLS 拦截下报 SSL 错误，但关闭证书校验后可正常返回，
// 属证书/拦截伪影，部署端代理可正常访问，故保留。
// 2026-08-22 复测后移除
const API_SITES = {
  testSource: {
    api: 'https://www.hongniuzy3.com/api.php/provide/vod' ,
    name: '红牛影视' ,
    adult: true
  },
  hhzy: {
    api: 'https://hhzyapi.com/api.php/provide/vod' ,
    name: '浩瀚资源'
  },
  hongniu: {
    api: 'https://www.hongniuzy2.com/api.php/provide/vod' ,
    name: '红牛资源'
  },
  jisu: {
    api: 'https://jszyapi.com/api.php/provide/vod' ,
    name: '极速资源'
  },
  ikun: {
    api: 'https://ikunzyapi.com/api.php/provide/vod' ,
    name: 'ikun资源'
  },
  bzy: {
    api: 'https://bzyapi.com/api.php/provide/vod' ,
    name: '暴风资源'
  },
  yinghua: {
    api: 'https://m3u8.apiyhzy.com/api.php/provide/vod' ,
    name: '樱花资源'
  },
  zy360: {
    api: 'https://360zy.com/api.php/provide/vod' ,
    name: '360资源'
  },
  ruiyi: {
    api: 'https://cj.rycjapi.com/api.php/provide/vod' ,
    name: '瑞义资源'
  },
  dyttzy: {
    api: 'https://caiji.dyttzyapi.com/api.php/provide/vod' ,
    name: '电影天堂资源'
  },
  fzy: {
    api: 'https://cj.fzzyapi.com/api.php/provide/vod' ,
    name: '非凡资源'
  },
  sunik: {
    api: 'https://suniaopi.com/api.php/provide/vod' ,
    name: '速搜资源'
  },
  uku: {
    api: 'https://api.ukuapi.com/api.php/provide/vod' ,
    name: '酷库资源'
  },
  guiji: {
    api: 'https://cj.guijiaapi.com/api.php/provide/vod' ,
    name: '轨道资源'
  },
  maoyan: {
    api: 'https://api.maoyanapi.top/api.php/provide/vod' ,
    name: '猫眼资源'
  },
  lizi: {
    api: 'https://cj.lziapi.com/api.php/provide/vod' ,
    name: '荔枝资源'
  }
};

// 扩展API站点
function extendAPISites(newSites) {
  Object.assign(API_SITES, newSites);
}
window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;

// 聚合搜索配置
const AGGREGATE_SEARCH_CONFIG = {
  enabled: true , // 是否启用聚合搜索
  timeout: 8000 , // 超时时间（毫秒）
  maxResults: 10000 , // 最大结果数
  parallelRequests: true , // 并行请求
  showSourceBadges: true // 显示来源标签
};

// 搜索API配置
const SEARCH_API_CONFIG = {
  search: {
    // /api.php/provide/vod/
    path: '?ac=videolist&wd=' ,
    pagePath: '?ac=videolist&wd={query}&pg={page}' ,
    maxPages: 50 , // 最大页数
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36' ,
      'Accept': 'application/json'
    }
  },
  detail: {
    // 集数详情接口
    path: '?ac=videolist&ids=' ,
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36' ,
      'Accept': 'application/json'
    }
  }
};

// 4K/M3U8 正则
const M3U8_PATTERN = /\$https?:\/\/[^\s'"\s]+\.(?:m3u8|mp4|flv|avi|mkv|wmv|mov|rmvb|3gp|webm|ts|mpg|mpeg)/g;

// 播放器地址
const CUSTOM_PLAYER_URL = 'player.html' ; // 默认播放器，player.html

// 播放器配置
const PLAYER_CONFIG = {
  autoplay: true,
  allowFullscreen: true,
  width: '100%',
  height: '600',
  timeout: 15000, // 超时时间（15秒）
  filterAds: true, // 过滤广告
  autoPlayNext: true, // 自动播放下一集
  adFilteringEnabled: true, // 广告过滤启用
  adFilteringStorage: 'adFilteringEnabled' // 广告过滤存储键
};

// 错误消息
const ERROR_MESSAGES = {
  NETWORK_ERROR: '网络连接错误，请检查网络后重试',
  TIMEOUT_ERROR: '请求超时，请稍后重试',
  API_ERROR: 'API接口异常，数据加载失败',
  PLAYER_ERROR: '播放器加载失败，请刷新页面重试',
  UNKNOWN_ERROR: '未知错误，请稍后重试'
};

// 搜索配置
const SEARCH_CONFIG = {
  enableXSSProtection: true, // 启用 XSS 保护
  sanitizeUrls: true, //  sanitize URLs
  maxQueryLength: 100, // 最大查询长度
  // allowedApiDomains: [...] // 允许的API域名列表
};

// 自定义API配置
const CUSTOM_API_CONFIG = {
  separator: ',' , // 分隔符
  maxSources: 5 , // 最大源数量
  testTimeout: 5000 , // 测试超时时间（毫秒）
  namePrefix: 'Custom-' , // 名称前缀
  validateUrl: true, // 验证URL
  cacheResults: true, // 缓存结果
  cacheExpire: 518400000, // 缓存过期时间（6天）
  adaptPropName: 'isAdapt' // 自适应属性名
};

// 头部按钮API
const HEADER_BUTTON_ADULT_APIs = false;
    
