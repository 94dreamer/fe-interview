### 1. 覆盖默认样式

完成一个函数 getDefaultStyledPost，这个函数接受一个表示样式的对象作为参数，返回一个组件只有 <p> 元素的组件：

```
const Post = getDefaultStyledPost({ color: 'red' })
<Post /> // <p>任意内容</p>，颜色为红色
```

渲染出来的 <p> 元素要具有 getDefaultStyledPost 所接受对象所表示的样式。此外，返回的 Post 组件还要能够接受一个 style 对象作为 props，这个对象会和原来的样式进行合并显示：

```
const Post = getDefaultStyledPost({ color: 'red' })
<Post style={{ color: 'blue', fontSize: '13px' }} />
<Post style={{ fontSize: '12px' }} />
```

上面第一个 <Post /> 渲染结果为：颜色为蓝色，字体大小为 13px。
上面第二个 <Post /> 渲染结果为：颜色为红色，字体大小为 12px。

> ### 答案：

```
const getDefaultStyledPost = (defaultStyle) => {
  /* TODO */
  let Post=(props)=><p style={Object.assign(defaultStyle,props.style)}></p>
  return Post
}
```


### 2. React.js 加载、刷新数据 - 高阶组件

React.js 加载、刷新数据 这种加载数据、刷新数据的行为很常见，现在把这种逻辑抽离到高阶组件当中去。完成高阶组件 loadAndRefresh，它具有以下功能：

```
class Post extends Component {
  render () {
    return (
      <div>
        <p>{this.props.content}</p>
        <button onClick={() => this.props.refresh()}>刷新</button>
      </div>
    )
  }
}

Post = loadAndRefresh('/post')(Post)
```

高阶组件 loadAndRefresh 接受一个 url 作为参数，然后返回一个接受组件作为参数的函数，这个新函数返回一个新的组件。新的组件渲染的时候会给传入的组件设置 content 和 refresh 作为 props。

环境中已经定义好了一个 getData(url) 的返回 Promise 的函数，它会去服务器取一个字符串的文本，你需要通过 content 的 props 把它传给被包裹的组件。组件在第一次加载还有 refresh 的时候会去服务器取数据。

另外，组件在加载数据的时候，content 显示 数据加载中...。而且，所有传给 loadAndRefresh 返回的组件的 props 要原封不动传给被包裹的组件。

> ### 答案：

```

const loadAndRefresh = (url)=>{
  return (WrappedComponent)=>class extends Component{
      constructor(props) {
      super(props);
      this.state = {
        content:'数据加载中...'
      }
    }
    
    componentDidMount(){
      this.refresh();
    }
    
    refresh=()=>{
      this.setState({content:'数据加载中...'});
      var getUrl=getData(url);
      getUrl.then((res)=>{
        this.setState({content:res});
      })
    }
    
    render(){
      return <WrappedComponent refresh={this.refresh} content={this.state.content} {...this.props} /> 
    }
  }
}
```

### 3. 高阶组件 + context

完成高阶组件 makeProvider，接受一个任意类型的数据和组件作为参数：

Post = makeProvider({ name: 'Jerry' })(Post)
Post 下的所有子组件都可以通过 this.context.data 获取到传给 makeProvider 的参数。如上面的 Post 及其子组件的内部可以通过 this.context.data.name 获取到 Jerry。

> ### 答案：

```
const makeProvider = (data)=>(WrapComponent)=>class extends Component{
  static childContextTypes={
    data:PropTypes.any.isRequired
  }
  
  getChildContext(){
    return {data:data}
  }
  
  render(){
    return <WrapComponent />
  }
}
```

### 4. React-redux 实现用户列表的显示、增加、删除一个TODO（一）

完成一个符合 Redux 要求的 Reducer usersReducer，它可以支持以下对一个存储用户信息的数组进行增、删、改的需求：

```
/**
 * 用户的数据包括三部分，姓名（username）、年龄（age）、性别（gender）
 */

/* 增加用户操作 */
dispatch({
  type: 'ADD_USER',
  user: {
    username: 'Lucy',
    age: 12,
    gender: 'female'
  }
})

/* 通过 id 删除用户操作 */
dispatch({
  type: 'DELETE_USER',
  index: 0 // 删除特定下标用户
})

/* 修改用户操作 */
dispatch({
  type: 'UPDATE_USER',
  index: 0,
  user: {
    username: 'Tomy',
    age: 12,
    gender: 'male'
  }
})
```

> 答案：

一开始是这样的，但是不够优化：

```
const usersReducer = function(state=[],action){
  let arr=state.concat([]);
  switch(action.type){
    case 'ADD_USER':
      return state.concat(action.user);
    case 'DELETE_USER':
      arr.splice(action.index,1);
      return arr;
    case 'UPDATE_USER':
      arr.splice(action.index,1,action.user);
      return arr;
    default:
      return state
  }
}
```
最后改成这样的：

```
```

### 5. React-redux 实现用户列表的显示、增加、删除一个的TODO（二）

直接使用在 实现 Users Reducer 中实现的 userReducer。用 react-redux 完成 UserList、User 组件，可以对用户列表进行显示、增加、删除操作。

你不需要实现 store 的生成和使用 Provider，只需要完成 connect 的过程和组件的实现。

（留意 `<input type="number" />` 的字符串和数字的转换问题）

> 答案：

```
class User extends Component {
  render () {
    const { user } = this.props
    return (
      <div>
        <div>Name: {user.username}</div>
        <div>Age: {user.age}</div>
        <div>Gender: {user.gender}</div>
        <button>删除</button>
      </div>
    )
  }
}

class UsersList extends Component {
  render () {
    handleClick=()=>{
      dispatch({
        type:'ADD_USER',
        user:{
        	username: 'Tomy',
		  	age: 12,
		  	gender: 'male'
        }
      })
    }
    
    return (
      <div>
        {/* 输入用户信息，点击“新增”按钮可以增加用户 */}
        <div className='add-user'>
          <div>Username: <input type='text' /></div>
          <div>Age: <input type='number' /></div>
          <div>Gender:
            <label>Male: <input type='radio' name='gender' value='male' /></label>
            <label>Female: <input type='radio' name='gender' value='female' /></label>
          </div>
          <button onClick={this.handleClick}>增加</button>
        </div>
        {/* 显示用户列表 */}
        <div className='users-list'>{this.props.userlist.map(item=><User key={item.number} user={item} />)}</div>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{

};

const mapDispatchToProps =(dispatch)=>{

};

export connect(mapStateToProps,mapDispatchToProps)(UsersList);
```



