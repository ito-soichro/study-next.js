import React, {useState} from 'react'

const usePersist = (ky, initVal) => {
    const key = "hooks:" + ky
    const value = () => {
      try{
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : initVal
      }catch (err){
        console.log(err)
        return initVal;
      }
    }

    const setValue = (val) => {
      try{
        setSavedValue(val)
        window.localStorage.getItem(key,JSON.stringify(val))
      }catch (err){
        console.log(err)
      }
    }
    const [savedValue, setSavedValue] = useState(value)
    return [savedValue, setValue]
}

export default usePersist; 