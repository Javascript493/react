// 使用immer
import {useImmer} from 'use-immer'
import {useState} from 'react'
export default function Demo () {
  const [form, setForm] = useImmer({
    name: 'heyunfei',
    seg: '男',
    email: 'XXXX',
    son: {
      name: 'xiaphe'
    }
  })
  function handleNameChaneg (e) {
    setForm(form => {
      form.name = e.target.value
    })
    console.log(form)
    
  }
  function handleSonNameChaneg (e) {
    setForm(form => {
      form.son.name = e.target.value
    })
    console.log(form)
  }
  return <>
  <label>
    name: 
    <input value={form.name} onChange={handleNameChaneg} />
  </label>
  <label>
    sonName:
    <input value={form.son.name}
    onChange={handleSonNameChaneg} />
  </label>
  </>
}