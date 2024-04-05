// 模拟useState
// userState的原理，内部有一个hooks 数组, 并有一个指标index来表示当前hooks的位置, 当每次新增state时光标会进行++，指向下一个空位
let index = 0 // 索引
const hooks = []
export default function _useState(initalState) {
  console.log(hooks, index, '索引')
  let curHook = hooks[index]
  if(!curHook) {
    const setState = (val) => {
      console.log(val, '变动的值')
      curHook[0] = val
    }
    curHook = [initalState, setState]
    // 进行初始化
    hooks[index] = curHook
  } 
  index++ // 指向下一个空位
  console.log(curHook, '返回的值')
  return curHook
}