// 生成数据列表
var dataList = [
  {
    'menuId': 1,
    'parentId': 0,
    'parentName': null,
    'name': '系统管理',
    'url': null,
    'perms': null,
    'type': 0,
    'icon': 'system',
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 2,
    'parentId': 1,
    'parentName': '系统管理',
    'name': '管理员列表',
    'url': 'sys/user',
    'perms': null,
    'type': 1,
    'icon': 'admin',
    'orderNum': 1,
    'open': null,
    'list': null
  },
  {
    'menuId': 3,
    'parentId': 1,
    'parentName': '系统管理',
    'name': '角色管理',
    'url': 'sys/role',
    'perms': null,
    'type': 1,
    'icon': 'role',
    'orderNum': 2,
    'open': null,
    'list': null
  },
  {
    'menuId': 4,
    'parentId': 1,
    'parentName': '系统管理',
    'name': '菜单管理',
    'url': 'sys/menu',
    'perms': null,
    'type': 1,
    'icon': 'menu',
    'orderNum': 3,
    'open': null,
    'list': null
  },
  {
    'menuId': 5,
    'parentId': 1,
    'parentName': '系统管理',
    'name': 'SQL监控',
    'url': 'http://localhost:8080/renren-fast/druid/sql.html',
    'perms': null,
    'type': 1,
    'icon': 'sql',
    'orderNum': 4,
    'open': null,
    'list': null
  },
  {
    'menuId': 6,
    'parentId': 1,
    'parentName': '系统管理',
    'name': '定时任务',
    'url': 'job/schedule',
    'perms': null,
    'type': 1,
    'icon': 'job',
    'orderNum': 5,
    'open': null,
    'list': null
  },
  {
    'menuId': 7,
    'parentId': 6,
    'parentName': '定时任务',
    'name': '查看',
    'url': null,
    'perms': 'sys:schedule:list,sys:schedule:info',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 8,
    'parentId': 6,
    'parentName': '定时任务',
    'name': '新增',
    'url': null,
    'perms': 'sys:schedule:save',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 9,
    'parentId': 6,
    'parentName': '定时任务',
    'name': '修改',
    'url': null,
    'perms': 'sys:schedule:update',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 10,
    'parentId': 6,
    'parentName': '定时任务',
    'name': '删除',
    'url': null,
    'perms': 'sys:schedule:delete',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 11,
    'parentId': 6,
    'parentName': '定时任务',
    'name': '暂停',
    'url': null,
    'perms': 'sys:schedule:pause',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 12,
    'parentId': 6,
    'parentName': '定时任务',
    'name': '恢复',
    'url': null,
    'perms': 'sys:schedule:resume',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 13,
    'parentId': 6,
    'parentName': '定时任务',
    'name': '立即执行',
    'url': null,
    'perms': 'sys:schedule:run',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 14,
    'parentId': 6,
    'parentName': '定时任务',
    'name': '日志列表',
    'url': null,
    'perms': 'sys:schedule:log',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 15,
    'parentId': 2,
    'parentName': '管理员列表',
    'name': '查看',
    'url': null,
    'perms': 'sys:user:list,sys:user:info',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 16,
    'parentId': 2,
    'parentName': '管理员列表',
    'name': '新增',
    'url': null,
    'perms': 'sys:user:save,sys:role:select',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 17,
    'parentId': 2,
    'parentName': '管理员列表',
    'name': '修改',
    'url': null,
    'perms': 'sys:user:update,sys:role:select',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 18,
    'parentId': 2,
    'parentName': '管理员列表',
    'name': '删除',
    'url': null,
    'perms': 'sys:user:delete',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 19,
    'parentId': 3,
    'parentName': '角色管理',
    'name': '查看',
    'url': null,
    'perms': 'sys:role:list,sys:role:info',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 20,
    'parentId': 3,
    'parentName': '角色管理',
    'name': '新增',
    'url': null,
    'perms': 'sys:role:save,sys:menu:list',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 21,
    'parentId': 3,
    'parentName': '角色管理',
    'name': '修改',
    'url': null,
    'perms': 'sys:role:update,sys:menu:list',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 22,
    'parentId': 3,
    'parentName': '角色管理',
    'name': '删除',
    'url': null,
    'perms': 'sys:role:delete',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 23,
    'parentId': 4,
    'parentName': '菜单管理',
    'name': '查看',
    'url': null,
    'perms': 'sys:menu:list,sys:menu:info',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 24,
    'parentId': 4,
    'parentName': '菜单管理',
    'name': '新增',
    'url': null,
    'perms': 'sys:menu:save,sys:menu:select',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 25,
    'parentId': 4,
    'parentName': '菜单管理',
    'name': '修改',
    'url': null,
    'perms': 'sys:menu:update,sys:menu:select',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 26,
    'parentId': 4,
    'parentName': '菜单管理',
    'name': '删除',
    'url': null,
    'perms': 'sys:menu:delete',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 27,
    'parentId': 1,
    'parentName': '系统管理',
    'name': '参数管理',
    'url': 'sys/config',
    'perms': 'sys:config:list,sys:config:info,sys:config:save,sys:config:update,sys:config:delete',
    'type': 1,
    'icon': 'config',
    'orderNum': 6,
    'open': null,
    'list': null
  },
  {
    'menuId': 29,
    'parentId': 1,
    'parentName': '系统管理',
    'name': '系统日志',
    'url': 'sys/log',
    'perms': 'sys:log:list',
    'type': 1,
    'icon': 'log',
    'orderNum': 7,
    'open': null,
    'list': null
  },
  {
    'menuId': 30,
    'parentId': 1,
    'parentName': '系统管理',
    'name': '文件上传',
    'url': 'oss/oss',
    'perms': 'sys:oss:all',
    'type': 1,
    'icon': 'oss',
    'orderNum': 6,
    'open': null,
    'list': null
  }
]
var navDataList = [{
  'menuId': 1,
  'parentId': 0,
  'parentName': null,
  'name': '系统管理',
  'url': null,
  'perms': null,
  'type': 0,
  'icon': 'system',
  'orderNum': 0,
  'open': null,
  'list': [{
    'menuId': 103,
    'parentId': 1,
    'parentName': null,
    'name': '参数管理',
    'url': 'sys/config',
    'perms': 'sys:config:list,sys:config:info,sys:config:save,sys:config:update,sys:config:delete',
    'type': 1,
    'icon': '',
    'orderNum': 0,
    'open': null,
    'list': null
  }, {
    'menuId': 2,
    'parentId': 1,
    'parentName': null,
    'name': '用户管理',
    'url': 'sys/user',
    'perms': 'sys:user',
    'type': 1,
    'icon': 'admin',
    'orderNum': 1,
    'open': null,
    'list': null
  }, {
    'menuId': 3,
    'parentId': 1,
    'parentName': null,
    'name': '角色管理',
    'url': 'sys/role',
    'perms': 'sys:role',
    'type': 1,
    'icon': 'role',
    'orderNum': 2,
    'open': null,
    'list': null
  }, {
    'menuId': 4,
    'parentId': 1,
    'parentName': null,
    'name': '菜单管理',
    'url': 'sys/menu',
    'perms': 'sys:menu',
    'type': 1,
    'icon': 'menu',
    'orderNum': 3,
    'open': null,
    'list': null
  }, {
    'menuId': 5,
    'parentId': 1,
    'parentName': null,
    'name': 'SQL监控',
    'url': 'http://localhost:8080/renren-fast/druid/sql.html',
    'perms': null,
    'type': 1,
    'icon': 'sql',
    'orderNum': 4,
    'open': null,
    'list': null
  }, {
    'menuId': 6,
    'parentId': 1,
    'parentName': null,
    'name': '定时任务',
    'url': 'job/schedule',
    'perms': 'job:schedule',
    'type': 1,
    'icon': 'job',
    'orderNum': 5,
    'open': null,
    'list': null
  }, {
    'menuId': 27,
    'parentId': 1,
    'parentName': null,
    'name': '参数管理',
    'url': 'sys/config',
    'perms': 'sys:config:list,sys:config:info,sys:config:save,sys:config:update,sys:config:delete',
    'type': 1,
    'icon': 'config',
    'orderNum': 6,
    'open': null,
    'list': null
  }, {
    'menuId': 30,
    'parentId': 1,
    'parentName': null,
    'name': '文件上传',
    'url': 'oss/oss',
    'perms': 'sys:oss:all',
    'type': 1,
    'icon': 'oss',
    'orderNum': 6,
    'open': null,
    'list': null
  }, {
    'menuId': 57,
    'parentId': 1,
    'parentName': null,
    'name': '支部管理',
    'url': 'sys/tpartydepartment',
    'perms': null,
    'type': 1,
    'icon': 'config',
    'orderNum': 6,
    'open': null,
    'list': null
  }, {
    'menuId': 62,
    'parentId': 1,
    'parentName': null,
    'name': '图片管理',
    'url': 'sys/timage',
    'perms': null,
    'type': 1,
    'icon': 'config',
    'orderNum': 6,
    'open': null,
    'list': null
  }, {
    'menuId': 67,
    'parentId': 1,
    'parentName': null,
    'name': '版本管理',
    'url': 'sys/tversion',
    'perms': null,
    'type': 1,
    'icon': 'config',
    'orderNum': 6,
    'open': null,
    'list': null
  }, {
    'menuId': 72,
    'parentId': 1,
    'parentName': null,
    'name': '字典表',
    'url': 'sys/tdict',
    'perms': null,
    'type': 1,
    'icon': 'config',
    'orderNum': 6,
    'open': null,
    'list': null
  }, {
    'menuId': 29,
    'parentId': 1,
    'parentName': null,
    'name': '系统日志',
    'url': 'sys/log',
    'perms': 'sys:log:list',
    'type': 1,
    'icon': 'log',
    'orderNum': 7,
    'open': null,
    'list': null
  }]
}, {
  'menuId': 35,
  'parentId': 0,
  'parentName': null,
  'name': '内容管理',
  'url': '',
  'perms': '',
  'type': 0,
  'icon': 'zhedie',
  'orderNum': 0,
  'open': null,
  'list': [{
    'menuId': 36,
    'parentId': 35,
    'parentName': null,
    'name': '资讯管理',
    'url': '',
    'perms': '',
    'type': 0,
    'icon': 'menu',
    'orderNum': 0,
    'open': null,
    'list': [{
      'menuId': 82,
      'parentId': 36,
      'parentName': null,
      'name': '新闻动态',
      'url': 'info/1102',
      'perms': 'sys:info:update',
      'type': 1,
      'icon': 'tubiao',
      'orderNum': 0,
      'open': null,
      'list': null
    }, {
      'menuId': 83,
      'parentId': 36,
      'parentName': null,
      'name': '红色讲堂',
      'url': 'info/3001',
      'perms': '',
      'type': 1,
      'icon': 'tixing',
      'orderNum': 0,
      'open': null,
      'list': null
    }, {
      'menuId': 84,
      'parentId': 36,
      'parentName': null,
      'name': '金色论坛',
      'url': 'info/1603',
      'perms': '',
      'type': 1,
      'icon': 'sousuo',
      'orderNum': 0,
      'open': null,
      'list': null
    }, {
      'menuId': 85,
      'parentId': 36,
      'parentName': null,
      'name': '金投之星',
      'url': 'info/1106',
      'perms': '',
      'type': 1,
      'icon': 'system',
      'orderNum': 0,
      'open': null,
      'list': null
    }, {
      'menuId': 102,
      'parentId': 36,
      'parentName': null,
      'name': '测试菜单1',
      'url': '111',
      'perms': '',
      'type': 1,
      'icon': '',
      'orderNum': 0,
      'open': null,
      'list': null
    }, {
      'menuId': 37,
      'parentId': 36,
      'parentName': null,
      'name': '公告通知',
      'url': 'info/1101',
      'perms': '',
      'type': 1,
      'icon': 'menu',
      'orderNum': 1,
      'open': null,
      'list': null
    }, {
      'menuId': 104,
      'parentId': 36,
      'parentName': null,
      'name': '测试管理2',
      'url': 'sys/test',
      'perms': 'sys:test',
      'type': 1,
      'icon': 'daohang',
      'orderNum': 100,
      'open': null,
      'list': null
    }]
  }]
}]
// 获取导航菜单列表 / 权限
export function nav () {
  return {
    // isOpen: false,
    url: '/sys/menu/nav',
    type: 'get',
    data: {
      'msg': 'success',
      'code': 0,
      'menuList': navDataList,
      'permissions': [
        'sys:schedule:info',
        'sys:menu:update',
        'sys:menu:delete',
        'sys:config:info',
        'sys:menu:list',
        'sys:config:save',
        'sys:config:update',
        'sys:schedule:resume',
        'sys:user:delete',
        'sys:config:list',
        'sys:user:update',
        'sys:role:list',
        'sys:menu:info',
        'sys:menu:select',
        'sys:schedule:update',
        'sys:schedule:save',
        'sys:role:select',
        'sys:user:list',
        'sys:menu:save',
        'sys:role:save',
        'sys:schedule:log',
        'sys:role:info',
        'sys:schedule:delete',
        'sys:role:update',
        'sys:schedule:list',
        'sys:user:info',
        'sys:schedule:run',
        'sys:config:delete',
        'sys:role:delete',
        'sys:user:save',
        'sys:schedule:pause',
        'sys:log:list',
        'sys:oss:all'
      ]
    }
  }
}

// 获取菜单列表
export function list () {
  return {
    // isOpen: false,
    url: '/sys/menu/list',
    type: 'get',
    data: dataList
  }
}

// 获取上级菜单
export function select () {
  let dataList = JSON.parse(JSON.stringify(navDataList))
  dataList = dataList.concat(dataList[0].list)
  return {
    // isOpen: false,
    url: '/sys/menu/select',
    type: 'get',
    data: {
      'msg': 'success',
      'code': 0,
      'menuList': dataList
    }
  }
}

// 获取菜单信息
export function info () {
  return {
    // isOpen: false,
    url: '/sys/menu/info',
    type: 'get',
    data: {
      'msg': 'success',
      'code': 0,
      'menu': dataList[0]
    }
  }
}

// 添加菜单
export function add () {
  return {
    // isOpen: false,
    url: '/sys/menu/save',
    type: 'post',
    data: {
      'msg': 'success',
      'code': 0
    }
  }
}

// 修改菜单
export function update () {
  return {
    // isOpen: false,
    url: '/sys/menu/update',
    type: 'post',
    data: {
      'msg': 'success',
      'code': 0
    }
  }
}

// 删除菜单
export function del () {
  return {
    // isOpen: false,
    url: '/sys/menu/delete',
    type: 'post',
    data: {
      'msg': 'success',
      'code': 0
    }
  }
}
