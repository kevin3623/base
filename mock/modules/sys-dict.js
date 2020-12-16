// 获取字典表列表
export function list () {
  return {
    // isOpen: false,
    url: '/sys/dict/list',
    type: 'get',
    data: {
      'msg': 'success',
      'code': 0,
      'page': {
        'totalCount': 'dfd',
        'pageSize': 10,
        'totalPage': 1,
        'currPage': 1,
        'list': 'dfdf'
      }
    }
  }
}
