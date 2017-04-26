/**
 * Created by liu on 17-4-12.
 */
const Storage_key = '知乎日报'
export default {
    fetch(){
        return JSON.parse(window.localStorage.getItem(STORAGE_KEY)  || '[]')
    },
    save(data){
        window.localStorage.setItem(STORAGE_KEY,JSON.stringify(data))
    }
}