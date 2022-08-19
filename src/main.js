//wheel表示滚轮
//   e.preventDefault()阻止wheel的默认属性鼠标滚轮
//鼠标滚轮效果就是滚动


//阻止滚动的一种方式（阻止鼠标滚轮）
x.addEventListener('wheel', (e) => {
    e.preventDefault()
})
//但此时页面还是会有滚动条，用户可以点击滚动条滚动
//利用CSS删除滚动条，详见style.css

//手机此时仍可点击拖动屏幕滚动
//此事件直接阻止点击
x.addEventListener('touchstart', (e) => {
    e.preventDefault()
})


// x.addEventListener('scroll', (e) => {
//     e.preventDefault() //scroll是滚动事件，滚动的默认事件并不是滚动
//     e.stopPropagation()
//     //阻止捕获和冒泡阶段中当前事件的进一步传播。但是，它不能防止任何默认行为的发生
//     //但此时html并没有冒泡
// })