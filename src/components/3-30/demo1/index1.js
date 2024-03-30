// 注意内联样式应采用小驼峰时的写法 background-color -> backGroundColor
export default function Demo () {
  const name = 'Hedy Lamarr';
  const toDay = new Date()
  function formDate (date) {
    return new Intl.DateTimeFormat(
      'zh-CN',
      { weekday: 'long' }
    ).format(date)
  }
  return (
    <>
      <h1>{name}'s To Do List</h1>
      <h1>{formDate(toDay)}</h1>
      <ul style={{
        backgroundColor: 'red',
        color: 'pink'
      }}>
        <li>内联样式</li>
      </ul>
    </>
  );
}