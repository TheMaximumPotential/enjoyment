# enjoyment

> A react-native project

## Build Setup

```bash
# 初始化项目
npx react-native init enjoyment
cd enjoyment

# 安装依赖
yarn

# 指定平台的开发时构建(Android, ios)
npm run android
npm run ios

# 项目启动
npm start
```

#### 说明文档

> 文件夹结构

```
   ├── android                  # android 相关代码
   ├── ios                      # ios 相关代码
   ├── js                       # js 相关代码
   │   ├── action               # action 相关代码
   │   ├── expand               # 公共类
   │   │   └── dao              # 数据相关操作
   │   │       └── DataStore.js # 离线缓存框架
   │   ├── pages                # 业务页面入口
   │   ├── navigator            # 路由相关
   │   ├── store                # redux 状态管理仓库
   │   ├── reducer              # 工具库
   │   └── App.js               # 项目入口文件
   ├── README.md
   └── package.json             # 项目配置文件
```
