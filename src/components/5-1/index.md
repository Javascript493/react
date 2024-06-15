更新State中的对象
- 如何正确地更新 React state 中的对象
  首先我们要了解state中定义的应该只是作为只读的一个属性 即使对象可以通过obj.X 的形式修改，但是这样做并不会进行视图上的渲染（好比你自己心里想吃什么，但是不给点菜说谁会给你上菜呢？），均需要set的形式进行修改set(obj)
- 如何在不产生 mutation的情况下更新一个嵌套对象
  可以通过扩展运算符的方式{...form, newName: name}
- 什么是不可变性（immutability），以及如何不破坏它
  当一个值被声明后，后续对它的任何操作并会对它值本身的修改 例如：String,number.  为了不去破坏这个规则我们可以使用第三方的库useimmer.
  此时用userImmer 声明后的对象就是不可变的，当修改后其实会返回一个新的对象
- 如何使用 Immer 使复制对象不那么繁琐
  1. 安装use-immer库
  2. 引入 import {useImmer} from 'use-immer'
  3. 声明 const [form, setForm] = useImmer({})
  4. 修改 updateFrom(form => form.X = XX)

## 更新state中的数组
- 如何添加、删除或者修改 React state 中的数组中的元素
  - 由于声明的数组在state中，我们认为它是一个可读的并不可修改，新增、删除、修改不能直接使用修改当前数组的方法（push,pop,arr[X]）的方式，而是进行一个新的拷贝，通过添加（[...arr,new]）、删除（filter过滤掉不需要的），修改（map覆盖）
- 如何更新数组内部的对象
  - 首先我们要了解到数组内部的对象其实也是一种引用，所以不能通过find获取对象后的形式进行修改，此时返回的对象就是原对象的引用
  - 我们可以通过map return 一个新的对象
- 如何通过 Immer 降低数组拷贝的重复度
  1. 安装use-immer库
  2. 引入 import {useImmer} from 'use-immer'
  3. 声明 const [form, updateArr] = useImmer([])
  4. 修改 updateArr(darft => darft[X] = XX)

  合理的选择State的结构
  - 使用单个 state 变量还是多个 state 变量
    合理进行state变量的设计，例如一个列表 就可以无需单独在设计一个total的state
  - 组织 state 时应避免的内容
    - 避免矛盾的state: 例如：isSubmit, isSubmitIng
    - 避免冗余的 例如list, 和total
    - 避免重复的，例如: arr, 和一个 arr[0]
    - 避免嵌套过深的state, 在set时会变得难以维护
  - 如何解决 state 结构中的常见问题
    - 扁平化处理

## 组件间共享状态
- 如何使用状态提升在组件之间共享状态
  - 将子组件内部公用的状态，提出来再父组件中进行维护，并通过props进行传入
- 什么是受控组件和非受控组件
  - 受控组件我们可以认为：这个组件接受了父组件的props,并根据对应的props进行改变。而非受控组件没有状态来进行控制。

## 对 state 进行保留和重置
- React 何时选择保留或重置状态
  - react 的规则时判断组件的位置是否在渲染树中发生改变，来判断是否需要重置
  - 保留，如果用户需要进行保留状态，那就保证组件的位置不会发生改变
  - 重置，可以通过改变组件渲染的位置和添加key的形式
- 如何强制 React 重置组件的状态
  - 通过定义一个不同的key，和更新在渲染树中的位置
- 键和类型如何影响状态是否被保留
  - 键就是key,可以认为是在父组件中的顺序，由于key是唯一的当这个位置，react会根据这个key判断哪些需要重置或不重置
  - 类型就是组件类型，我们可以认为 一个内部是p标签的组件的位置变了一个内部是span标签的组件，这样即使效果一样，但是react也会重新渲染。（包含纯函数、类组件、纯组件、高阶组件）


  ## 迁移状态逻辑至 Reducer 中
  - 什么是 reducer 函数
  - 如何将 useState 重构成 useReducer
  - 什么时候使用 reducer
  - 如何编写一个好的 reducer