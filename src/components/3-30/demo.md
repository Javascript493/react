### 单一项原则
组件设计中应该遵循此原则，只承担一件事情的任务，后续随着功能的增长，它应该被分为多个小组件。

### props vs state 
- props 像是你传递的参数 至函数。它们使父组件可以传递数据给子组件，定制它们的展示。举个例子，Form 可以传递 color prop 至 Button。
- state 像是组件的内存。它使组件可以对一些信息保持追踪，并根据交互来改变。举个例子，Button 可以保持对 isHovered state 的追踪。

- 要传递props直接写在标签上，像是一个html属性一样
- 组件通过props这个对象去接受
- 你可以指定一个默认值，如 size = 100，用于缺少值或值为 undefined 的 props 
- 并且可以通过扩展语法 <demo {...props}></demo> 使用它
- props可以是一个jsx ，去到的是一个children 的数组对象
- Props 是只读的时间快照：每次渲染都会收到新版本的 props。
- 组件内部不允许更改props