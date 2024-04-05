## 你将会学习到
- 如何使用 useState Hook 添加 state 变量
  - 通过引入useState
    ```js
    const [num, setNum] = useState(0)
    ```
- useState Hook 返回哪一对值
  - 实际的state 和一个变更state的一个函数，参数是改变后的值
- 如何添加多个 state 变量
 - 直接声明多个即可
- 为什么 state 被称作是局部的
 - 声明一个组件中的state是私有的，每一个组件的内部的state都是独立切互不影响的,否则将无法可控